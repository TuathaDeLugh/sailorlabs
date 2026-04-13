import { motion } from 'motion/react';

const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Web Applications',
    description: 'Full-stack web apps built with cutting-edge tech. From SaaS platforms to complex dashboards — blazing fast, beautifully crafted.',
    gradient: 'from-accent-400 to-accent-500',
    shadowColor: 'shadow-accent-400/10',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Mobile Apps',
    description: 'Cross-platform mobile experiences with Flutter and React Native. Native performance with a single codebase.',
    gradient: 'from-cyan-400 to-cyan-500',
    shadowColor: 'shadow-cyan-400/10',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'UI/UX Design',
    description: 'Pixel-perfect interfaces designed for conversion. Research-driven design systems that feel intuitive and look incredible.',
    gradient: 'from-violet-400 to-violet-500',
    shadowColor: 'shadow-violet-400/10',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'AI Integration',
    description: 'Smart applications powered by machine learning. We embed AI capabilities that give your product an unfair advantage.',
    gradient: 'from-rose-400 to-rose-500',
    shadowColor: 'shadow-rose-400/10',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    title: 'Cloud & DevOps',
    description: 'Serverless architectures, CI/CD pipelines, and auto-scaling infra. Ship faster, break less, scale infinitely.',
    gradient: 'from-emerald-400 to-emerald-500',
    shadowColor: 'shadow-emerald-400/10',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Performance',
    description: 'Lightning-fast load times, 100/100 Lighthouse scores, and buttery-smooth interactions. Speed is our obsession.',
    gradient: 'from-amber-400 to-orange-500',
    shadowColor: 'shadow-amber-400/10',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      {/* Section header */}
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent-500 bg-accent-400/10 rounded-full mb-6">
            What We Do
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[var(--font-display)] tracking-tight">
            Services That{' '}
            <span className="bg-gradient-to-r from-accent-500 to-cyan-400 bg-clip-text text-transparent">
              Transform
            </span>
          </h2>
          <p className="mt-5 text-lg text-dark-200 max-w-2xl mx-auto">
            We don't just build apps — we engineer digital experiences that disrupt industries and delight users.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 hover:shadow-2xl ${service.shadowColor} cursor-default`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-3 font-[var(--font-display)]">
                {service.title}
              </h3>
              <p className="text-dark-200 leading-relaxed text-[15px]">
                {service.description}
              </p>

              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
