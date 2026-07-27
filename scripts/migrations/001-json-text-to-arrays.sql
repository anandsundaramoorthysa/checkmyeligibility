-- Migration 001: convert the JSON-in-TEXT columns to real Postgres text[].
--
-- WHY
-- `category`, `education_level`, `benefit_type` and `states` are TEXT columns
-- holding a JSON array serialised to a string, e.g. '["ug","pg"]'. Application
-- code naturally reaches for `'ug' = ANY(education_level)`, which raises
--   op ANY/ALL (array) requires array on right side
-- and took scheme retrieval down completely until it was worked around in
-- src/lib/chat/db.ts. That workaround is correct but the schema is still the
-- hazard: the next person to write a query will hit the same wall, and the
-- columns cannot be GIN-indexed while they are text.
--
-- SAFETY
-- This has NOT been run against production. Review it, take a backup, and run
-- it in a transaction against a branch/copy first. Neon can branch a database,
-- which is the cheapest way to rehearse this.
--
-- AFTER MIGRATING
-- `jsonContains()` in src/lib/chat/db.ts can be replaced with plain
-- `$1 = ANY(col)` and the GIN indexes at the bottom will actually be used.

BEGIN;

-- 1. Sanity check. Every value should either be a JSON array or NULL/empty.
--    If this returns rows, stop and inspect them before going further.
SELECT id, name, 'category' AS col, category AS value
FROM schemes
WHERE category IS NOT NULL AND category <> '' AND category !~ '^\s*\['
UNION ALL
SELECT id, name, 'education_level', education_level
FROM schemes
WHERE education_level IS NOT NULL AND education_level <> '' AND education_level !~ '^\s*\['
UNION ALL
SELECT id, name, 'benefit_type', benefit_type
FROM schemes
WHERE benefit_type IS NOT NULL AND benefit_type <> '' AND benefit_type !~ '^\s*\['
UNION ALL
SELECT id, name, 'states', states
FROM schemes
WHERE states IS NOT NULL AND states <> '' AND states !~ '^\s*\[';

-- 2. Keep the originals until the application has been verified against the
--    new columns. Drop these in a follow-up migration, not this one.
ALTER TABLE schemes
  ADD COLUMN IF NOT EXISTS category_old        TEXT,
  ADD COLUMN IF NOT EXISTS education_level_old TEXT,
  ADD COLUMN IF NOT EXISTS benefit_type_old    TEXT,
  ADD COLUMN IF NOT EXISTS states_old          TEXT;

UPDATE schemes SET
  category_old        = category,
  education_level_old = education_level,
  benefit_type_old    = benefit_type,
  states_old          = states;

-- 3. Convert in place. A malformed or empty value becomes an empty array
--    rather than NULL, so `= ANY(col)` is always safe to call.
ALTER TABLE schemes
  ALTER COLUMN category TYPE text[] USING (
    CASE
      WHEN category IS NULL OR category = '' THEN '{}'::text[]
      WHEN category ~ '^\s*\[' THEN ARRAY(SELECT jsonb_array_elements_text(category::jsonb))
      ELSE ARRAY[category]
    END
  ),
  ALTER COLUMN education_level TYPE text[] USING (
    CASE
      WHEN education_level IS NULL OR education_level = '' THEN '{}'::text[]
      WHEN education_level ~ '^\s*\[' THEN ARRAY(SELECT jsonb_array_elements_text(education_level::jsonb))
      ELSE ARRAY[education_level]
    END
  ),
  ALTER COLUMN benefit_type TYPE text[] USING (
    CASE
      WHEN benefit_type IS NULL OR benefit_type = '' THEN '{}'::text[]
      WHEN benefit_type ~ '^\s*\[' THEN ARRAY(SELECT jsonb_array_elements_text(benefit_type::jsonb))
      ELSE ARRAY[benefit_type]
    END
  ),
  ALTER COLUMN states TYPE text[] USING (
    CASE
      WHEN states IS NULL OR states = '' THEN '{}'::text[]
      WHEN states ~ '^\s*\[' THEN ARRAY(SELECT jsonb_array_elements_text(states::jsonb))
      ELSE ARRAY[states]
    END
  );

ALTER TABLE schemes
  ALTER COLUMN category        SET DEFAULT '{}',
  ALTER COLUMN education_level SET DEFAULT '{}',
  ALTER COLUMN benefit_type    SET DEFAULT '{}',
  ALTER COLUMN states          SET DEFAULT '{}';

-- 4. Verify the round trip before committing. Each of these should be 0.
SELECT
  count(*) FILTER (WHERE array_length(category, 1) IS DISTINCT FROM
    (SELECT count(*) FROM jsonb_array_elements_text(NULLIF(category_old, '')::jsonb))) AS category_mismatch,
  count(*) FILTER (WHERE array_length(education_level, 1) IS DISTINCT FROM
    (SELECT count(*) FROM jsonb_array_elements_text(NULLIF(education_level_old, '')::jsonb))) AS education_level_mismatch,
  count(*) FILTER (WHERE array_length(benefit_type, 1) IS DISTINCT FROM
    (SELECT count(*) FROM jsonb_array_elements_text(NULLIF(benefit_type_old, '')::jsonb))) AS benefit_type_mismatch,
  count(*) FILTER (WHERE array_length(states, 1) IS DISTINCT FROM
    (SELECT count(*) FROM jsonb_array_elements_text(NULLIF(states_old, '')::jsonb))) AS states_mismatch
FROM schemes;

-- 5. Now the filters can be indexed, which they could not be as text.
CREATE INDEX IF NOT EXISTS schemes_category_gin        ON schemes USING GIN (category);
CREATE INDEX IF NOT EXISTS schemes_education_level_gin ON schemes USING GIN (education_level);
CREATE INDEX IF NOT EXISTS schemes_benefit_type_gin    ON schemes USING GIN (benefit_type);
CREATE INDEX IF NOT EXISTS schemes_states_gin          ON schemes USING GIN (states);
CREATE INDEX IF NOT EXISTS schemes_status_reviewed_idx ON schemes (status, reviewed_at DESC);

-- Inspect the verification output above. COMMIT only if the mismatch counts
-- are all zero; otherwise ROLLBACK.
-- COMMIT;
ROLLBACK;
