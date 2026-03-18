import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import FadeSection from "./components/FadeSection";

/* ───────────────────────── Data ───────────────────────── */

const painPoints = [
  {
    number: "01",
    title: "Another Dashboard Nobody Opens",
    copy: "Most AI tools hand you a cockpit of toggles and charts. Your executives didn't climb to the top to learn another platform.",
    iconPath: "M3 3h18v18H3zM3 9h18M9 21V9",
  },
  {
    number: "02",
    title: "Consultants Who Bill by the Question",
    copy: "You've hired advisors. They delivered slide decks. What you needed was a working system that runs without them.",
    iconPath: "M12 6v12M6 12h12",
    iconCircle: true,
  },
  {
    number: "03",
    title: "Content That Sounds Like a Robot Wrote It",
    copy: "Generic AI output erodes the personal brand your leadership spent years building. One bad post undoes months of trust.",
    iconPath: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z",
  },
];

const aceCapabilities = [
  {
    title: "Digital Human Synthesis",
    copy: "Photorealistic brand avatars generated from a single photo. Your likeness, your style, your control.",
    iconPath: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2",
    iconCircle: { cx: 12, cy: 7, r: 4 },
  },
  {
    title: "Omni-Channel Publishing",
    copy: "LinkedIn, X, Instagram, TikTok — deployed simultaneously from one command. No scheduling tools. No copy-paste.",
    iconPath: "M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z",
  },
  {
    title: "Narrative Intelligence",
    copy: "Adaptive models that learn your voice so every post sounds like you wrote it. Because your audience can tell when you didn't.",
    iconPath: "M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3zM19 10v2a7 7 0 01-14 0v-2M12 19v3M8 22h8",
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

const faqs = [
  {
    q: "What does Revelation Inc. AI do?",
    a: "Revelation Inc. AI builds bespoke AI automation systems for enterprise companies. Our flagship product, Ace AI, is a personal brand engine that generates photorealistic digital avatars, creates content in your executive's voice, and publishes across 10+ social platforms automatically.",
  },
  {
    q: "What is Ace AI?",
    a: "Ace AI is an AI-powered content automation platform that creates a digital twin of your executive — matching their likeness, voice, and communication style. It produces 30 to 150 videos per month and distributes them across LinkedIn, X, Instagram, TikTok, YouTube, and more. Your team approves content weekly; Ace handles everything else.",
  },
  {
    q: "Who is Revelation Inc. AI built for?",
    a: "Our systems are designed for C-suite executives, enterprise marketing teams, and high-growth companies that need a consistent brand presence without adding headcount or requiring executives to learn new platforms. If your leadership team doesn't have time to create content but needs to be visible, we built this for you.",
  },
  {
    q: "How is this different from hiring a content agency or social media manager?",
    a: "Agencies require constant briefing, revision cycles, and management overhead. Ace AI learns your voice once, then operates autonomously — producing content at scale with a 10-minute weekly approval process. It costs less than a single full-time hire and produces more consistent output than most agencies.",
  },
  {
    q: "How does the digital avatar work?",
    a: "We build a photorealistic AI avatar from a single photo and a 3-minute voice recording. The system matches your likeness, facial expressions, and vocal patterns to create video content that looks and sounds like you — without you ever stepping in front of a camera.",
  },
  {
    q: "Is my data private and secure?",
    a: "Yes. Every client gets a dedicated, isolated AI model. Your avatar, voice data, and content are never shared across clients or used to train public models. We offer NDA agreements and enterprise-grade data sovereignty as standard.",
  },
  {
    q: "How do I get started?",
    a: "Submit an inquiry through our contact form. We respond within 24 hours to schedule a confidential briefing where we assess your needs and determine exactly what we can build for your organization. There is no obligation and no sales pitch.",
  },
];

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#problem", label: "Why" },
  { href: "#ace", label: "Ace AI" },
  { href: "#difference", label: "About" },
  { href: "#contact", label: "Inquiry" },
];

/* ───────────────────────── JSON-LD Structured Data ───────────────────────── */

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Revelation Inc. AI",
  url: "https://www.revelationinc.ai",
  logo: "https://www.revelationinc.ai/favicon.svg",
  description:
    "Revelation Inc. AI builds bespoke AI automation systems for enterprise companies. Our flagship product Ace AI generates photorealistic digital avatars and automates content publishing across 10+ platforms.",
  email: "info@revelationinc.ai",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Newport Beach",
    addressRegion: "CA",
    addressCountry: "US",
  },
  sameAs: [],
  foundingDate: "2026",
  knowsAbout: [
    "artificial intelligence",
    "enterprise AI automation",
    "digital human synthesis",
    "AI content publishing",
    "executive brand management",
  ],
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Ace AI",
  description:
    "Ace AI is an AI-powered personal brand engine for executives. It creates photorealistic digital avatars, generates content in your voice, and publishes across LinkedIn, X, Instagram, TikTok, YouTube, and more — producing 30 to 150 videos per month with a 10-minute weekly approval process.",
  brand: {
    "@type": "Organization",
    name: "Revelation Inc. AI",
  },
  url: "https://getmyace.com",
  category: "AI Content Automation Software",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Revelation Inc. AI",
  url: "https://www.revelationinc.ai",
  description:
    "Bespoke AI systems for enterprise companies. We build AI that runs your brand presence, publishes your content, and grows your audience.",
};

/* ───────────────────────── Page ───────────────────────── */

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-obsidian">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,rgba(10,17,40,1)_55%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,1) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        <div className="animate-float-slow absolute left-[15%] top-[20%] h-[400px] w-[400px] rounded-full bg-gold/[0.04] blur-[100px]" />
        <div className="animate-float-slower absolute right-[10%] top-[60%] h-[300px] w-[300px] rounded-full bg-champagne/[0.03] blur-[80px]" />
      </div>

      {/* Header */}
      <Header />

      {/* ═══════════════════ HERO ═══════════════════ */}
      <section
        id="hero"
        className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 pb-24 pt-32 md:px-10 md:pt-40"
      >
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
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
                <a
                  href="https://getmyace.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-2 py-4 font-[var(--font-inter)] text-sm uppercase tracking-[0.14em] text-ivory/50 transition-colors hover:text-gold"
                >
                  Get Started
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5 text-gold/60">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </div>
            </FadeSection>
          </div>

          {/* Orbital Visual */}
          <div className="hidden lg:col-span-5 lg:block">
            <FadeSection id="hero-visual" delay={300}>
              <div className="relative flex items-center justify-center">
                <svg
                  viewBox="0 0 500 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-full w-full max-w-md lg:max-w-lg"
                  aria-hidden="true"
                >
                  <circle cx="250" cy="250" r="220" stroke="url(#ring-grad)" strokeWidth="0.75" className="animate-spin-very-slow" style={{ transformOrigin: "250px 250px" }} />
                  <circle cx="250" cy="250" r="160" stroke="url(#ring-grad)" strokeWidth="0.75" strokeDasharray="8 12" className="animate-spin-reverse" style={{ transformOrigin: "250px 250px" }} />
                  <circle cx="250" cy="250" r="100" stroke="url(#ring-grad)" strokeWidth="1" className="animate-spin-very-slow" style={{ transformOrigin: "250px 250px" }} />
                  <circle cx="250" cy="250" r="40" fill="url(#core-glow)" />
                  <circle cx="250" cy="250" r="6" fill="#D4AF37" fillOpacity="0.8" />
                  <circle cx="250" cy="30" r="3" fill="#E8D48B" fillOpacity="0.6" className="animate-spin-very-slow" style={{ transformOrigin: "250px 250px" }} />
                  <circle cx="410" cy="250" r="2.5" fill="#D4AF37" fillOpacity="0.5" className="animate-spin-reverse" style={{ transformOrigin: "250px 250px" }} />
                  <circle cx="150" cy="400" r="2" fill="#E8D48B" fillOpacity="0.4" className="animate-spin-very-slow" style={{ transformOrigin: "250px 250px" }} />
                  <line x1="250" y1="210" x2="250" y2="30" stroke="#D4AF37" strokeOpacity="0.1" strokeWidth="0.5" />
                  <line x1="290" y1="250" x2="410" y2="250" stroke="#D4AF37" strokeOpacity="0.08" strokeWidth="0.5" />
                  <text x="250" y="258" textAnchor="middle" dominantBaseline="middle" fill="#D4AF37" fillOpacity="0.25" fontSize="28" fontFamily="serif" letterSpacing="0.1em">R</text>
                  <defs>
                    <radialGradient id="core-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(250 250) scale(40)">
                      <stop stopColor="#D4AF37" stopOpacity="0.15" />
                      <stop offset="1" stopColor="#0A1128" stopOpacity="0" />
                    </radialGradient>
                    <linearGradient id="ring-grad" x1="30" y1="30" x2="470" y2="470" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#E8D48B" stopOpacity="0.5" />
                      <stop offset="0.5" stopColor="#D4AF37" stopOpacity="0.2" />
                      <stop offset="1" stopColor="#E8D48B" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </FadeSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="font-[var(--font-inter)] text-[9px] uppercase tracking-[0.3em] text-ivory/30">Scroll</span>
            <div className="h-8 w-[1px] animate-pulse bg-gradient-to-b from-gold/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════════ PROBLEM ═══════════════════ */}
      <section id="problem" className="relative bg-[#0E1830]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
          <FadeSection id="problem-label">
            <p className="font-[var(--font-cinzel)] text-[10px] uppercase tracking-[0.3em] text-gold/70">The Problem</p>
          </FadeSection>
          <FadeSection id="problem-heading" delay={100}>
            <h2 className="mt-5 max-w-4xl font-[var(--font-cinzel)] text-3xl uppercase tracking-[0.1em] text-ivory sm:text-4xl md:text-5xl">
              AI Was Supposed to Make Things <span className="text-gold">Simpler.</span>
            </h2>
            <p className="mt-6 max-w-2xl font-[var(--font-inter)] text-base leading-relaxed text-ivory/55 md:text-lg">
              Instead, it created a new category of work. More tools to manage. More platforms to learn. More content that doesn&apos;t sound like you.
            </p>
          </FadeSection>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {painPoints.map((point, i) => (
              <FadeSection key={point.number} id={`pain-${point.number}`} delay={i * 150}>
                <article className="group relative h-full overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-500 hover:border-red-500/20 hover:bg-white/[0.04]">
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-red-400/0 to-transparent transition-all duration-500 group-hover:via-red-400/30" />
                  <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.03] text-ivory/40 transition-colors group-hover:border-red-500/20 group-hover:text-red-400/60">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                      <path d={point.iconPath} />
                      {point.iconCircle && <circle cx="12" cy="12" r="10" />}
                    </svg>
                  </div>
                  <span className="font-[var(--font-inter)] text-[11px] tracking-[0.2em] text-gold/40">{point.number}</span>
                  <h3 className="mt-3 font-[var(--font-cinzel)] text-lg uppercase tracking-[0.08em] text-ivory/90">{point.title}</h3>
                  <p className="mt-4 font-[var(--font-inter)] text-sm leading-relaxed text-ivory/50">{point.copy}</p>
                </article>
              </FadeSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ ACE AI ═══════════════════ */}
      <section id="ace">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <FadeSection id="ace-label">
          <p className="font-[var(--font-cinzel)] text-[10px] uppercase tracking-[0.3em] text-gold/70">Flagship Product</p>
        </FadeSection>
        <FadeSection id="ace-heading" delay={100}>
          <h2 className="mt-5 max-w-4xl font-[var(--font-cinzel)] text-3xl uppercase tracking-[0.1em] text-ivory sm:text-4xl md:text-5xl">
            Ace <span className="text-gold">AI</span>
          </h2>
          <p className="mt-6 max-w-3xl font-[var(--font-inter)] text-base leading-relaxed text-ivory/55 md:text-lg">
            A personal brand engine for executives who refuse to compromise their image. Ace generates your digital likeness, crafts content in your voice, and publishes across every platform — without you touching a single button.
          </p>
        </FadeSection>

        {/* Dashboard Mock */}
        <FadeSection id="ace-dashboard" delay={200}>
          <div className="mt-14 rounded-xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-1">
            <div className="rounded-lg bg-obsidian/80 p-6 md:p-10">
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-gold/80 shadow-[0_0_8px_rgba(212,175,55,0.4)]" />
                  <span className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.2em] text-ivory/40">Ace AI Command Layer</span>
                </div>
                <span className="rounded-full border border-gold/30 px-3 py-1 font-[var(--font-inter)] text-[9px] uppercase tracking-[0.2em] text-gold/70">System Active</span>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <p className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.18em] text-ivory/35">Publishing Queue</p>
                  {[
                    { platform: "LinkedIn", type: "Executive Insight", status: "Ready" },
                    { platform: "X", type: "Market Commentary", status: "Ready" },
                    { platform: "Instagram", type: "Brand Moment", status: "Rendering" },
                    { platform: "TikTok", type: "Narrative Clip", status: "Queued" },
                  ].map((item) => (
                    <div key={item.platform} className="flex items-center justify-between rounded border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                      <div>
                        <span className="font-[var(--font-inter)] text-sm text-ivory/70">{item.platform}</span>
                        <span className="ml-3 text-[11px] text-ivory/30">{item.type}</span>
                      </div>
                      <span className={`text-[10px] uppercase tracking-[0.15em] ${item.status === "Ready" ? "text-gold/70" : item.status === "Rendering" ? "text-champagne/50" : "text-ivory/25"}`}>{item.status}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <p className="font-[var(--font-inter)] text-[10px] uppercase tracking-[0.18em] text-ivory/35">Avatar Pipeline</p>
                  {[
                    { label: "Face Alignment", value: "Complete" },
                    { label: "Voiceprint Match", value: "98.7%" },
                    { label: "Brand Style Lock", value: "Enabled" },
                    { label: "Publish Window", value: "Armed" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between rounded border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                      <span className="font-[var(--font-inter)] text-sm text-ivory/70">{item.label}</span>
                      <span className="font-[var(--font-inter)] text-[11px] text-gold/60">{item.value}</span>
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
              <article className="group relative h-full overflow-hidden rounded-lg border border-gold/[0.12] bg-gradient-to-b from-gold/[0.04] to-white/[0.01] p-8 transition-all duration-500 hover:border-gold/30 hover:from-gold/[0.07]">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg border border-gold/20 bg-gold/[0.08] text-gold/70">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
                    <path d={cap.iconPath} />
                    {cap.iconCircle && <circle cx={cap.iconCircle.cx} cy={cap.iconCircle.cy} r={cap.iconCircle.r} />}
                  </svg>
                </div>
                <h3 className="font-[var(--font-cinzel)] text-base uppercase tracking-[0.1em] text-gold/90">{cap.title}</h3>
                <p className="mt-4 font-[var(--font-inter)] text-sm leading-relaxed text-ivory/50">{cap.copy}</p>
              </article>
            </FadeSection>
          ))}
        </div>

        {/* Ace CTA */}
        <FadeSection id="ace-cta" delay={300}>
          <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://getmyace.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-sm border border-gold/60 bg-gold/10 px-10 py-4 font-[var(--font-inter)] text-sm uppercase tracking-[0.14em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-obsidian"
            >
              Explore Ace AI
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
            <span className="font-[var(--font-inter)] text-[11px] text-ivory/30">getmyace.com</span>
          </div>
        </FadeSection>
        </div>
      </section>

      {/* ═══════════════════ HOW IT WORKS ═══════════════════ */}
      <section className="relative bg-[#0E1830]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <FadeSection id="how-label">
          <p className="font-[var(--font-cinzel)] text-[10px] uppercase tracking-[0.3em] text-gold/70">Process</p>
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
                <div className="absolute left-0 top-0 h-full w-[1px] bg-gradient-to-b from-gold/40 to-transparent md:h-[1px] md:w-full md:bg-gradient-to-r" />
                <span className="font-[var(--font-inter)] text-[40px] font-light leading-none text-white/[0.06] md:text-[56px]">{step.number}</span>
                <h3 className="mt-2 font-[var(--font-cinzel)] text-xl uppercase tracking-[0.1em] text-gold">{step.title}</h3>
                <p className="mt-4 max-w-sm font-[var(--font-inter)] text-sm leading-relaxed text-ivory/50 md:pr-8">{step.copy}</p>
              </div>
            </FadeSection>
          ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════ CINEMATIC STATEMENT ═══════════════════ */}
      <section className="relative overflow-hidden py-32 md:py-44">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.06)_0%,rgba(10,17,40,0)_70%)]" />
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <FadeSection id="statement">
          <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
            <p className="font-[var(--font-cinzel)] text-[10px] uppercase tracking-[0.3em] text-gold/50">Philosophy</p>
            <h2 className="mt-6 font-[var(--font-cinzel)] text-2xl uppercase leading-relaxed tracking-[0.15em] text-ivory/80 sm:text-3xl md:text-4xl md:leading-relaxed">
              &ldquo;Hidden Information Holds <span className="text-gold">Strategic Power.</span>&rdquo;
            </h2>
            <p className="mx-auto mt-8 max-w-2xl font-[var(--font-inter)] text-base leading-relaxed text-ivory/40 md:text-lg">
              We don&apos;t build tools. We build systems that see what others miss, act before others react, and deliver what others only promise.
            </p>
          </div>
        </FadeSection>
      </section>

      {/* ═══════════════════ THE DIFFERENCE ═══════════════════ */}
      <section id="difference" className="relative bg-[#0E1830]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <FadeSection id="diff-label">
              <p className="font-[var(--font-cinzel)] text-[10px] uppercase tracking-[0.3em] text-gold/70">Why Revelation</p>
            </FadeSection>
            <FadeSection id="diff-heading" delay={100}>
              <h2 className="mt-5 font-[var(--font-cinzel)] text-3xl uppercase tracking-[0.1em] text-ivory sm:text-4xl md:text-5xl">
                Built by Marketers. <span className="text-gold">Not Technologists.</span>
              </h2>
            </FadeSection>
            <FadeSection id="diff-body" delay={200}>
              <p className="mt-8 font-[var(--font-inter)] text-base leading-relaxed text-ivory/55 md:text-lg md:leading-relaxed">
                Most AI companies are built by engineers who understand models but not markets. We spent decades in the room with executives — learning what they need, what they ignore, and what actually moves the needle.
              </p>
              <p className="mt-6 font-[var(--font-inter)] text-base leading-relaxed text-ivory/55 md:text-lg md:leading-relaxed">
                That&apos;s why our software doesn&apos;t ask you to become a power user. It asks you one question: <em className="text-gold/80">what result do you need?</em> Then it delivers.
              </p>
            </FadeSection>
          </div>

          <FadeSection id="diff-values" delay={300}>
            <div className="space-y-6 lg:mt-16">
              {[
                { title: "Results Over Features", copy: "We don't sell capabilities. We sell outcomes. If it doesn't move a metric that matters to you, we don't build it." },
                { title: "Invisible Complexity", copy: "The sophistication is in the system, not the interface. What's simple for you is engineered to be simple." },
                { title: "Executive-Grade Privacy", copy: "Your data, your likeness, your voice — held to the same standard as the boardroom. No shared models. No public training." },
              ].map((value) => (
                <div key={value.title} className="group relative overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-gold/20">
                  <div className="absolute bottom-0 left-0 top-0 w-[2px] bg-gradient-to-b from-gold/30 via-gold/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <h3 className="font-[var(--font-cinzel)] text-sm uppercase tracking-[0.12em] text-gold/90">{value.title}</h3>
                  <p className="mt-3 font-[var(--font-inter)] text-sm leading-relaxed text-ivory/50">{value.copy}</p>
                </div>
              ))}
            </div>
          </FadeSection>
        </div>
        </div>
      </section>

      {/* ═══════════════════ FAQ ═══════════════════ */}
      <section id="faq">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <FadeSection id="faq-label">
          <p className="font-[var(--font-cinzel)] text-[10px] uppercase tracking-[0.3em] text-gold/70">Questions</p>
        </FadeSection>
        <FadeSection id="faq-heading" delay={100}>
          <h2 className="mt-5 max-w-4xl font-[var(--font-cinzel)] text-3xl uppercase tracking-[0.1em] text-ivory sm:text-4xl md:text-5xl">
            Frequently <span className="text-gold">Asked.</span>
          </h2>
        </FadeSection>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, i) => (
            <FadeSection key={i} id={`faq-${i}`} delay={i * 80}>
              <details className="group rounded-lg border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-gold/20 open:border-gold/20">
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 font-[var(--font-inter)] text-sm text-ivory/80 md:px-8 md:text-base [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4 flex-shrink-0 text-gold/50 transition-transform duration-300 group-open:rotate-45">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 md:px-8">
                  <p className="font-[var(--font-inter)] text-sm leading-relaxed text-ivory/50">{faq.a}</p>
                </div>
              </details>
            </FadeSection>
          ))}
        </div>
        </div>
      </section>

      {/* ═══════════════════ CONTACT ═══════════════════ */}
      <section id="contact" className="relative bg-[#0E1830]">
        <div className="mx-auto w-full max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <FadeSection id="contact-label">
              <p className="font-[var(--font-cinzel)] text-[10px] uppercase tracking-[0.3em] text-gold/70">Begin</p>
            </FadeSection>
            <FadeSection id="contact-heading" delay={100}>
              <h2 className="mt-5 font-[var(--font-cinzel)] text-3xl uppercase tracking-[0.1em] text-ivory sm:text-4xl md:text-5xl">
                Request a <span className="text-gold">Revelation.</span>
              </h2>
              <p className="mt-6 font-[var(--font-inter)] text-base leading-relaxed text-ivory/50 md:text-lg">
                Every engagement begins with a confidential briefing. Tell us what you need — we&apos;ll tell you exactly what we can build.
              </p>
            </FadeSection>
            <FadeSection id="contact-details" delay={200}>
              <div className="mt-10 space-y-4">
                {["Response within 24 hours", "NDA available upon request", "No obligation. No sales pitch."].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="h-[1px] w-4 bg-gold/40" />
                    <span className="font-[var(--font-inter)] text-sm text-ivory/40">{item}</span>
                  </div>
                ))}
              </div>
            </FadeSection>
          </div>

          <FadeSection id="contact-form" delay={200}>
            <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-10">
              <ContactForm />
            </div>
          </FadeSection>
        </div>
        </div>
      </section>

      {/* ═══════════════════ CLOSING BRAND BAR ═══════════════════ */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.04)_0%,rgba(10,17,40,0)_70%)]" />
        <FadeSection id="closing">
          <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center md:px-10">
            <p className="font-[var(--font-cinzel)] text-[11px] uppercase tracking-[0.3em] text-gold/60">Revelation Inc. AI</p>
            <p className="mt-4 font-[var(--font-cinzel)] text-xl uppercase tracking-[0.15em] text-ivory/50 md:text-2xl">Illuminating the Unseen.</p>
          </div>
        </FadeSection>
      </section>

      {/* ═══════════════════ FOOTER ═══════════════════ */}
      <footer className="border-t border-gold/15 bg-[#071020]">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-20 md:flex-row md:items-start md:justify-between md:px-10">
          <div className="max-w-sm">
            <p className="font-[var(--font-cinzel)] text-sm uppercase tracking-[0.25em] text-gold">Revelation Inc. AI</p>
            <p className="mt-4 font-[var(--font-inter)] text-sm leading-relaxed text-ivory/60">
              Bespoke AI systems for enterprises that demand results, not features.
            </p>
            <div className="mt-8 space-y-3">
              <a href="mailto:info@revelationinc.ai" className="block font-[var(--font-inter)] text-sm text-ivory/70 transition-colors hover:text-gold">
                info@revelationinc.ai
              </a>
              <p className="font-[var(--font-inter)] text-sm text-ivory/50">
                Newport Beach, California
              </p>
            </div>
          </div>

          <div className="flex gap-16 md:gap-20">
            <div>
              <p className="font-[var(--font-inter)] text-[11px] uppercase tracking-[0.2em] text-gold/70">Navigation</p>
              <nav className="mt-5 flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="font-[var(--font-inter)] text-sm text-ivory/60 transition-colors hover:text-gold">{item.label}</a>
                ))}
              </nav>
            </div>
            <div>
              <p className="font-[var(--font-inter)] text-[11px] uppercase tracking-[0.2em] text-gold/70">Connect</p>
              <div className="mt-5 flex flex-col gap-3">
                <a href="mailto:info@revelationinc.ai" className="font-[var(--font-inter)] text-sm text-ivory/60 transition-colors hover:text-gold">Email</a>
                <span className="font-[var(--font-inter)] text-sm text-ivory/60">LinkedIn</span>
                <span className="font-[var(--font-inter)] text-sm text-ivory/60">X / Twitter</span>
              </div>
            </div>
            <div>
              <p className="font-[var(--font-inter)] text-[11px] uppercase tracking-[0.2em] text-gold/70">Legal</p>
              <div className="mt-5 flex flex-col gap-3">
                <span className="font-[var(--font-inter)] text-sm text-ivory/60">Privacy Policy</span>
                <span className="font-[var(--font-inter)] text-sm text-ivory/60">Terms of Service</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/10">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 md:px-10">
            <p className="font-[var(--font-inter)] text-xs text-ivory/40">&copy; 2026 Revelation Inc. AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
