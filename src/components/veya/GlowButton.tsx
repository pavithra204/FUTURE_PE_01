import { forwardRef, type AnchorHTMLAttributes, type ReactNode } from "react";

interface GlowButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

export const GlowButton = forwardRef<HTMLAnchorElement, GlowButtonProps>(
  ({ children, className = "", onClick, ...rest }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      const target = e.currentTarget;
      const rect = target.getBoundingClientRect();
      const ripple = document.createElement("span");
      const size = Math.max(rect.width, rect.height);
      ripple.className = "veya-ripple";
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
      target.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
      onClick?.(e);
    };
    return (
      <a
        ref={ref}
        onClick={handleClick}
        className={`veya-cta inline-flex items-center justify-center gap-3 rounded-full bg-accent px-9 py-4 font-medium text-accent-foreground tracking-wide ${className}`}
        {...rest}
      >
        {children}
      </a>
    );
  }
);
GlowButton.displayName = "GlowButton";