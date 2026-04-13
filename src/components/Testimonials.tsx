import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

function Avatar({ name, index }: { name: string; index: number }) {
  const palettes = [
    { bg: 'bg-[rgba(232,180,184,0.25)]', border: 'border-[var(--color-primary)]', color: 'var(--color-primary-dark)' },
    { bg: 'bg-[rgba(168,213,186,0.25)]', border: 'border-[var(--color-secondary)]', color: 'var(--color-secondary-dark)' },
    { bg: 'bg-[rgba(212,175,55,0.18)]', border: 'border-[var(--color-cta)]', color: 'var(--color-cta-dark)' },
  ];
  const p = palettes[index % palettes.length];
  const initials = name.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 ${p.bg} ${p.border}`} aria-hidden="true">
      <span className="font-heading text-base font-bold" style={{ color: p.color }}>{initials}</span>
    </div>
  );
}

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.svg
          key={i}
          width="14" height="14" viewBox="0 0 24 24"
          fill={i < n ? 'var(--color-cta)' : 'none'}
          stroke="var(--color-cta)" strokeWidth="2"
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.07, type: 'spring', stiffness: 400, damping: 15 }}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </motion.svg>
      ))}
    </div>
  );
}

const TESTIMONIALS = [
  {
    id: 't1',
    name: 'Arjun Mehta',
    role: 'Full-stack Developer · Freelance',
    product: 'EJS Viewer',
    productUrl: 'https://ejsviewer.sailorlabs.in/',
    rating: 5,
    quote:
      "EJS Viewer saved me hours every week. I used to spin up a local server just to test my templates — now I just paste and preview. The JSON binding is spot-on. Simple, fast, no fluff.",
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    role: 'Content Creator · YouTube',
    product: 'Vibe Message',
    productUrl: 'https://vibemessage.sailorlabs.in/',
    rating: 5,
    quote:
      "Vibe Message is genuinely fun to use. I share animated messages with my audience and they love it. It's one of those tools that just clicks — the UX is delightful and the output is shareable instantly.",
  },
  {
    id: 't3',
    name: 'Rohan Verma',
    role: 'Tech Blogger · Indie Maker',
    product: 'BlogForge',
    productUrl: 'https://blogforge.in/',
    rating: 5,
    quote:
      "I tried a dozen blogging platforms. BlogForge is the only one that got out of my way and let me write. Clean editor, beautiful reading experience, and it just works. Moved my whole blog here.",
  },
];

const CARD = {
  hidden: { opacity: 0, scale: 0.94, y: 22 },
  visible: (i: number) => ({
    opacity: 1, scale: 1, y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.13 },
  }),
};

// Animated marquee of product pills above testimonials
const MARQUEE_ITEMS = [
  'EJS Viewer', 'Vibe Message', 'BlogForge',
  'MIT Licensed', 'Open Source', 'No Vendor Lock-in',
  'EJS Viewer', 'Vibe Message', 'BlogForge',
  'Simple by Design', 'Built with ❤️', 'Ships Fast',
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Auto-reset expanded card
  useEffect(() => {
    if (activeIdx === null) return;
    const t = setTimeout(() => setActiveIdx(null), 6000);
    return () => clearTimeout(t);
  }, [activeIdx]);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="relative bg-[var(--color-bg)] px-6 py-20 transition-colors duration-300 md:py-28 overflow-hidden"
    >
      {/* Subtle bg stripe */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(168,213,186,0.04)] to-transparent" />

      {/* Marquee strip */}
      <div aria-hidden="true" className="relative mb-14 overflow-hidden">
        <div className="flex animate-[marquee_28s_linear_infinite] gap-4 whitespace-nowrap">
          {MARQUEE_ITEMS.concat(MARQUEE_ITEMS).map((item, i) => (
            <span
              key={i}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-bg-card)] px-4 py-1.5 font-body text-[0.72rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-text-subtle)]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-[1200px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <span className="mb-2.5 block font-body text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[var(--color-primary-dark)]">
            What People Say
          </span>
          <h2 id="testimonials-heading" className="font-heading text-4xl font-medium text-[var(--color-text)] md:text-5xl">
            Loved by&nbsp;
            <span className="italic text-[var(--color-secondary-dark)]">real users</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[540px] font-body text-base leading-[1.75] text-[var(--color-text-muted)]">
            From developers to creators — here's what they're building with Sailor Labs products.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))' }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.id}
              custom={i}
              variants={CARD}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -6, transition: { duration: 0.22 } }}
              onClick={() => setActiveIdx(activeIdx === i ? null : i)}
              className="neu-card flex cursor-pointer flex-col gap-4 p-8 transition-shadow duration-300 hover:shadow-[var(--shadow-neu-lg)]"
              aria-label={`Testimonial from ${t.name}`}
            >
              {/* Quote icon + stars */}
              <div className="flex items-center justify-between">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="var(--color-primary-light)" aria-hidden="true" className="opacity-70">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                </svg>
                <div className="flex flex-col items-end gap-1">
                  <Stars n={t.rating} />
                  <a
                    href={t.productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="font-body text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[var(--color-primary-dark)] no-underline opacity-70 transition-opacity hover:opacity-100"
                  >
                    via {t.product}
                  </a>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={activeIdx === i ? 'full' : 'short'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="m-0 flex-1 font-body text-sm italic leading-[1.8] text-[var(--color-text-muted)]"
                >
                  &ldquo;{t.quote}&rdquo;
                </motion.blockquote>
              </AnimatePresence>

              <div className="h-px bg-[var(--color-border)]" aria-hidden="true" />

              <div className="flex items-center gap-3">
                <Avatar name={t.name} index={i} />
                <div>
                  <p className="font-heading text-base font-semibold leading-tight text-[var(--color-text)]">{t.name}</p>
                  <p className="mt-0.5 font-body text-[0.75rem] tracking-[0.04em] text-[var(--color-text-muted)]">{t.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Post-testimonial CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          className="mt-14 flex flex-col items-center gap-4 text-center"
        >
          <p className="font-body text-base text-[var(--color-text-muted)]">
            Join the growing community of users building with Sailor Labs.
          </p>
          <motion.a
            href="#contact"
            className="btn-cta"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(212,175,55,0.45)' }}
            whileTap={{ scale: 0.97 }}
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
