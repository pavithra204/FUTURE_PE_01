import { useEffect, useRef, useState, type ReactNode, type CSSProperties, type ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
}

export function Reveal({ children, delay = 0, className = "", as: Tag = "div", style }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const Comp = Tag as any;
  return (
    <Comp
      ref={ref as any}
      className={`veya-reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ animationDelay: `${delay}s`, ...style }}
    >
      {children}
    </Comp>
  );
}