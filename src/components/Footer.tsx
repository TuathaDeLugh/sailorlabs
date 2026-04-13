import { useState } from 'react';
import { motion } from 'motion/react';

function BrandMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <circle cx="15" cy="15" r="13" stroke="var(--color-primary)" strokeWidth="2" />
      <path d="M9 20 L15 8 L21 20" stroke="var(--color-primary-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 17h9" stroke="var(--color-cta)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function FooterLink({ href, children, external }: { href: string; children: React.ReactNode; external?: boolean }) {
  return (
    <li>
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        onClick={!external ? (e) => { e.preventDefault(); if (href.startsWith('#')) document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); } : undefined}
        className="cursor-pointer font-body text-sm leading-[1.9] text-(--color-text-muted) no-underline transition-colors duration-200 hover:text-(--color-text)"
      >
        {children}
      </a>
    </li>
  );
}

const YEAR = new Date().getFullYear();

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subDone, setSubDone] = useState(false);

  return (
    <footer
      role="contentinfo"
      className="border-t border-(--color-border) bg-(--color-bg) px-6 pb-8 pt-14 transition-colors duration-300"
    >
      <div className="mx-auto max-w-300">
        {/* Top grid */}
        <div className="mb-11 grid gap-10" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <BrandMark />
              <span className="font-heading text-xl font-semibold text-(--color-text)">Sailor Labs</span>
            </div>
            <p className="max-w-57.5 font-body text-sm leading-relaxed text-(--color-text-muted)">
              Open-source software and web tools built for real users. Simple, purposeful, and always free.
            </p>
            <a
              href="https://github.com/sailorlabs"
              target="_blank" rel="noopener noreferrer"
              className="tag w-fit cursor-pointer no-underline"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M15 22v-4a5 5 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S9 17.44 9 18v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
              Open Source · MIT
            </a>
          </div>

          {/* Products */}
          <div>
            <p className="mb-2 font-body text-[0.7rem] font-bold uppercase tracking-[0.14em] text-(--color-text)">Products</p>
            <ul className="list-none">
              <FooterLink href="https://ejsviewer.sailorlabs.in/" external>EJS Viewer</FooterLink>
              <FooterLink href="https://vibemessage.sailorlabs.in/" external>Vibe Message</FooterLink>
              <FooterLink href="https://blogforge.in/" external>BlogForge</FooterLink>
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="mb-2 font-body text-[0.7rem] font-bold uppercase tracking-[0.14em] text-(--color-text)">Company</p>
            <ul className="list-none">
              <FooterLink href="#products">Our Products</FooterLink>
              <FooterLink href="#testimonials">Testimonials</FooterLink>
              <FooterLink href="#contact">Contact Us</FooterLink>
              <FooterLink href="https://github.com/sailorlabs" external>GitHub</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="mb-2 font-body text-[0.7rem] font-bold uppercase tracking-[0.14em] text-(--color-text)">Stay Updated</p>
            <p className="mb-3 font-body text-sm leading-relaxed text-(--color-text-muted)">
              New products and updates — no spam, ever.
            </p>
            {subDone ? (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-body text-sm font-semibold text-(--color-secondary-dark)"
              >
                ✓ You're subscribed!
              </motion.p>
            ) : (
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="you@company.com"
                  aria-label="Subscribe to newsletter"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input min-w-0 flex-1 py-2.5! text-sm!"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { if (email) setSubDone(true); }}
                  className="btn-cta shrink-0 px-3.5! py-2.5! cursor-pointer"
                  aria-label="Subscribe"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-(--color-border) pt-6">
          <p className="font-body text-[0.775rem] text-(--color-text-subtle)">
            © {YEAR} Sailor Labs. All rights reserved. MIT License.
          </p>
          <div className="flex flex-wrap gap-5">
            {['Privacy Policy', 'Terms of Service'].map((text) => (
              <a key={text} href="#"
                className="cursor-pointer font-body text-[0.775rem] text-(--color-text-subtle) no-underline transition-colors duration-200 hover:text-(--color-text)"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
