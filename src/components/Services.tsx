import { motion } from 'motion/react';

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Web Applications',
    description: 'Full-stack web apps built with cutting-edge tech. From SaaS platforms to complex dashboards — blazing fast, beautifully crafted.',
    gradient: 'from-[#6366f1] to-[#818cf8]',
    glowColor: '#6366f1',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile Apps',
    description: 'Cross-platform mobile experiences with Flutter and React Native. Native performance with a single codebase.',
    gradient: 'from-[#22d3ee] to-[#06b6d4]',
    glowColor: '#22d3ee',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'UI/UX Design',
    description: 'Pixel-perfect interfaces designed for conversion. Research-driven design systems that feel intuitive and look incredible.',
    gradient: 'from-[#a78bfa] to-[#8b5cf6]',
    glowColor: '#a78bfa',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI Integration',
    description: 'Smart applications powered by machine learning. We embed AI capabilities that give your product an unfair advantage.',
    gradient: 'from-[#fb7185] to-[#f43f5e]',
    glowColor: '#fb7185',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: 'Cloud & DevOps',
    description: 'Serverless architectures, CI/CD pipelines, and auto-scaling infra. Ship faster, break less, scale infinitely.',
    gradient: 'from-[#34d399] to-[#10b981]',
    glowColor: '#34d399',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Performance',
    description: 'Lightning-fast load times, 100/100 Lighthouse scores, and buttery-smooth interactions. Speed is our obsession.',
    gradient: 'from-[#fbbf24] to-[#f59e0b]',
    glowColor: '#fbbf24',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36 px-6">
      {/* Background accent */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] bg-[#6366f1]/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#818cf8] bg-[#6366f1]/[0.08] border border-[#6366f1]/[0.12] rounded-full mb-6">
            What We Do
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Services That{' '}
            <span className="bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent">
              Transform
            </span>
          </h2>
          <p className="mt-5 text-lg text-[#7a7a99] max-w-2xl mx-auto leading-relaxed">
            We don't just build apps — we engineer digital experiences that disrupt industries and delight users.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl sm:rounded-3xl bg-[#0d0d14]/80 border border-white/[0.06] p-7 sm:p-8 hover:border-white/[0.12] transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow */}
              <div
                className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[60px] pointer-events-none"
                style={{ background: service.glowColor }}
              />

              {/* Icon */}
              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}
                style={{ boxShadow: `0 8px 24px -8px ${service.glowColor}40` }}
              >
                {service.icon}
              </div>

              {/* Content */}
              <h3
                className="relative text-lg sm:text-xl font-semibold text-white mb-2.5"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {service.title}
              </h3>
              <p className="relative text-[#7a7a99] leading-relaxed text-[14.5px]">
                {service.description}
              </p>

              {/* Bottom accent line on hover */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
