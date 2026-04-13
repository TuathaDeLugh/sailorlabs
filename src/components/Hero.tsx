import { motion } from 'motion/react';

const floatingOrbs = [
  { size: 600, x: '65%', y: '-5%', color: 'rgba(99,102,241,0.12)', blur: 140 },
  { size: 500, x: '-5%', y: '25%', color: 'rgba(34,211,238,0.08)', blur: 120 },
  { size: 400, x: '85%', y: '65%', color: 'rgba(168,85,247,0.1)', blur: 100 },
];

const techBadges = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: '𝗧𝗦' },
  { name: 'Node.js', icon: '⬢' },
  { name: 'Flutter', icon: '◆' },
  { name: 'AI / ML', icon: '🧠' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            y: [0, -25, 20, 0],
          }}
          transition={{
            duration: 14 + i * 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#06060a_75%)]" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#06060a] to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24 pb-16">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-10 backdrop-blur-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-sm text-dark-200 font-medium">Now accepting new projects for 2026</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.35 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-[-0.03em] leading-[1.08] text-white"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          We Build{' '}
          <span className="bg-gradient-to-r from-[#818cf8] via-[#22d3ee] to-[#a78bfa] bg-clip-text text-transparent">
            Revolutionary
          </span>
          <br />
          Web Experiences
        </motion.h1>

        {/* Sub-heading */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="mt-8 text-lg sm:text-xl text-[#8a8aaa] max-w-2xl mx-auto leading-relaxed"
        >
          From concept to deployment — we craft high-performance web apps, 
          stunning interfaces, and scalable digital products that push the boundaries of what's possible.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center gap-3 px-9 py-4.5 text-base font-semibold text-white rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.4)]"
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#818cf8] transition-all duration-500" />
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative">Let's Build Together</span>
            <svg className="relative w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#work"
            className="inline-flex items-center justify-center gap-2.5 px-9 py-4.5 text-base font-medium text-white/90 bg-white/[0.04] border border-white/[0.1] rounded-2xl hover:bg-white/[0.08] hover:border-white/[0.18] transition-all duration-400 backdrop-blur-sm"
          >
            <span>View Our Work</span>
            <svg className="w-4 h-4 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Tech Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.1 }}
          className="mt-20 flex flex-wrap justify-center gap-3"
        >
          {techBadges.map((badge, i) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.08, type: 'spring', stiffness: 200 }}
              className="group flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-[#7a7a99] bg-white/[0.02] border border-white/[0.06] rounded-xl hover:bg-white/[0.06] hover:border-white/[0.12] hover:text-white/80 transition-all duration-300 cursor-default"
            >
              <span className="text-xs opacity-60 group-hover:opacity-100 transition-opacity">{badge.icon}</span>
              {badge.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-24 flex flex-col items-center gap-3"
        >
          <span className="text-xs text-[#4a4a66] uppercase tracking-[0.2em]">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-[#2e2e44] flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2.5 bg-[#4a4a66] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
