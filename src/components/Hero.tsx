import { motion } from 'motion/react';

const floatingOrbs = [
  { size: 600, x: '70%', y: '-10%', color: 'rgba(99,102,241,0.15)', blur: 120 },
  { size: 500, x: '-10%', y: '30%', color: 'rgba(34,211,238,0.1)', blur: 100 },
  { size: 350, x: '80%', y: '60%', color: 'rgba(168,85,247,0.12)', blur: 90 },
];

const techBadges = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Flutter', 'AI / ML',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-18">
      {/* Background Orbs */}
      {floatingOrbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: `blur(${orb.blur}px)`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 15, 0],
          }}
          transition={{
            duration: 12 + i * 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Radial fade for bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-dark-900 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm text-dark-200">Now accepting new projects for 2026</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-white font-[var(--font-display)]"
        >
          We Build{' '}
          <span className="bg-gradient-to-r from-accent-500 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
            Revolutionary
          </span>
          <br />
          Web Experiences
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-6 text-lg sm:text-xl text-dark-200 max-w-2xl mx-auto leading-relaxed"
        >
          From concept to deployment — we craft high-performance web apps, stunning interfaces, 
          and scalable digital products that push the boundaries of what's possible.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-accent-400 to-accent-500 rounded-2xl hover:shadow-2xl hover:shadow-accent-400/25 transition-all duration-400 hover:-translate-y-1"
          >
            Let's Build Together
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            View Our Work
          </a>
        </motion.div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {techBadges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 + i * 0.08 }}
              className="px-4 py-1.5 text-xs font-medium text-dark-200 bg-white/[0.03] border border-white/[0.06] rounded-full hover:bg-white/[0.07] hover:border-white/10 transition-all cursor-default"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 mx-auto rounded-full border-2 border-dark-400 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 bg-dark-300 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
