import { useMemo } from "react";

export function Particles({ count = 18 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 18 + Math.random() * 22,
        delay: -Math.random() * 30,
        opacity: 0.2 + Math.random() * 0.4,
        key: i,
      })),
    [count]
  );
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((p) => (
        <span
          key={p.key}
          className="veya-particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

export function HeroOrbs() {
  const orbs = useMemo(
    () =>
      Array.from({ length: 7 }).map((_, i) => ({
        left: 5 + Math.random() * 90,
        size: 60 + Math.random() * 140,
        duration: 14 + Math.random() * 16,
        delay: -Math.random() * 20,
        key: i,
      })),
    []
  );
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
      {orbs.map((o) => (
        <span
          key={o.key}
          className="veya-orb"
          style={{
            left: `${o.left}%`,
            bottom: "-20%",
            width: o.size,
            height: o.size,
            animationDuration: `${o.duration}s`,
            animationDelay: `${o.delay}s`,
          }}
        />
      ))}
    </div>
  );
}