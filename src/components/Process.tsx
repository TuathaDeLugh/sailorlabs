import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your vision, goals, and challenges. Research-backed strategy meets creative thinking.',
    color: 'text-accent-500',
    borderColor: 'border-accent-400/30',
    bgGlow: 'bg-accent-400/5',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Wireframes evolve into stunning prototypes. Every pixel is deliberate, every interaction is meaningful.',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-400/30',
    bgGlow: 'bg-cyan-400/5',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Clean, scalable code brought to life with modern frameworks. Agile sprints keep everything on track.',
    color: 'text-violet-400',
    borderColor: 'border-violet-400/30',
    bgGlow: 'bg-violet-400/5',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Rigorous testing, performance optimization, and seamless launch. Your product goes live with confidence.',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-400/30',
    bgGlow: 'bg-emerald-400/5',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-violet-400 bg-violet-400/10 rounded-full mb-6">
            How We Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[var(--font-display)] tracking-tight">
            Our{' '}
            <span className="bg-gradient-to-r from-violet-400 to-rose-400 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="mt-5 text-lg text-dark-200 max-w-2xl mx-auto">
            A battle-tested workflow that turns ambitious ideas into polished digital products.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-400/30 via-violet-400/30 to-emerald-400/30 hidden sm:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`relative flex items-start gap-8 mb-16 last:mb-0 ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Step number dot */}
              <div className="hidden sm:flex absolute left-8 lg:left-1/2 -translate-x-1/2 z-10">
                <div className={`w-4 h-4 rounded-full ${step.bgGlow} border-2 ${step.borderColor}`} />
              </div>

              {/* Content card */}
              <div className={`flex-1 ${i % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:pl-16'} sm:pl-20 lg:pl-0`}>
                <div className={`inline-block p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500`}>
                  <span className={`text-5xl font-bold ${step.color} opacity-30 font-[var(--font-display)]`}>
                    {step.number}
                  </span>
                  <h3 className="text-2xl font-semibold text-white mt-2 mb-3 font-[var(--font-display)]">
                    {step.title}
                  </h3>
                  <p className="text-dark-200 leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden lg:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
