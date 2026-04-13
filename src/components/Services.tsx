import { motion } from "motion/react";

type Product = {
  id: string;
  tag: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  iconStroke: string;
  iconBg: string;
  accentColor: string;
  iconPath: React.ReactNode;
  features: string[];
};

const PRODUCTS: Product[] = [
  {
    id: "ejsviewer",
    tag: "Developer Tool",
    title: "EJS Viewer",
    tagline: "Preview EJS templates instantly in your browser",
    description:
      "A lightning-fast, browser-based EJS template viewer. Paste your template and JSON data, and see the rendered output live — no server, no build step, no friction.",
    url: "https://ejsviewer.sailorlabs.in/",
    iconStroke: "var(--color-primary-dark)",
    iconBg: "bg-[rgba(232,180,184,0.18)]",
    accentColor: "rgba(232,180,184,0.4)",
    iconPath: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="12" y1="2" x2="12" y2="22" />
      </>
    ),
    features: ["Live preview", "JSON data binding", "Zero setup"],
  },
  {
    id: "vibemessage",
    tag: "Messaging",
    title: "Vibe Message",
    tagline: "Express more with animated, styled messages",
    description:
      "A powerful, enterprise-grade notification backend designed for modern web applications. Deliver instant, reliable messages with absolute precision and security.",
    url: "https://vibemessage.sailorlabs.in/",
    iconStroke: "var(--color-secondary-dark)",
    iconBg: "bg-[rgba(168,213,186,0.2)]",
    accentColor: "rgba(168,213,186,0.4)",
    iconPath: (
      <>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8M8 14h5" strokeLinecap="round" />
      </>
    ),
    features: ["Animated messages", "Rich styling", "Shareable links"],
  },
  {
    id: "blogforge",
    tag: "Publishing",
    title: "BlogForge",
    tagline: "Your fastest path from idea to published post",
    description:
      "BlogForge is a distraction-free blogging platform built for speed. Write, publish, and share your ideas with a clean editor and a minimal, beautiful reading experience.",
    url: "https://blogforge.in/",
    iconStroke: "var(--color-cta-dark)",
    iconBg: "bg-[rgba(212,175,55,0.1)]",
    accentColor: "rgba(212,175,55,0.3)",
    iconPath: (
      <>
        <path d="M12 20h9" strokeLinecap="round" />
        <path
          d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"
          strokeLinejoin="round"
        />
      </>
    ),
    features: ["Distraction-free editor", "Beautiful themes", "Fast publish"],
  },
];

const CONTAINER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14 } },
};
const CARD = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Services() {
  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="relative bg-(--color-bg) px-6 py-20 transition-colors duration-300 md:py-28 overflow-hidden"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-100 w-100 rounded-full bg-[rgba(232,180,184,0.07)] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-1/4 h-87.5 w-87.5 rounded-full bg-[rgba(168,213,186,0.07)] blur-[100px]"
      />

      <div className="relative mx-auto max-w-300">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-3 inline-block font-body text-[0.72rem] font-bold uppercase tracking-[0.2em] text-(--color-primary-dark)"
          >
            Our Products
          </motion.span>
          <h2
            id="products-heading"
            className="font-heading text-4xl font-medium text-(--color-text) md:text-5xl"
          >
            Tools built for&nbsp;
            <span className="italic text-(--color-primary-dark)">
              real use-cases
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-140 font-body text-base leading-[1.78] text-(--color-text-muted)">
            Three live products shipped and used by real people. Each one solves
            a distinct problem elegantly.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-7"
          style={{
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(100%, 340px), 1fr))",
          }}
        >
          {PRODUCTS.map((p) => (
            <motion.article
              key={p.id}
              variants={CARD}
              className="group relative"
            >
              {/* Hover background glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-px rounded-[22px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(380px circle at 50% -20px, ${p.accentColor}, transparent 65%)`,
                }}
              />

              <motion.div
                whileHover={{
                  y: -8,
                  transition: { duration: 0.28, ease: "easeOut" },
                }}
                className="neu-card relative flex h-full flex-col gap-5 p-8 overflow-hidden"
              >
                {/* Animated top accent line */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 rounded-full transition-transform duration-500 group-hover:scale-x-100"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${p.accentColor}, transparent)`,
                  }}
                />

                {/* Icon + tag row */}
                <div className="flex items-start justify-between gap-3">
                  <motion.div
                    whileHover={{
                      rotate: [0, -8, 8, 0],
                      transition: { duration: 0.5 },
                    }}
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-(--color-border) ${p.iconBg} transition-shadow duration-300 group-hover:shadow-[0_0_20px_var(--color-primary-light)]`}
                    aria-hidden="true"
                  >
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={p.iconStroke}
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {p.iconPath}
                    </svg>
                  </motion.div>
                  <span className="whitespace-nowrap rounded-full border border-(--color-border) bg-(--color-bg) px-3 py-0.5 font-body text-[0.67rem] font-bold uppercase tracking-[0.12em] text-(--color-text-subtle)">
                    {p.tag}
                  </span>
                </div>

                {/* Text */}
                <div>
                  <h3 className="mb-0.5 font-heading text-[1.35rem] font-medium text-(--color-text)">
                    {p.title}
                  </h3>
                  <p className="mb-2 font-body text-[0.78rem] font-semibold italic text-(--color-primary-dark) opacity-80">
                    {p.tagline}
                  </p>
                  <p className="font-body text-sm leading-[1.75] text-(--color-text-muted)">
                    {p.description}
                  </p>
                </div>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2">
                  {p.features.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-(--color-border) bg-(--color-bg) px-2.5 py-0.5 font-body text-[0.68rem] text-(--color-text-subtle)"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* CTA link */}
                <motion.a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex cursor-pointer items-center gap-2 rounded-xl border border-(--color-border) bg-(--color-bg) px-4 py-2.5 font-body text-[0.8rem] font-semibold text-(--color-text) no-underline transition-all duration-200 hover:border-(--color-primary) hover:text-(--color-primary-dark) hover:shadow-(--shadow-neu-sm)"
                  whileHover={{ x: 3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Visit {p.title}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="ml-auto opacity-50 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-12 text-center font-body text-sm text-(--color-text-subtle)"
        >
          More products coming soon —{" "}
          <a
            href="https://github.com/sailorlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-(--color-primary-dark) no-underline transition-colors duration-200 hover:text-(--color-cta-dark)"
          >
            follow us on GitHub
          </a>{" "}
          to stay in the loop.
        </motion.p>
      </div>
    </section>
  );
}
