import { motion } from 'motion/react';

const projects = [
  {
    title: 'FinFlow Dashboard',
    category: 'Fintech · Web App',
    description: 'Real-time financial analytics platform with AI-powered insights, custom chart visualizations, and automated reporting.',
    gradient: 'from-accent-400/20 to-violet-400/20',
    accentBorder: 'border-accent-400/20',
    tags: ['React', 'Node.js', 'D3.js'],
  },
  {
    title: 'MediConnect',
    category: 'Healthcare · Mobile App',
    description: 'Telemedicine platform connecting patients with doctors via secure video consultations, e-prescriptions, and health tracking.',
    gradient: 'from-cyan-400/20 to-emerald-400/20',
    accentBorder: 'border-cyan-400/20',
    tags: ['Flutter', 'Firebase', 'WebRTC'],
  },
  {
    title: 'Artisan Marketplace',
    category: 'E-Commerce · Full Stack',
    description: 'Multi-vendor marketplace with AI-driven product recommendations, real-time inventory sync, and seamless payment processing.',
    gradient: 'from-rose-400/20 to-amber-400/20',
    accentBorder: 'border-rose-400/20',
    tags: ['Next.js', 'Stripe', 'PostgreSQL'],
  },
];

const stats = [
  { value: '50+', label: 'Projects Shipped' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '3x', label: 'Faster Delivery' },
  { value: '24/7', label: 'Support Coverage' },
];

export default function Work() {
  return (
    <section id="work" className="relative py-32 px-6">
      {/* Background accent */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent-400/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-cyan-400 bg-cyan-400/10 rounded-full mb-6">
            Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-[var(--font-display)] tracking-tight">
            Crafted with{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Precision
            </span>
          </h2>
          <p className="mt-5 text-lg text-dark-200 max-w-2xl mx-auto">
            Every project is a story of innovation. Here's a glimpse of what we've built for our clients.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-24">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative rounded-3xl overflow-hidden border ${project.accentBorder} hover:border-white/15 transition-all duration-500`}
            >
              {/* Project image area */}
              <div className={`h-52 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                {/* Decorative grid */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                {/* Mock UI element */}
                <div className="w-3/4 h-3/4 rounded-xl bg-dark-900/40 backdrop-blur border border-white/10 p-4 group-hover:scale-[1.02] transition-transform duration-500">
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-3/4 bg-white/10 rounded" />
                    <div className="h-2 w-1/2 bg-white/10 rounded" />
                    <div className="h-2 w-2/3 bg-white/10 rounded" />
                    <div className="mt-3 h-8 w-full bg-white/5 rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 bg-dark-800/50">
                <span className="text-xs font-medium text-dark-300 uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mt-2 mb-3 font-[var(--font-display)]">
                  {project.title}
                </h3>
                <p className="text-dark-200 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-dark-200 bg-white/5 rounded-full border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center py-8 px-4 rounded-2xl bg-white/[0.02] border border-white/[0.05]"
            >
              <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-accent-500 to-cyan-400 bg-clip-text text-transparent font-[var(--font-display)]">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-dark-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
