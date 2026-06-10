export interface CitizenImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

const BASE = "/images";

/**
 * Republic-Day citizen illustrations (clean white background — shown on white
 * bands so they blend seamlessly). Ordered for a pleasant alternating row.
 */
export const CITIZENS: CitizenImage[] = [
  {
    src: `${BASE}/woman-carrying-flower-basket.webp`,
    width: 198,
    height: 334,
    alt: "Indian woman carrying a basket of flowers",
  },
  {
    src: `${BASE}/indian-couple-celebrating-with-flag.webp`,
    width: 282,
    height: 298,
    alt: "Indian couple celebrating with the national flag",
  },
  {
    src: `${BASE}/man-playing-dhol-drum.webp`,
    width: 186,
    height: 331,
    alt: "Indian man playing a dhol drum",
  },
  {
    src: `${BASE}/girl-and-man-with-indian-flag.webp`,
    width: 238,
    height: 324,
    alt: "A girl and a man holding the Indian flag",
  },
  {
    src: `${BASE}/woman-in-green-saree-with-garland.webp`,
    width: 166,
    height: 328,
    alt: "Indian woman in a green saree holding a flower garland",
  },
  {
    src: `${BASE}/indian-father-and-son-with-balloons.webp`,
    width: 286,
    height: 324,
    alt: "Indian father and son celebrating with balloons",
  },
  {
    src: `${BASE}/indian-classical-dancer-orange.webp`,
    width: 182,
    height: 331,
    alt: "Indian classical dancer performing",
  },
  {
    src: `${BASE}/indian-classical-dancer-green.webp`,
    width: 158,
    height: 324,
    alt: "Indian classical dancer in a green costume",
  },
];
