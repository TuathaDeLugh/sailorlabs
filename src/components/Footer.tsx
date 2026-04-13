import { motion } from 'motion/react';

const footerLinks = [
  {
    heading: 'Services',
    links: ['Web Apps', 'Mobile Apps', 'UI/UX Design', 'AI Integration', 'Cloud & DevOps'],
  },
  {
    heading: 'Company',
    links: ['About Us', 'Our Process', 'Careers', 'Blog', 'Contact'],
  },
  {
    heading: 'Connect',
    links: ['Twitter / X', 'LinkedIn', 'GitHub', 'Dribbble', 'Instagram'],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-400/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.a
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2.5 mb-5"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-400 to-cyan-400 flex items-center justify-center font-bold text-white text-lg font-[var(--font-display)] shadow-lg shadow-accent-400/20">
                S
              </div>
              <span className="text-xl font-semibold text-white font-[var(--font-display)] tracking-tight">
                sailor<span className="text-accent-500">labs</span>
              </span>
            </motion.a>
            <p className="text-dark-300 text-sm leading-relaxed max-w-xs mb-6">
              We build revolutionary web experiences that push the boundaries of what's possible. Based in India, shipping globally.
            </p>
            <div className="flex gap-3">
              {/* Social Icons */}
              {['X', 'Li', 'Gh'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/[0.06] flex items-center justify-center text-dark-300 text-xs font-bold hover:bg-white/10 hover:text-white hover:border-white/15 transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {footerLinks.map((group) => (
            <div key={group.heading}>
              <h4 className="text-sm font-semibold text-white mb-4 font-[var(--font-display)]">
                {group.heading}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-dark-300 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-dark-400">
            © {new Date().getFullYear()} Sailor Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-dark-400 hover:text-dark-200 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-dark-400 hover:text-dark-200 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
