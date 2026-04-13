import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We dive deep into your vision, goals, and challenges. Research-backed strategy meets creative thinking.',
    color: '#818cf8',
    gradient: 'from-[#6366f1] to-[#818cf8]',
  },
  {
    number: '02',
    title: 'Design',
    description: 'Wireframes evolve into stunning prototypes. Every pixel is deliberate, every interaction is meaningful.',
    color: '#22d3ee',
    gradient: 'from-[#22d3ee] to-[#06b6d4]',
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Clean, scalable code brought to life with modern frameworks. Agile sprints keep everything on track.',
    color: '#a78bfa',
    gradient: 'from-[#a78bfa] to-[#8b5cf6]',
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Rigorous testing, performance optimization, and seamless launch. Your product goes live with confidence.',
    color: '#34d399',
    gradient: 'from-[#34d399] to-[#10b981]',
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-28 sm:py-36 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-[#a78bfa]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-24"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#a78bfa] bg-[#a78bfa]/[0.08] border border-[#a78bfa]/[0.12] rounded-full mb-6">
            How We Work
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Our{' '}
            <span className="bg-gradient-to-r from-[#a78bfa] to-[#fb7185] bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="mt-5 text-lg text-[#7a7a99] max-w-2xl mx-auto leading-relaxed">
            A battle-tested workflow that turns ambitious ideas into polished digital products.
          </p>
        </motion.div>

        {/* Steps - clean layout */}
        <div className="space-y-6 sm:space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group"
            >
              <div
                className={`relative flex flex-col sm:flex-row items-start gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0d0d14]/80 border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 overflow-hidden ${
                  i % 2 !== 0 ? 'sm:ml-auto sm:max-w-[85%] lg:max-w-[75%]' : 'sm:max-w-[85%] lg:max-w-[75%]'
                }`}
              >
                {/* Glow on hover */}
                <div
                  className="absolute -top-16 -left-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-[50px] pointer-events-none"
                  style={{ background: step.color }}
                />

                {/* Number */}
                <div className="relative flex-shrink-0">
                  <span
                    className="text-6xl sm:text-7xl font-extrabold opacity-[0.12]"
                    style={{ fontFamily: 'var(--font-display)', color: step.color }}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="relative flex-1 pt-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${step.gradient}`}
                    />
                    <h3
                      className="text-xl sm:text-2xl font-bold text-white"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[#7a7a99] leading-relaxed text-[15px] sm:text-base max-w-lg">
                    {step.description}
                  </p>
                </div>

                {/* Side accent */}
                <div
                  className={`absolute top-0 ${i % 2 === 0 ? 'left-0' : 'right-0'} w-[3px] h-full bg-gradient-to-b ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
