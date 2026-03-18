"use client";

import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";

/* ───────────────────────── Data ───────────────────────── */

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#problem", label: "Why" },
  { href: "#ace", label: "Ace AI" },
  { href: "#difference", label: "About" },
  { href: "#contact", label: "Inquiry" },
];

const painPoints = [
  {
    number: "01",
    title: "Another Dashboard Nobody Opens",
    copy: "Most AI tools hand you a cockpit of toggles and charts. Your executives didn't climb to the top to learn another platform.",
  },
  {
    number: "02",
    title: "Consultants Who Bill by the Question",
    copy: "You've hired advisors. They delivered slide decks. What you needed was a working system that runs without them.",
  },
  {
    number: "03",
    title: "Content That Sounds Like a Robot Wrote It",
    copy: "Generic AI output erodes the personal brand your leadership spent years building. One bad post undoes months of trust.",
  },
];

const aceCapabilities = [
  {
    title: "Digital Human Synthesis",
    copy: "Photorealistic brand avatars generated from a single photo. Your likeness, your style, your control.",
  },
  {
    title: "Omni-Channel Publishing",
    copy: "LinkedIn, X, Instagram, TikTok — deployed simultaneously from one command. No scheduling tools. No copy-paste.",
  },
  {
    title: "Narrative Intelligence",
    copy: "Adaptive models that learn your voice so every post sounds like you wrote it. Because your audience can tell when you didn't.",
  },
];

const steps = [
  {
    number: "01",
    title: "Brief",
    copy: "A confidential conversation about your brand, your voice, and what you need the world to see.",
  },
  {
    number: "02",
    title: "Build",
    copy: "We architect a system tailored to your operation. No templates. No off-the-shelf configurations.",
  },
  {
    number: "03",
    title: "Run",
    copy: "Your system operates. Content publishes. Engagement grows. You focus on running your business.",
  },
];

/* ───────────────────────── Components ───────────────────────── */

function FadeSection({
  children,
  id,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
  delay?: number;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      id={id}
      className={`transition-all duration-[900ms] ease-[cubic-bezier(0.2,0.85,0.2,1)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}

function GridBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Radial gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(197,160,89,0.08)_0%,rgba(11,12,16,1)_55%)]" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(197,160,89,1) 1px, transparent 1px), linear-gradient(90deg, rgba(197,160,89,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {/* Floating orbs */}
      <div className="animate-float-slow absolute left-[15%] top-[20%] h-[400px] w-[400px] rounded-full bg-gold/[0.04] blur-[100px]" />
      <div className="animate-float-slower absolute right-[10%] top-[60%] h-[300px] w-[300px] rounded-full bg-champagne/[0.03] blur-[80px]" />
    </div>
  );
}

/* ───────────────────────── Page ───────────────────────── */

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative overflow-hidden bg-obsidian">
      <GridBackground />

      {/* ─── Header ─── */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/10 bg-obsidian/70 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
          <Link
            href="#hero"
            className="relative overflow-hidden font-[var(--font-cinzel)] text-[11px] uppercase tracking-[0.25em] text-gold md:text-xs"
          >
            <span className="relative inline-block px-1">Revelation Inc.</span>
            <span className="gold-foil-shimmer" aria-hidden="true" />
          </Link>

          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-[var(--font-inter)] text-[11px] uppercase tracking-[0.18em] text-ivory/60 transition-colors duration-300 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded border border-gold/40 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold/10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {/* ─── Mobile Nav ─── */}
      <aside
        className={`fixed right-0 top-0 z-40 h-full w-72 transform border-l border-gold/20 bg-obsidian/95 px-7 pt-24 backdrop-blur-2xl transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-7">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-[var(--font-inter)] text-sm uppercase tracking-[0.18em] text-ivory/70 transition hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* ─── Hero ─── */}
      <section
        id="hero"
        className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-24 pt-32 md:px-10 md:pt-40"
      >
        <FadeSection id="hero-fade">
          <p className="mb-6 font-[var(--font-cinzel)] text-[10px] uppercase tracking-[0.3em] text-gold/70">
            Revelation Inc. AI
          </p>
          <h1 className="max-w-5xl font-[var(--font-cinzel)] text-4xl uppercase leading-[1.15] tracking-[0.12em] text-ivory sm:text-5xl md:text-7xl lg:text-8xl">
            Your Executives Have{" "}
            <span className="text-gold">Better Things</span> To Do.
          </h1>
          <p className="mt-8 max-w-2xl font-[var(--font-inter)] text-base leading-relaxed text-ivory/60 md:text-lg md:leading-relaxed">
            We build AI systems that run your brand presence, publish your
            content, and grow your audience — so your leadership never has to
            open another dashboard.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-sm border border-gold/60 bg-gold/10 px-10 py-4 font-[var(--font-inter)] text-sm uppercase tracking-[0.14em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-obsidian"
            >
              Request a Briefing
            </a>
            <a
              href="#ace"
              className="inline-flex items-center gap-2 px-2 py-4 font-[var(--font-inter)] text-sm uppercase tracking-[0.14em] text-ivory/50 transition-colors hover:text-gold"
            >
              See Ace AI
              <span className="text-gold/60">&#8594;</span>
            </a>
          </div>
        </FadeSection>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.3em] text-ivory/30">
              Scroll
            </span>
            <div className="h-8 w-[1px] animate-pulse bg-gradient-to-b from-gold/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="mx-auto h-[1px] max-w-7xl bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      {/* ─── Problem Section ─── */}
      <section
        id="problem"
        className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32"
      >
        <FadeSection id="problem-label">
          <p className="font-[var(--font-cinzel)] text-[10px] uppercase tracking-[0.3em] text-gold/70">
            The Problem
          </p>
        </FadeSection>
        <FadeSection id="problem-heading" delay={100}>
          <h2 className="mt-5 max-w-4xl font-[var(--font-cinzel)] text-3xl uppercase tracking-[0.1em] text-ivory sm:text-4xl md:text-5xl">
            AI Was Supposed to Make Things{" "}
            <span className="text-gold">Simpler.</span>
          </h2>
          <p className="mt-6 max-w-2xl font-[var(--font-inter)] text-base leading-relaxed text-ivory/55 md:text-lg">
            Instead, it created a new category of work. More tools to manage.
            More platforms to learn. More content that doesn't sound like you.
          </p>
        </FadeSection>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <FadeSection key={point.number} id={`pain-${point.number}`} delay={i * 150}>
              <article className="group h-full rounded-lg border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-gold/25 hover:bg-white/[0.04]">
                <span className="font-[var(--font-inter)] text-[11px] tracking-[0.2em] text-gold/50">
                  {point.number}
                </span>
                <h3 className="mt-4 font-[var(--font-cinzel)] text-lg uppercase tracking-[0.08em] text-ivory/90">
                  {point.title}
                </h3>
                <p className="mt-4 font-[var(--font-inter)] text-sm leading-relaxed text-ivory/50">
                  {point.copy}
                </p>
              </article>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="mx-auto h-[1px] max-w-7xl bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      {/* ─── Ace AI Section ─── */}
      <section
        id="ace"
        className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32"
      >
        <FadeSection id="ace-label">
          <p className="font-[var(--font-cinzel)] text-[10px] uppercase tracking-[0.3em] text-gold/70">
            Flagship Product
          </p>
        </FadeSection>
        <FadeSection id="ace-heading" delay={100}>
          <h2 className="mt-5 max-w-4xl font-[var(--font-cinzel)] text-3xl uppercase tracking-[0.1em] text-ivory sm:text-4xl md:text-5xl">
            Ace <span className="text-gold">AI</span>
          </h2>
          <p className="mt-6 max-w-3xl font-[var(--font-inter)] text-base leading-relaxed text-ivory/55 md:text-lg">
            A personal brand engine for executives who refuse to compromise
            their image. Ace generates your digital likeness, crafts content in
            your voice, and publishes across every platform — without you
            touching a single button.
          </p>
        </FadeSection>

        {/* Ace Dashboard Mock */}
        <FadeSection id="ace-dashboard" delay={200}>
          <div className="mt-14 rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-1">
            <div className="rounded-lg bg-obsidian/80 p-6 md:p-10">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gold/80" />
                  <span className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.2em] text-ivory/40">
                    Ace AI Command Layer
                  </span>
                </div>
                <span className="rounded-full border border-gold/30 px-3 py-1 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.2em] text-gold/70">
                  System Active
                </span>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <p className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.18em] text-ivory/35">
                    Publishing Queue
                  </p>
                  {[
                    { platform: "LinkedIn", type: "Executive Insight", status: "Ready" },
                    { platform: "X", type: "Market Commentary", status: "Ready" },
                    { platform: "Instagram", type: "Brand Moment", status: "Rendering" },
                    { platform: "TikTok", type: "Narrative Clip", status: "Queued" },
                  ].map((item) => (
                    <div
                      key={item.platform}
                      className="flex items-center justify-between rounded border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                    >
                      <div>
                        <span className="font-[var(--font-inter)] text-sm text-ivory/70">
                          {item.platform}
                        </span>
                        <span className="ml-3 text-[11px] text-ivory/30">
                          {item.type}
                        </span>
                      </div>
                      <span
                        className={`text-[10px] uppercase tracking-[0.15em] ${
                          item.status === "Ready"
                            ? "text-gold/70"
                            : item.status === "Rendering"
                            ? "text-champagne/50"
                            : "text-ivory/25"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <p className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.18em] text-ivory/35">
                    Avatar Pipeline
                  </p>
                  {[
                    { label: "Face Alignment", value: "Complete" },
                    { label: "Voiceprint Match", value: "98.7%" },
                    { label: "Brand Style Lock", value: "Enabled" },
                    { label: "Publish Window", value: "Armed" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                    >
                      <span className="font-[var(--font-inter)] text-sm text-ivory/70">
                        {item.label}
                      </span>
                      <span className="font-[var(--font-inter)] text-[11px] text-gold/60">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeSection>

        {/* Capability Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {aceCapabilities.map((cap, i) => (
            <FadeSection key={cap.title} id={`cap-${i}`} delay={i * 150}>
              <article className="group h-full rounded-lg border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-gold/25 hover:bg-white/[0.04]">
                <h3 className="font-[var(--font-cinzel)] text-base uppercase tracking-[0.1em] text-gold/90">
                  {cap.title}
                </h3>
                <p className="mt-4 font-[var(--font-inter)] text-sm leading-relaxed text-ivory/50">
                  {cap.copy}
                </p>
              </article>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="mx-auto h-[1px] max-w-7xl bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      {/* ─── How It Works ─── */}
      <section className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <FadeSection id="how-label">
          <p className="font-[var(--font-cinzel)] text-[10px] uppercase tracking-[0.3em] text-gold/70">
            Process
          </p>
        </FadeSection>
        <FadeSection id="how-heading" delay={100}>
          <h2 className="mt-5 max-w-4xl font-[var(--font-cinzel)] text-3xl uppercase tracking-[0.1em] text-ivory sm:text-4xl md:text-5xl">
            Three Steps. <span className="text-gold">Zero Complexity.</span>
          </h2>
        </FadeSection>

        <div className="mt-16 grid gap-0 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeSection key={step.number} id={`step-${step.number}`} delay={i * 200}>
              <div className="relative border-l border-white/[0.06] py-2 pl-8 md:border-l-0 md:border-t md:pb-0 md:pl-0 md:pt-8">
                {/* Step accent line */}
                <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-gold/40 to-transparent md:h-[1px] md:w-full md:bg-gradient-to-r" />
                <span className="font-[var(--font-inter)] text-[40px] font-light leading-none text-white/[0.06] md:text-[56px]">
                  {step.number}
                </span>
                <h3 className="mt-2 font-[var(--font-cinzel)] text-xl uppercase tracking-[0.1em] text-gold">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-sm font-[var(--font-inter)] text-sm leading-relaxed text-ivory/50 md:pr-8">
                  {step.copy}
                </p>
              </div>
            </FadeSection>
          ))}
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="mx-auto h-[1px] max-w-7xl bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      {/* ─── The Difference ─── */}
      <section
        id="difference"
        className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32"
      >
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <FadeSection id="diff-label">
              <p className="font-[var(--font-cinzel)] text-[10px] uppercase tracking-[0.3em] text-gold/70">
                Why Revelation
              </p>
            </FadeSection>
            <FadeSection id="diff-heading" delay={100}>
              <h2 className="mt-5 font-[var(--font-cinzel)] text-3xl uppercase tracking-[0.1em] text-ivory sm:text-4xl md:text-5xl">
                Built by Marketers.{" "}
                <span className="text-gold">Not Technologists.</span>
              </h2>
            </FadeSection>
            <FadeSection id="diff-body" delay={200}>
              <p className="mt-8 font-[var(--font-inter)] text-base leading-relaxed text-ivory/55 md:text-lg md:leading-relaxed">
                Most AI companies are built by engineers who understand models
                but not markets. We spent decades in the room with executives —
                learning what they need, what they ignore, and what actually
                moves the needle.
              </p>
              <p className="mt-6 font-[var(--font-inter)] text-base leading-relaxed text-ivory/55 md:text-lg md:leading-relaxed">
                That's why our software doesn't ask you to become a power user.
                It asks you one question: <em className="text-gold/80">what result do you need?</em>{" "}
                Then it delivers.
              </p>
            </FadeSection>
          </div>

          <FadeSection id="diff-values" delay={300}>
            <div className="space-y-6 lg:mt-16">
              {[
                {
                  title: "Results Over Features",
                  copy: "We don't sell capabilities. We sell outcomes. If it doesn't move a metric that matters to you, we don't build it.",
                },
                {
                  title: "Invisible Complexity",
                  copy: "The sophistication is in the system, not the interface. What's simple for you is engineered to be simple.",
                },
                {
                  title: "Executive-Grade Privacy",
                  copy: "Your data, your likeness, your voice — held to the same standard as the boardroom. No shared models. No public training.",
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-gold/20"
                >
                  <h3 className="font-[var(--font-cinzel)] text-sm uppercase tracking-[0.12em] text-gold/90">
                    {value.title}
                  </h3>
                  <p className="mt-3 font-[var(--font-inter)] text-sm leading-relaxed text-ivory/50">
                    {value.copy}
                  </p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── Divider ─── */}
      <div className="mx-auto h-[1px] max-w-7xl bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

      {/* ─── Contact / Inquiry ─── */}
      <section
        id="contact"
        className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32"
      >
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <FadeSection id="contact-label">
              <p className="font-[var(--font-cinzel)] text-[10px] uppercase tracking-[0.3em] text-gold/70">
                Begin
              </p>
            </FadeSection>
            <FadeSection id="contact-heading" delay={100}>
              <h2 className="mt-5 font-[var(--font-cinzel)] text-3xl uppercase tracking-[0.1em] text-ivory sm:text-4xl md:text-5xl">
                Request a <span className="text-gold">Revelation.</span>
              </h2>
              <p className="mt-6 font-[var(--font-inter)] text-base leading-relaxed text-ivory/50 md:text-lg">
                Every engagement begins with a confidential briefing. Tell us
                what you need — we'll tell you exactly what we can build.
              </p>
            </FadeSection>
            <FadeSection id="contact-details" delay={200}>
              <div className="mt-10 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-4 bg-gold/40" />
                  <span className="font-[var(--font-inter)] text-sm text-ivory/40">
                    Response within 24 hours
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-4 bg-gold/40" />
                  <span className="font-[var(--font-inter)] text-sm text-ivory/40">
                    NDA available upon request
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-[1px] w-4 bg-gold/40" />
                  <span className="font-[var(--font-inter)] text-sm text-ivory/40">
                    No obligation. No sales pitch.
                  </span>
                </div>
              </div>
            </FadeSection>
          </div>

          <FadeSection id="contact-form" delay={200}>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10">
              {submitted ? (
                <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                  <div className="mb-4 h-12 w-12 rounded-full border border-gold/40 bg-gold/10 p-3">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gold"
                    >
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-[var(--font-cinzel)] text-lg uppercase tracking-[0.1em] text-gold">
                    Inquiry Received
                  </h3>
                  <p className="mt-3 font-[var(--font-inter)] text-sm text-ivory/50">
                    We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block font-[var(--font-inter)] text-[10px] uppercase tracking-[0.18em] text-ivory/35">
                        Full Name
                      </label>
                      <input
                        className="w-full rounded border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-[var(--font-inter)] text-sm text-ivory placeholder:text-ivory/25 transition-colors focus:border-gold/40 focus:outline-none"
                        type="text"
                        name="name"
                        required
                      />
                    </div>
                    <div>
                      <label className="mb-2 block font-[var(--font-inter)] text-[10px] uppercase tracking-[0.18em] text-ivory/35">
                        Email
                      </label>
                      <input
                        className="w-full rounded border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-[var(--font-inter)] text-sm text-ivory placeholder:text-ivory/25 transition-colors focus:border-gold/40 focus:outline-none"
                        type="email"
                        name="email"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block font-[var(--font-inter)] text-[10px] uppercase tracking-[0.18em] text-ivory/35">
                      Company
                    </label>
                    <input
                      className="w-full rounded border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-[var(--font-inter)] text-sm text-ivory placeholder:text-ivory/25 transition-colors focus:border-gold/40 focus:outline-none"
                      type="text"
                      name="company"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-[var(--font-inter)] text-[10px] uppercase tracking-[0.18em] text-ivory/35">
                      What do you need?
                    </label>
                    <textarea
                      className="min-h-32 w-full rounded border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-[var(--font-inter)] text-sm text-ivory placeholder:text-ivory/25 transition-colors focus:border-gold/40 focus:outline-none"
                      name="message"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded border border-gold/60 bg-gold/10 px-8 py-4 font-[var(--font-inter)] text-sm uppercase tracking-[0.14em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-obsidian"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </FadeSection>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="border-t border-white/[0.06]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:items-start md:justify-between md:px-10">
          <div>
            <p className="font-[var(--font-cinzel)] text-[11px] uppercase tracking-[0.25em] text-gold/80">
              Revelation Inc. AI
            </p>
            <p className="mt-3 max-w-xs font-[var(--font-inter)] text-xs leading-relaxed text-ivory/30">
              Bespoke AI systems for enterprises that demand results, not
              features.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.2em] text-ivory/30">
                Navigation
              </p>
              <nav className="mt-4 flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="font-[var(--font-inter)] text-xs text-ivory/40 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <p className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.2em] text-ivory/30">
                Legal
              </p>
              <div className="mt-4 flex flex-col gap-3">
                <span className="font-[var(--font-inter)] text-xs text-ivory/40">
                  Privacy Policy
                </span>
                <span className="font-[var(--font-inter)] text-xs text-ivory/40">
                  Terms of Service
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04]">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10">
            <p className="font-[var(--font-inter)] text-[10px] text-ivory/20">
              &copy; {new Date().getFullYear()} Revelation Inc. AI. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
