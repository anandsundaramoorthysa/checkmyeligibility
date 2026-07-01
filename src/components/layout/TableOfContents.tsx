"use client";

import { useEffect, useState } from "react";

interface Section {
  id: string;
  title: string;
}

export function TableOfContents({ sections }: { sections: Section[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const ids = sections.map((s) => s.id);
    const visible = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting));
        const first = ids.find((id) => visible.get(id));
        if (first) setActiveId(first);
      },
      { rootMargin: "0px 0px -50% 0px", threshold: 0 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="On this page" className="hidden lg:block">
      <div className="sticky top-24">
        <p className="font-mono text-xs font-bold uppercase tracking-widest text-saffron-deep">
          On this page
        </p>
        <ul className="mt-4 space-y-1">
          {sections.map((section) => {
            const isActive = section.id === activeId;
            return (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={[
                    "block rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                    isActive
                      ? "bg-saffron-soft text-navy"
                      : "text-ink-muted hover:bg-surface-subtle hover:text-ink",
                  ].join(" ")}
                >
                  {section.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
