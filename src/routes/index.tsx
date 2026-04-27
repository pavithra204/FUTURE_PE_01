import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero-salon.jpg";
import experienceImg from "@/assets/signature-experience.jpg";
import svcHair from "@/assets/svc-hair.jpg";
import svcKeratin from "@/assets/svc-keratin.jpg";
import svcBridal from "@/assets/svc-bridal.jpg";
import svcFacial from "@/assets/svc-facial.jpg";
import svcNails from "@/assets/svc-nails.jpg";
import aboutProducts from "@/assets/about-products.jpg";
import { Navbar } from "@/components/veya/Navbar";
import { Particles, HeroOrbs } from "@/components/veya/Particles";
import { TiltCard } from "@/components/veya/TiltCard";
import { Reveal } from "@/components/veya/Reveal";
import { GlowButton } from "@/components/veya/GlowButton";
import {
  Scissors,
  Sparkles,
  Crown,
  Droplets,
  Palette,
  Star,
  Phone,
  MapPin,
  Award,
  HeartHandshake,
  Gem,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Veya Beauty — Vijayawada's Premium Salon | MG Road" },
      {
        name: "description",
        content:
          "Premium beauty salon in Vijayawada offering hair coloring, keratin, bridal makeup, facials & nail art with L'Oréal, Wella, OPI. 500+ five-star reviews.",
      },
      { property: "og:title", content: "Veya Beauty — Vijayawada's Premium Salon" },
      {
        property: "og:description",
        content:
          "A complete beauty experience backed by international brands and five-star service on MG Road, Vijayawada.",
      },
    ],
  }),
});

const services = [
  { icon: Palette, title: "Hair Coloring", image: svcHair, desc: "Custom L'Oréal & Wella color crafted for tone, texture, and lifestyle." },
  { icon: Sparkles, title: "Keratin Treatment", image: svcKeratin, desc: "Smoothing, frizz-free hair that stays soft and salon-fresh for months." },
  { icon: Crown, title: "Bridal Makeup", image: svcBridal, desc: "Heirloom-worthy bridal looks tailored to your features and ceremony." },
  { icon: Droplets, title: "Skin Facials", image: svcFacial, desc: "Targeted facial therapies for radiance, hydration, and lasting glow." },
  { icon: Scissors, title: "Nail Art", image: svcNails, desc: "Premium OPI manicures and bespoke nail artistry, finished to perfection." },
];

const reasons = [
  {
    icon: Gem,
    title: "International Brands Only",
    desc:
      "Every service at Veya uses L'Oréal, Wella, and OPI — because the quality of what goes on your hair and skin matters as much as the skill behind it.",
  },
  {
    icon: Award,
    title: "Five-Star Rated, Every Time",
    desc:
      "Over 500 happy clients have left us their highest rating — and we work hard to earn that with every single appointment.",
  },
  {
    icon: HeartHandshake,
    title: "Tailored to You",
    desc:
      "No two clients are the same, so we never treat them that way — every service begins with a personal consultation to understand exactly what you want.",
  },
];

function Stars() {
  return (
    <div className="inline-flex items-center gap-1.5">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          className="veya-star h-5 w-5 fill-current"
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}
    </div>
  );
}

function Index() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      const el = parallaxRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const offset = rect.top * -0.3;
      el.style.transform = `translate3d(0, ${offset}px, 0) scale(1.15)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-foreground">
      <Navbar />
      <Particles count={18} />

      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Veya Beauty premium salon interior"
            className="h-full w-full object-cover opacity-15"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/90 to-background" />
        </div>
        <div className="absolute inset-0 -z-10 veya-hero-bg" />
        <HeroOrbs />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-10 py-20">
          <p className="veya-hero-in text-sm tracking-[0.4em] uppercase text-primary mb-6">
            Veya Beauty · MG Road, Vijayawada
          </p>
          <h1 className="veya-hero-in font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-5xl">
            Vijayawada's <span className="veya-gradient-text">Premium Salon</span> for People Who Care About Quality.
          </h1>
          <p className="veya-hero-in-2 mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
            For women and men aged 18 to 45 who want more than just a haircut — a complete beauty experience backed by
            international brands and five-star service.
          </p>
          <div className="veya-hero-in-3 mt-10 flex flex-wrap items-center gap-6">
            <GlowButton href="tel:+919876543210">
              <Phone className="h-4 w-4" />
              Call +91 98765 43210
            </GlowButton>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Stars />
              <span>500+ five-star reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / ABOUT */}
      <section id="about" className="relative py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-primary/20 blur-2xl" />
              <img
                src={aboutProducts}
                alt="Premium L'Oréal, Wella and OPI products on dark marble"
                className="relative rounded-3xl border border-border/60 shadow-2xl"
                loading="lazy"
                width={1280}
                height={1280}
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Our Story</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Every visit should leave you feeling <span className="veya-gradient-text">genuinely better</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                At Veya Beauty on MG Road, we believe every visit should leave you feeling genuinely better — not just
                about how you look, but about how you feel. We work with trusted international brands like L'Oréal,
                Wella, and OPI because your hair, skin, and nails deserve nothing less. With over 500 five-star
                reviews and a team that genuinely loves what they do, Veya Beauty has quietly become Vijayawada's most
                trusted name in premium beauty care.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap gap-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">
                <span className="rounded-full border border-border px-4 py-2">L'Oréal</span>
                <span className="rounded-full border border-border px-4 py-2">Wella</span>
                <span className="rounded-full border border-border px-4 py-2">OPI</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section id="why" className="relative py-28 px-6 lg:px-10 bg-secondary/60">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Why Choose Us</p>
            <h2 className="font-serif text-4xl md:text-5xl">Three reasons clients keep coming back.</h2>
            <div className="mt-6 flex justify-center">
              <Stars />
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <Reveal key={r.title} delay={i * 0.15}>
                  <TiltCard floatDelay={i * 0.6} floatDuration={3 + i * 0.4} className="h-full p-8">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="font-serif text-2xl mb-3">{r.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-28 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Signature Services</p>
            <h2 className="font-serif text-4xl md:text-5xl">Crafted with international brands.</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <Reveal key={s.title} delay={i * 0.15}>
                  <TiltCard
                    floatDelay={i * 0.5 + 0.2}
                    floatDuration={3 + (i % 3) * 0.5}
                    className="h-full overflow-hidden"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                        loading="lazy"
                        width={1024}
                        height={1280}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                      <div className="absolute top-4 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-background/70 backdrop-blur text-primary border border-primary/30">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="p-8 pt-6">
                      <h3 className="font-serif text-2xl mb-3">{s.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </TiltCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* SIGNATURE EXPERIENCE — parallax */}
      <section id="experience" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div ref={parallaxRef} className="absolute inset-0 will-change-transform">
            <img
              src={experienceImg}
              alt="Calm candlelit luxury spa"
              className="h-[130%] w-full object-cover opacity-20"
              loading="lazy"
              width={1600}
              height={1000}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>

        <div className="mx-auto max-w-4xl px-6 lg:px-10 text-center">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">The Signature Experience</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-6xl leading-tight">
              A space crafted for your <span className="veya-gradient-text">comfort and confidence.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
              Step into a calm, beautifully designed space where every detail is crafted for your comfort and
              confidence. From personalized consultations to expert styling and skin treatments, each service is
              tailored using trusted international brands like L'Oréal, Wella, and OPI. You walk out not just looking
              better, but feeling completely refreshed and taken care of.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex justify-center">
              <GlowButton href="tel:+919876543210">
                <Phone className="h-4 w-4" /> Book Your Appointment
              </GlowButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="relative py-28 px-6 lg:px-10 bg-secondary/60">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-3xl border border-primary/30 bg-card/70 backdrop-blur-md p-10 md:p-16 text-center relative overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 opacity-60 veya-hero-bg"
                style={{ filter: "blur(60px)" }}
              />
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Book Your Visit</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight max-w-3xl mx-auto">
                Book your appointment today and experience{" "}
                <span className="veya-gradient-text">premium care tailored just for you.</span>
              </h2>
              <a
                href="tel:+919876543210"
                className="veya-phone block mt-10 font-serif text-4xl md:text-6xl text-primary tracking-wide"
              >
                +91 98765 43210
              </a>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
                <GlowButton href="tel:+919876543210">
                  <Phone className="h-4 w-4" /> Call Now
                </GlowButton>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 text-primary" />
                  Shop 12, MG Road, Vijayawada, Andhra Pradesh
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-border/60 py-12 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row gap-6 items-center justify-between text-sm text-muted-foreground">
          <div className="font-serif text-xl">
            <span className="veya-gradient-text">Veya</span> Beauty
          </div>
          <div>Shop 12, MG Road, Vijayawada, Andhra Pradesh</div>
          <a href="tel:+919876543210" className="text-primary hover:underline">
            +91 98765 43210
          </a>
        </div>
      </footer>
    </div>
  );
}
