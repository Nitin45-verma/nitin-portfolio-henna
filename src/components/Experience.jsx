import { motion } from 'framer-motion'
import { MapPin, Calendar } from 'lucide-react'
import SectionHeading from './SectionHeading'

const experiences = [
  {
    company: 'RNS IT Solutions Pvt. Ltd.',
    role: 'MERN Stack Developer Intern',
    location: 'Jaipur, India',
    period: '6 Months',
    bullets: [
      'Developed full-stack modules using React.js, Node.js, Express, and MongoDB within production-grade applications.',
      'Designed and implemented RESTful APIs with proper error handling, validation, and authentication middleware (JWT).',
      'Participated in code reviews, providing and receiving constructive feedback to maintain code quality.',
      'Collaborated with the team using Git branching workflows (feature branches, pull requests, merge reviews).',
      'Contributed to responsive UI implementations using Tailwind CSS, ensuring cross-browser and cross-device compatibility.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-section-mobile md:py-section bg-bg-secondary">
      <div className="section-container">
        <SectionHeading
          title="Experience"
          subtitle="Where I've applied my skills in real-world settings."
        />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="card p-6 md:p-8 relative"
            >
              {/* Accent left border */}
              <div className="absolute left-0 top-6 bottom-6 w-[3px] bg-accent rounded-r-full" />

              <div className="ml-3 md:ml-4">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {exp.role}
                    </h3>
                    <p className="text-accent text-sm font-medium">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-text-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} aria-hidden="true" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} aria-hidden="true" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5">
                  {exp.bullets.map((bullet, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.06 }}
                      className="text-sm text-text-secondary leading-relaxed flex gap-3"
                    >
                      <span className="text-accent mt-1.5 shrink-0">▸</span>
                      {bullet}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
