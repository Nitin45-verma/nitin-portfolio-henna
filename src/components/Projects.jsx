import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import SectionHeading from './SectionHeading'

const projects = [
  {
    title: 'S Kumar Decor',
    tagline: 'Business website for a real paying client',
    description:
      'A professional business website built for a real client in the home decor industry. Features custom scroll animations, optimized performance, and full technical SEO implementation including JSON-LD structured data, XML sitemap, and Google Search Console integration.',
    differentiator: 'Real client project with production SEO — not a tutorial clone.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'JSON-LD', 'SEO'],
    liveUrl: 'https://skumar-decor.vercel.app',
  },
  {
    title: 'HomeBudget',
    tagline: 'Mobile-first household expense tracker',
    description:
      'A cross-platform expense tracking app designed for households, built with React Native and Expo for the frontend and a Node/Express/MongoDB backend. Self-deployed on AWS EC2 with PM2 process management. Features Google OAuth and email OTP authentication for secure access.',
    differentiator: 'Self-deployed on AWS EC2 with real auth — not a Firebase shortcut.',
    tech: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB', 'AWS EC2', 'Google OAuth'],
    liveUrl: 'https://home-exp.vercel.app',
  },
  {
    title: 'Real Estate Platform',
    tagline: 'Full-stack property marketplace',
    description:
      'A comprehensive property marketplace with property listings, advanced search and filter functionality, buy/sell workflows, and a role-gated admin panel. Built with the full MERN stack to handle real-world complexity of multi-user property management.',
    differentiator: 'Complete buy/sell workflow with role-based admin — not just a listing page.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT'],
    liveUrl: 'https://nitin-real-state.vercel.app',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Projects() {
  return (
    <section id="projects" className="py-section-mobile md:py-section">
      <div className="section-container">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications I've designed, built, and deployed."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="card p-6 md:p-8 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent/80 mt-1">
                    {project.tagline}
                  </p>
                </div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-2 !px-4 text-xs shrink-0 self-start"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Differentiator */}
              <p className="text-xs text-accent/90 font-medium mb-5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                {project.differentiator}
              </p>

              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-bg-secondary text-text-muted text-xs border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
