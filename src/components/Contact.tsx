import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      {/* Glowing orbs */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] bg-accent-400/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -left-20 bottom-0 w-[400px] h-[400px] bg-cyan-400/6 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - CTA content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-emerald-400 bg-emerald-400/10 rounded-full mb-6">
              Get In Touch
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[var(--font-display)] tracking-tight leading-[1.1]">
              Let's Build{' '}
              <span className="bg-gradient-to-r from-accent-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Something Amazing
              </span>
            </h2>
            <p className="mt-6 text-lg text-dark-200 leading-relaxed max-w-lg">
              Have an idea that could change the game? We'd love to hear about it. 
              Drop us a message and let's turn your vision into reality.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-4">
              <a href="mailto:hello@sailorlabs.in" className="flex items-center gap-4 text-dark-200 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-accent-400/10 group-hover:border-accent-400/30 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-dark-300 uppercase tracking-wider">Email</div>
                  <div className="font-medium">hello@sailorlabs.in</div>
                </div>
              </a>
              <a href="https://sailorlabs.in" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-dark-200 hover:text-white transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-cyan-400/10 group-hover:border-cyan-400/30 transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-dark-300 uppercase tracking-wider">Website</div>
                  <div className="font-medium">sailorlabs.in</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right - Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm"
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-dark-200 mb-2">Full Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-dark-400 focus:outline-none focus:border-accent-400/50 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-dark-200 mb-2">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-dark-400 focus:outline-none focus:border-accent-400/50 focus:bg-white/[0.05] transition-all duration-300 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="contact-project" className="block text-sm font-medium text-dark-200 mb-2">Project Type</label>
                  <select
                    id="contact-project"
                    className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-dark-300 focus:outline-none focus:border-accent-400/50 focus:bg-white/[0.05] transition-all duration-300 text-sm appearance-none"
                  >
                    <option value="">Select a project type</option>
                    <option value="webapp">Web Application</option>
                    <option value="mobile">Mobile App</option>
                    <option value="design">UI/UX Design</option>
                    <option value="ai">AI Integration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-dark-200 mb-2">Tell Us About Your Project</label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Describe your idea, goals, and timeline..."
                    className="w-full px-5 py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-dark-400 focus:outline-none focus:border-accent-400/50 focus:bg-white/[0.05] transition-all duration-300 text-sm resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 bg-gradient-to-r from-accent-400 to-accent-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-accent-400/20 transition-all duration-300 text-sm flex items-center justify-center gap-2"
                >
                  Send Message
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
