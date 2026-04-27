import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-[0_8px_30px_-10px_rgba(0,0,0,0.6)]" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="font-serif text-2xl tracking-wide">
          <span className="veya-gradient-text">Veya</span>
          <span className="text-foreground/80"> Beauty</span>
        </a>
        <ul className="hidden md:flex items-center gap-9 text-sm text-foreground/80">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="veya-nav-link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="tel:+919876543210"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/40 px-5 py-2 text-sm text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          +91 98765 43210
        </a>
      </nav>
    </header>
  );
}