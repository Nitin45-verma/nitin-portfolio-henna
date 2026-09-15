import { motion } from 'framer-motion'
import { Briefcase, Globe, Server } from 'lucide-react'
import SectionHeading from './SectionHeading'

const highlights = [
  {
    icon: Briefcase,
    title: '1 Year MERN Experience',
    desc: 'Professional course + 6-month production internship',
  },
  {
    icon: Globe,
    title: 'Client-Facing Projects',
    desc: 'Delivered real business websites for paying clients',
  },
  {
    icon: Server,
    title: 'Full Stack & Deployment',
    desc: 'End-to-end: React frontend to AWS EC2 deployment',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
}

export default function About() {
  return (
    <section id="about" className="py-section-mobile md:py-section bg-bg-secondary">
      <div className="section-container">
        <SectionHeading
          title="About Me"
          subtitle="Getting things built — from concept to deployed product."
        />

        <div className="grid md:grid-cols-5 gap-10 md:gap-14 items-start">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3 space-y-4"
          >
            <p className="text-text-secondary leading-relaxed">
              I'm a <span className="text-text-primary font-medium">Full Stack Developer</span> with 
              hands-on experience across the MERN stack — React.js and Tailwind on the frontend, 
              Node.js and Express powering the APIs, and MongoDB handling the data layer.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Over the past year, I've sharpened my skills through a comprehensive software 
              development program and a <span className="text-text-primary font-medium">6-month 
              internship at RNS IT Solutions</span>, where I contributed to production codebases, 
              built modular full-stack features, and collaborated through proper Git workflows and 
              code reviews.
            </p>
            <p className="text-text-secondary leading-relaxed">
              What sets me apart is my ability to bridge business requirements with scalable 
              technical architecture. I focus on writing clean, maintainable code and leveraging 
              AI-assisted workflows to ship faster without sacrificing quality.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="md:col-span-2 space-y-4"
          >
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="card p-5 flex gap-4 items-start"
              >
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent shrink-0">
                  <item.icon size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
