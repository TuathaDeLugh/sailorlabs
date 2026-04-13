import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

function FloatingShape({ className, delay }: { className: string; delay: number }) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`pointer-events-none absolute ${className}`}
      style={{ borderRadius: '62% 38% 70% 30% / 46% 54% 46% 54%' }}
    />
  );
}

function CodeBadge({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      className="inline-flex cursor-default items-center gap-1.5 whitespace-nowrap rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elevated)] px-2.5 py-1 font-mono text-xs text-[var(--color-secondary-dark)] shadow-[var(--shadow-neu-sm)] transition-shadow duration-200 hover:shadow-[var(--shadow-neu)]"
    >
      {children}
    </motion.span>
  );
}

function ScrollIndicator() {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 0.7 }}
      onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
      aria-label="Scroll to products"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex cursor-pointer flex-col items-center gap-1.5 border-none bg-transparent p-2"
    >
      <span className="font-body text-[0.68rem] uppercase tracking-[0.18em] text-[var(--color-text-subtle)]">
        Explore
      </span>
      <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-subtle)" strokeWidth="2" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </motion.div>
    </motion.button>
  );
}

// Animated counter
function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const duration = 1400;
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * to));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);

  return (
    <p ref={ref} className="font-heading text-[1.55rem] font-semibold leading-none text-[var(--color-text)]">
      {count}{suffix}
    </p>
  );
}

const FADE_UP = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  }),
};

const STATS = [
  { value: 3, suffix: '', label: 'Live Products' },
  { value: 100, suffix: '+', label: 'Active Users' },
  { value: 3, suffix: '', label: 'OSS Projects' },
  { value: 100, suffix: '%', label: 'Open Source' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[var(--color-bg)] px-6 pb-20 pt-24 transition-colors duration-300"
    >
      {/* Background shapes */}
      <FloatingShape
        delay={0.15}
        className="h-[620px] w-[620px] -right-52 -top-40 bg-gradient-to-br from-[rgba(232,180,184,0.2)] to-[rgba(168,213,186,0.12)] blur-sm"
      />
      <FloatingShape
        delay={0.35}
        className="h-[380px] w-[380px] -bottom-24 -left-28 bg-gradient-to-br from-[rgba(168,213,186,0.16)] to-[rgba(212,175,55,0.1)] blur-sm"
      />
      <FloatingShape
        delay={0.5}
        className="h-44 w-44 left-[6%] top-[36%] bg-[rgba(212,175,55,0.06)]"
      />

      {/* Subtle grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(var(--color-text) 1px, transparent 1px), linear-gradient(90deg, var(--color-text) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[880px] text-center">

        {/* Badges */}
        <motion.div
          variants={FADE_UP} initial="hidden" animate="visible" custom={0.1}
          className="mb-5 flex flex-wrap justify-center gap-2"
        >
          <span className="tag">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="var(--color-cta)" aria-hidden="true"><circle cx="12" cy="12" r="10" /></svg>
            Open Source
          </span>
          <span className="tag">3 Live Products</span>
          <span className="tag">MIT License</span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          variants={FADE_UP} initial="hidden" animate="visible" custom={0.2}
          className="mb-2 block font-body text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary-dark)]"
        >
          Built with passion, shipped with purpose
        </motion.p>

        {/* Headline */}
        <motion.h1
          id="hero-heading"
          variants={FADE_UP} initial="hidden" animate="visible" custom={0.3}
          className="mb-5 font-heading text-5xl font-medium leading-[1.08] tracking-[-0.015em] text-[var(--color-text)] md:text-6xl lg:text-7xl"
        >
          Software that&nbsp;
          <motion.span
            className="italic text-[var(--color-primary-dark)]"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            sets sail
          </motion.span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={FADE_UP} initial="hidden" animate="visible" custom={0.42}
          className="mx-auto mb-8 max-w-[600px] font-body text-base leading-[1.8] text-[var(--color-text-muted)] md:text-lg"
        >
          Sailor Labs ships open-source tools and web apps that solve real problems simply — no bloat,
          no vendor lock-in, and no unnecessary complexity.
        </motion.p>

        {/* Code badges */}
        <motion.div
          variants={FADE_UP} initial="hidden" animate="visible" custom={0.5}
          className="mb-8 flex flex-wrap justify-center gap-2"
        >
          <CodeBadge>🔧 EJS Viewer</CodeBadge>
          <CodeBadge>💬 Vibe Message</CodeBadge>
          <CodeBadge>✍️ BlogForge</CodeBadge>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={FADE_UP} initial="hidden" animate="visible" custom={0.6}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            href="#products"
            className="btn-cta"
            whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(212,175,55,0.45)' }}
            whileTap={{ scale: 0.96 }}
            onClick={(e) => { e.preventDefault(); document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Explore Products
          </motion.a>

          <motion.a
            href="https://github.com/sailorlabs"
            rel="noopener noreferrer"
            target="_blank"
            className="btn-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 22v-4a5 5 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9 17.44 9 18v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            View on GitHub
          </motion.a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={FADE_UP} initial="hidden" animate="visible" custom={0.74}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="neu-card-sm min-w-[104px] px-5 py-4 text-center"
            >
              <Counter to={stat.value} suffix={stat.suffix} />
              <p className="mt-1 font-body text-[0.67rem] uppercase tracking-[0.09em] text-[var(--color-text-muted)]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
