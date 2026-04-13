import { useState } from 'react';
import { motion } from 'motion/react';

interface ContactForm { name: string; email: string; subject: string; message: string; }
const INITIAL: ContactForm = { name: '', email: '', subject: '', message: '' };

function InfoItem({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  return (
    <motion.div
      whileHover={{ x: 4, transition: { duration: 0.2 } }}
      className="flex items-start gap-3.5"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border border-(--color-border) bg-[rgba(232,180,184,0.12)] transition-colors duration-200 group-hover:bg-[rgba(232,180,184,0.2)]">
        {icon}
      </div>
      <div>
        <p className="font-body text-[0.68rem] font-bold uppercase tracking-widest text-(--color-text-subtle)">{label}</p>
        {href ? (
          <a href={href} className="font-body text-sm text-(--color-text) no-underline transition-colors duration-200 hover:text-(--color-primary-dark)">{value}</a>
        ) : (
          <p className="font-body text-sm text-(--color-text)">{value}</p>
        )}
      </div>
    </motion.div>
  );
}

const STROKE = 'var(--color-primary-dark)';

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(INITIAL);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative bg-(--color-bg) px-6 py-20 transition-colors duration-300 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute -left-40 bottom-0 h-100 w-100 rounded-full bg-[rgba(232,180,184,0.06)] blur-[120px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 h-87.5 w-87.5 rounded-full bg-[rgba(168,213,186,0.05)] blur-[100px]" />

      <div className="relative mx-auto max-w-300">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <span className="mb-2.5 block font-body text-[0.72rem] font-bold uppercase tracking-[0.2em] text-(--color-primary-dark)">
            Contact
          </span>
          <h2 id="contact-heading" className="font-heading text-4xl font-medium text-(--color-text) md:text-5xl">
            We'd love to&nbsp;
            <span className="italic text-(--color-primary-dark)">hear from you</span>
          </h2>
          <p className="mx-auto mt-3 max-w-135 font-body text-base leading-[1.75] text-(--color-text-muted)">
            Bug report, feature request, partnership inquiry, or just want to say hi — we read every message.
          </p>
        </motion.div>

        <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))' }}>
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="neu-card flex flex-col gap-5 p-8">
              <div>
                <h3 className="mb-1.5 font-heading text-[1.4rem] font-medium text-(--color-text)">Get in touch</h3>
                <p className="font-body text-sm leading-relaxed text-(--color-text-muted)">
                  Our team responds within one business day. Reach out via any channel below.
                </p>
              </div>

              <InfoItem
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={STROKE} strokeWidth="2" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>}
                label="General enquiries" value="hello@sailorlabs.in" href="mailto:hello@sailorlabs.in"
              />
              <InfoItem
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={STROKE} strokeWidth="2" aria-hidden="true"><path d="M15 22v-4a5 5 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9 17.44 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>}
                label="Bugs & contributions" value="github.com/sailorlabs" href="https://github.com/sailorlabs"
              />
              <InfoItem
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={STROKE} strokeWidth="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>}
                label="Community Discord" value="discord.gg/sailorlabs" href="https://discord.gg/sailorlabs"
              />

              {/* Response times */}
              <div className="rounded-xl border border-(--color-border) bg-(--color-bg) p-4">
                {[
                  { label: 'Email response', val: '< 24h' },
                  { label: 'GitHub issues', val: '< 48h' },
                  { label: 'Discord support', val: 'Real-time' },
                ].map((r, i) => (
                  <motion.div
                    key={r.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                    className="flex items-center justify-between py-1.5"
                  >
                    <span className="font-body text-[0.8rem] text-(--color-text-muted)">{r.label}</span>
                    <span className="font-body text-[0.8rem] font-semibold text-(--color-secondary-dark)">{r.val}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick links to products */}
            <div className="neu-card-sm flex flex-col gap-3 p-6">
              <p className="font-body text-[0.7rem] font-bold uppercase tracking-[0.14em] text-(--color-text)">
                Quick Links
              </p>
              {[
                { name: 'EJS Viewer', url: 'https://ejsviewer.sailorlabs.in/' },
                { name: 'Vibe Message', url: 'https://vibemessage.sailorlabs.in/' },
                { name: 'BlogForge', url: 'https://blogforge.in/' },
              ].map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-(--color-text-muted) no-underline transition-colors duration-200 hover:text-(--color-text)"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  {p.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="neu-card p-8"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center gap-4 py-8 text-center"
                role="status"
                aria-live="polite"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.15 }}
                  className="flex h-16 w-16 items-center justify-center rounded-full border border-(--color-secondary) bg-[rgba(168,213,186,0.18)]"
                >
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary-dark)" strokeWidth="2.5" aria-hidden="true"><path d="M20 6 9 17l-5-5" /></svg>
                </motion.div>
                <h3 className="font-heading text-2xl font-medium text-(--color-text)">Message sent!</h3>
                <p className="max-w-75 font-body text-sm leading-relaxed text-(--color-text-muted)">
                  Thanks, <strong>{form.name}</strong>. We'll reply to <strong>{form.email}</strong> within one business day.
                </p>
                <button onClick={() => { setForm(INITIAL); setSent(false); }} className="btn-outline mt-2 cursor-pointer">
                  Send another
                </button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} noValidate aria-label="Contact form">
                <h3 className="mb-6 font-heading text-[1.4rem] font-medium text-(--color-text)">Send a message</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { id: 'contact-name', name: 'name', type: 'text', label: 'Name', req: true, auto: 'name', ph: 'Your name', val: form.name },
                    { id: 'contact-email', name: 'email', type: 'email', label: 'Email', req: true, auto: 'email', ph: 'you@example.com', val: form.email },
                    { id: 'contact-subject', name: 'subject', type: 'text', label: 'Subject', req: false, auto: 'off', ph: 'Bug report / Feature request / Other', val: form.subject },
                  ].map((f) => (
                    <div key={f.id} className="flex flex-col gap-1.5">
                      <label htmlFor={f.id} className="font-body text-[0.8rem] font-semibold text-(--color-text)">
                        {f.label}{f.req && <span aria-hidden="true" className="ml-0.5 text-(--color-primary)">*</span>}
                      </label>
                      <input
                        id={f.id} name={f.name} type={f.type} required={f.req}
                        autoComplete={f.auto} placeholder={f.ph} value={f.val}
                        onChange={(e) => setForm((p) => ({ ...p, [f.name]: e.target.value }))}
                        className="form-input" aria-required={f.req}
                      />
                    </div>
                  ))}

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-message" className="font-body text-[0.8rem] font-semibold text-(--color-text)">
                      Message <span aria-hidden="true" className="text-(--color-primary)">*</span>
                    </label>
                    <textarea
                      id="contact-message" name="message" required rows={4}
                      placeholder="Describe your question, idea, or issue…"
                      value={form.message} onChange={onChange}
                      className="form-input resize-y"
                      style={{ minHeight: '110px' }}
                      aria-required="true"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit" disabled={loading}
                  whileHover={!loading ? { scale: 1.03 } : {}}
                  whileTap={!loading ? { scale: 0.97 } : {}}
                  className="btn-cta mt-5 w-full justify-center!"
                  style={{ opacity: loading ? 0.75 : 1, cursor: loading ? 'wait' : 'pointer' }}
                  aria-busy={loading}
                >
                  {loading ? (
                    <>
                      <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.75, ease: 'linear' }} className="inline-block">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                      </motion.span>
                      Sending…
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4 20-7z"/><path d="M22 2 11 13"/></svg>
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="mt-3 text-center font-body text-[0.72rem] text-(--color-text-subtle)">
                  We respond within 24 hours · No spam, ever
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
