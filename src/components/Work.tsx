import { motion } from "motion/react";

const projects = [
  {
    title: "FinFlow Dashboard",
    category: "Fintech · Web App",
    description:
      "Real-time financial analytics platform with AI-powered insights, custom chart visualizations, and automated reporting.",
    gradientFrom: "#6366f1",
    gradientTo: "#a78bfa",
    tags: ["React", "Node.js", "D3.js"],
  },
  {
    title: "MediConnect",
    category: "Healthcare · Mobile App",
    description:
      "Telemedicine platform connecting patients with doctors via secure video consultations, e-prescriptions, and health tracking.",
    gradientFrom: "#22d3ee",
    gradientTo: "#34d399",
    tags: ["Flutter", "Firebase", "WebRTC"],
  },
  {
    title: "Artisan Marketplace",
    category: "E-Commerce · Full Stack",
    description:
      "Multi-vendor marketplace with AI-driven product recommendations, real-time inventory sync, and seamless payment processing.",
    gradientFrom: "#fb7185",
    gradientTo: "#fbbf24",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
];

const stats = [
  { value: "50+", label: "Projects Shipped", icon: "🚀" },
  { value: "99%", label: "Client Satisfaction", icon: "⭐" },
  { value: "3x", label: "Faster Delivery", icon: "⚡" },
  { value: "24/7", label: "Support Coverage", icon: "🛡️" },
];

export default function Work() {
  return (
    <section id="work" className="relative py-28 sm:py-36 px-6">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#22d3ee]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 sm:mb-20"
        >
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#22d3ee] bg-[#22d3ee]/[0.08] border border-[#22d3ee]/[0.12] rounded-full mb-6">
            Featured Work
          </span>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Crafted with{" "}
            <span className="bg-gradient-to-r from-[#22d3ee] to-[#34d399] bg-clip-text text-transparent">
              Precision
            </span>
          </h2>
          <p className="mt-5 text-lg text-[#7a7a99] max-w-2xl mx-auto leading-relaxed">
            Every project is a story of innovation. Here's a glimpse of what
            we've built for our clients.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 mb-20 sm:mb-28">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0d0d14] border border-white/[0.06] hover:border-white/[0.12] transition-all duration-500 hover:shadow-2xl hover:shadow-black/40"
            >
              {/* Project visual area */}
              <div
                className="relative h-56 sm:h-60 p-6 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${project.gradientFrom}15 0%, ${project.gradientTo}15 100%)`,
                }}
              >
                {/* Dotted pattern */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />
                {/* Mock browser window */}
                <div className="relative w-full h-full rounded-xl bg-[#06060a]/60 backdrop-blur-sm border border-white/[0.08] overflow-hidden group-hover:scale-[1.03] transition-transform duration-700 ease-out">
                  {/* Browser bar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-5 bg-white/[0.04] rounded-md border border-white/[0.06] flex items-center px-3">
                        <div className="w-3 h-3 rounded-full border border-white/10 mr-2" />
                        <div className="h-2 w-20 bg-white/[0.06] rounded" />
                      </div>
                    </div>
                  </div>
                  {/* Mock content */}
                  <div className="p-4 space-y-3">
                    <div className="flex gap-3">
                      <div className="w-1/3 space-y-2">
                        <div className="h-2 w-full bg-white/[0.06] rounded" />
                        <div className="h-2 w-3/4 bg-white/[0.04] rounded" />
                        <div className="h-2 w-1/2 bg-white/[0.04] rounded" />
                        <div
                          className="mt-3 h-16 w-full rounded-lg"
                          style={{
                            background: `linear-gradient(135deg, ${project.gradientFrom}20, ${project.gradientTo}20)`,
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="h-full rounded-lg border border-white/[0.05] bg-white/[0.02] p-3">
                          <div className="h-2 w-1/2 bg-white/[0.06] rounded mb-3" />
                          <div className="grid grid-cols-3 gap-2">
                            <div className="h-8 rounded bg-white/[0.03]" />
                            <div className="h-8 rounded bg-white/[0.03]" />
                            <div className="h-8 rounded bg-white/[0.03]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                <span
                  className="text-xs font-semibold uppercase tracking-[0.15em]"
                  style={{ color: project.gradientFrom }}
                >
                  {project.category}
                </span>
                <h3
                  className="text-xl font-bold text-white mt-2 mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>
                <p className="text-[#7a7a99] text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-xs font-medium text-[#b0b0cc] bg-white/[0.04] rounded-lg border border-white/[0.06]"
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 150 }}
              className="group text-center py-8 sm:py-10 px-4 rounded-2xl sm:rounded-3xl bg-[#0d0d14]/80 border border-white/[0.06] hover:border-white/[0.1] transition-all duration-300"
            >
              <div className="text-2xl mb-3">{stat.icon}</div>
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#818cf8] to-[#22d3ee] bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-[#4a4a66] font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
