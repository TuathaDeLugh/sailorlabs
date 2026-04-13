import { useState } from "react";
import { motion } from "motion/react";

interface FormData {
  name: string;
  email: string;
  useCase: string;
  teamSize: string;
}
const INITIAL: FormData = { name: "", email: "", useCase: "", teamSize: "" };

const USE_CASES = [
  { value: "", label: "Select a use case…" },
  { value: "new-project", label: "Starting a new project" },
  { value: "migrate", label: "Migrating an existing app" },
  { value: "ci-cd", label: "Improving CI/CD pipeline" },
  { value: "analytics", label: "Adding self-hosted analytics" },
  { value: "open-source", label: "Contributing to open source" },
  { value: "other", label: "Other" },
];

const TEAM_SIZES = [
  { value: "", label: "Team size…" },
  { value: "solo", label: "Solo / Indie hacker" },
  { value: "2-10", label: "2–10 engineers" },
  { value: "11-50", label: "11–50 engineers" },
  { value: "50+", label: "50+ engineers" },
];

const CHECK = (
  <svg
    width="13"
    height="13"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--color-secondary-dark)"
    strokeWidth="2.5"
    aria-hidden="true"
  >
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

function Perk({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2.5">
      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-(--color-border) bg-[rgba(168,213,186,0.15)]">
        {CHECK}
      </div>
      <p className="font-body text-sm leading-relaxed text-(--color-text-muted)">
        {text}
      </p>
    </div>
  );
}

export default function Booking() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1100));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="cta"
      aria-labelledby="cta-heading"
      className="bg-(--color-bg) px-6 py-20 transition-colors duration-300 md:py-28"
    >
      <div className="mx-auto max-w-300">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.58, ease: "easeOut" }}
          className="mb-12 text-center"
        >
          <span className="mb-2.5 block font-body text-[0.72rem] font-bold uppercase tracking-[0.2em] text-(--color-primary-dark)">
            Get Started
          </span>
          <h2
            id="cta-heading"
            className="font-heading text-4xl font-medium text-(--color-text) md:text-5xl"
          >
            Ship your first{" "}
            <span className="italic text-(--color-cta-dark)">Sailor Labs</span>{" "}
            integration
          </h2>
          <p className="mx-auto mt-3 max-w-135 font-body text-base leading-[1.75] text-(--color-text-muted)">
            Free forever for individuals. No credit card. No setup fees. Just
            open-source software that works.
          </p>
        </motion.div>

        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 380px), 1fr))",
          }}
        >
          {/* Left — perks */}
          <motion.div
            initial={{ opacity: 0, x: -22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.62, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="neu-card flex flex-col gap-4 p-8">
              <h3 className="font-heading text-[1.4rem] font-medium text-(--color-text)">
                Everything you need to get moving
              </h3>
              <Perk text="All packages are MIT-licensed — use in commercial projects, no strings attached." />
              <Perk text="Comprehensive docs, API references, and interactive examples for every tool." />
              <Perk text="Active Discord community with the core team available Monday–Friday." />
              <Perk text="Semantic versioning — no surprise breaking changes without a major release." />
              <Perk text="Self-hostable services — your data never touches our servers." />
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap gap-3">
              {[
                { val: "48k+", sub: "GitHub Stars" },
                { val: "3.2M", sub: "Monthly Downloads" },
                { val: "180+", sub: "Contributors" },
              ].map((s) => (
                <div
                  key={s.sub}
                  className="neu-card-sm min-w-22.5 flex-1 py-3 text-center"
                >
                  <p className="font-heading text-[1.35rem] font-semibold leading-none text-(--color-text)">
                    {s.val}
                  </p>
                  <p className="mt-1 font-body text-[0.64rem] uppercase tracking-[0.08em] text-(--color-text-muted)">
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 22 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.62, ease: "easeOut", delay: 0.08 }}
            className="neu-card p-8 md:p-10"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.42, ease: "easeOut" }}
                className="flex flex-col items-center gap-3 py-6 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-(--color-secondary) bg-[rgba(168,213,186,0.18)] shadow-(--shadow-neu)">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-secondary-dark)"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-medium text-(--color-text)">
                  You're on the list!
                </h3>
                <p className="max-w-85 font-body text-sm leading-relaxed text-(--color-text-muted)">
                  Welcome aboard, <strong>{form.name}</strong>. We've sent a
                  confirmation to <strong>{form.email}</strong> with next steps.
                </p>
                <div className="mt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href="https://github.com/sailorlabs-in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta text-xs! px-4! py-2.5!"
                  >
                    Browse GitHub
                  </a>
                  <button
                    onClick={() => {
                      setForm(INITIAL);
                      setSubmitted(false);
                    }}
                    className="btn-outline text-xs! px-4! py-2.5! cursor-pointer"
                  >
                    Register another
                  </button>
                </div>
              </motion.div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                aria-label="Get started registration form"
              >
                <h3 className="mb-6 font-heading text-[1.45rem] font-medium text-(--color-text)">
                  Create your free account
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="cta-name"
                      className="font-body text-[0.8rem] font-semibold text-(--color-text)"
                    >
                      Full name{" "}
                      <span
                        aria-hidden="true"
                        className="text-(--color-primary)"
                      >
                        *
                      </span>
                    </label>
                    <input
                      id="cta-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Jane Developer"
                      value={form.name}
                      onChange={onChange}
                      className="form-input"
                      aria-required="true"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="cta-email"
                      className="font-body text-[0.8rem] font-semibold text-(--color-text)"
                    >
                      Work email{" "}
                      <span
                        aria-hidden="true"
                        className="text-(--color-primary)"
                      >
                        *
                      </span>
                    </label>
                    <input
                      id="cta-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={onChange}
                      className="form-input"
                      aria-required="true"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="cta-usecase"
                      className="font-body text-[0.8rem] font-semibold text-(--color-text)"
                    >
                      Primary use case
                    </label>
                    <select
                      id="cta-usecase"
                      name="useCase"
                      value={form.useCase}
                      onChange={onChange}
                      className="form-input"
                    >
                      {USE_CASES.map((u) => (
                        <option
                          key={u.value}
                          value={u.value}
                          disabled={!u.value}
                        >
                          {u.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="cta-team"
                      className="font-body text-[0.8rem] font-semibold text-(--color-text)"
                    >
                      Team size
                    </label>
                    <select
                      id="cta-team"
                      name="teamSize"
                      value={form.teamSize}
                      onChange={onChange}
                      className="form-input"
                    >
                      {TEAM_SIZES.map((t) => (
                        <option
                          key={t.value}
                          value={t.value}
                          disabled={!t.value}
                        >
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.03 } : {}}
                  whileTap={!loading ? { scale: 0.97 } : {}}
                  className="btn-cta mt-6 w-full justify-center!"
                  style={{
                    opacity: loading ? 0.75 : 1,
                    cursor: loading ? "wait" : "pointer",
                  }}
                  aria-busy={loading}
                >
                  {loading ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.75,
                          ease: "linear",
                        }}
                        className="inline-block"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                      </motion.span>
                      Setting up…
                    </>
                  ) : (
                    <>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        aria-hidden="true"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                      Get Started Free
                    </>
                  )}
                </motion.button>

                <p className="mt-3 text-center font-body text-[0.72rem] text-(--color-text-subtle)">
                  No credit card required · MIT license · Cancel any time
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
