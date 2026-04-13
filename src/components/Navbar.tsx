import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme, type ThemeMode } from '../context/ThemeContext';

/* ─── Nav links ─── */
const NAV_LINKS = [
  { label: 'Products', href: '#products' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

function scrollTo(href: string) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─── Brand mark ─── */
function BrandMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 30 30" fill="none" aria-hidden="true">
      <circle cx="15" cy="15" r="13" stroke="var(--color-primary)" strokeWidth="2" />
      <path d="M9 20 L15 8 L21 20" stroke="var(--color-primary-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 17h9" stroke="var(--color-cta)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Theme toggle ─── */
const THEME_OPTIONS: { mode: ThemeMode; label: string; icon: React.ReactNode }[] = [
  {
    mode: 'light',
    label: 'Light',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
  {
    mode: 'system',
    label: 'System',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    mode: 'dark',
    label: 'Dark',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9z" />
      </svg>
    ),
  },
];

function ThemeToggle() {
  const { mode, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const current = THEME_OPTIONS.find((o) => o.mode === mode) ?? THEME_OPTIONS[1];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((p) => !p)}
        aria-label={`Theme: ${current.label}`}
        aria-expanded={open}
        aria-haspopup="true"
        className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-(--color-border) bg-(--color-bg-card) text-(--color-text-muted) shadow-(--shadow-neu-sm) transition-[border-color,color] duration-200 hover:border-(--color-primary) hover:text-(--color-text)"
      >
        {current.icon}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            aria-label="Theme options"
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute right-0 top-[calc(100%+10px)] z-200 flex min-w-35 flex-col gap-0.5 rounded-2xl border border-(--color-border) bg-(--color-bg-elevated) p-1.5 shadow-(--shadow-neu)"
          >
            {THEME_OPTIONS.map((opt) => (
              <button
                key={opt.mode}
                role="menuitem"
                onClick={() => { setMode(opt.mode); setOpen(false); }}
                aria-label={opt.label}
                className={`flex w-full cursor-pointer items-center gap-2.5 whitespace-nowrap rounded-xl border-none px-3 py-2 text-left font-body text-sm transition-[background,color] duration-150 ${
                  mode === opt.mode
                    ? 'bg-(--color-primary-light) font-semibold text-(--color-text)'
                    : 'bg-transparent text-(--color-text-muted) hover:bg-(--color-bg) hover:text-(--color-text)'
                }`}
              >
                {opt.icon}
                {opt.label}
                {mode === opt.mode && (
                  <svg className="ml-auto" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary-dark)" strokeWidth="3" aria-hidden="true">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Desktop nav link ─── */
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <button
      onClick={() => scrollTo(href)}
      className="cursor-pointer whitespace-nowrap rounded-lg border-none bg-transparent px-3.5 py-2 font-body text-sm font-medium tracking-wide text-(--color-text-muted) transition-[color,background] duration-200 hover:bg-(--color-bg) hover:text-(--color-text)"
    >
      {label}
    </button>
  );
}

/* ─── Main Navbar ─── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleMobileLink = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => scrollTo(href), 80);
  };

  return (
    <>
      {/* ── Full-width fixed strip — transparent, no interaction ── */}
      <div className="fixed inset-x-0 top-3.5 z-100 px-3.5">
        <motion.header
          initial={{ y: -72, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
          role="banner"
          className={`mx-auto flex h-14.5 max-w-300 items-center justify-between gap-4 rounded-2xl border border-(--color-border) px-5 backdrop-blur-[18px] transition-[background,box-shadow] duration-300 md:px-6 ${
            scrolled
              ? 'bg-(--nav-bg-scrolled) shadow-(--nav-shadow)'
              : 'bg-(--nav-bg) shadow-(--shadow-neu-sm)'
          }`}
        >
          {/* Brand */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            aria-label="Sailor Labs – back to top"
            className="flex shrink-0 items-center gap-2 no-underline"
          >
            <BrandMark />
            <span className="font-heading text-xl font-semibold leading-none tracking-wide text-(--color-text)">
              Sailor Labs
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            aria-label="Primary navigation"
            className="hidden flex-1 items-center justify-center gap-0.5 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggle />

            {/* Desktop CTA */}
            <motion.button
              onClick={() => scrollTo('#contact')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="btn-cta-header btn-cta py-[0.55rem]! px-5! text-[0.78rem]! md:inline-flex"
            >
              Get in Touch
            </motion.button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-[10px] border border-(--color-border) bg-(--color-bg-card) text-(--color-text) shadow-(--shadow-neu-sm) transition-[background,border-color] duration-200 md:hidden"
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <motion.div
                animate={menuOpen ? 'open' : 'closed'}
                className="flex w-4 flex-col gap-1.25"
              >
                <motion.span
                  variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 7 } }}
                  transition={{ duration: 0.22 }}
                  className="block h-[1.8px] origin-center rounded-sm bg-current"
                />
                <motion.span
                  variants={{ closed: { opacity: 1, scaleX: 1 }, open: { opacity: 0, scaleX: 0 } }}
                  transition={{ duration: 0.18 }}
                  className="block h-[1.8px] origin-center rounded-sm bg-current"
                />
                <motion.span
                  variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -7 } }}
                  transition={{ duration: 0.22 }}
                  className="block h-[1.8px] origin-center rounded-sm bg-current"
                />
              </motion.div>
            </button>
          </div>
        </motion.header>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
              className="fixed inset-0 z-98 bg-black/25 backdrop-blur-sm"
            />

            {/* Drawer — same width constraint as the header */}
            <div className="fixed inset-x-0 z-99 px-3.5 top-[calc(0.875rem+58px+0.5rem)]">
              <motion.nav
                key="mobile-nav"
                id="mobile-nav"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                aria-label="Mobile navigation"
                className="mx-auto flex max-w-300 flex-col gap-1 rounded-2xl border border-(--color-border) bg-(--nav-mobile-bg) p-4 shadow-(--shadow-neu)"
              >
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2, ease: 'easeOut' }}
                    onClick={() => handleMobileLink(link.href)}
                    className="flex w-full cursor-pointer items-center justify-between rounded-xl border-none bg-transparent px-4 py-3 text-left font-body text-base font-medium text-(--color-text-muted) transition-[background,color] duration-150 hover:bg-(--color-bg) hover:text-(--color-text)"
                  >
                    {link.label}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                ))}

                <div className="my-1 h-px bg-(--color-border)" aria-hidden="true" />

                <motion.button
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 + 0.05, duration: 0.22 }}
                  onClick={() => handleMobileLink('#contact')}
                  className="btn-cta w-full justify-center!"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <path d="m22 2-7 20-4-9-9-4 20-7z" /><path d="M22 2 11 13" />
                  </svg>
                  Get in Touch
                </motion.button>
              </motion.nav>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
