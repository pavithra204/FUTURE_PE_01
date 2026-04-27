import { useRef, type ReactNode, type CSSProperties } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  floatDelay?: number;
  floatDuration?: number;
  style?: CSSProperties;
}

export function TiltCard({ children, className = "", floatDelay = 0, floatDuration = 3, style }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    const rx = (-y * 12).toFixed(2);
    const ry = (x * 12).toFixed(2);
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
    el.style.setProperty("--lift", "-12px");
    el.style.setProperty("--scl", "1.05");
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--lift", "0px");
    el.style.setProperty("--scl", "1");
  };

  return (
    <div
      className="veya-float-card"
      style={{ animationDelay: `${floatDelay}s`, animationDuration: `${floatDuration}s` }}
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`veya-tilt-inner rounded-2xl border border-border bg-card/80 backdrop-blur-sm transition-[transform,box-shadow] duration-300 ${className}`}
        style={{
          transform:
            "perspective(1000px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) translateY(var(--lift,0px)) scale(var(--scl,1))",
          ...style,
        }}
      >
        {children}
      </div>
    </div>
  );
}