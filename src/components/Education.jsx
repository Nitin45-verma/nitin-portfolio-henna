import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import SectionHeading from './SectionHeading'

const education = [
  {
    institution: 'TIPS-G Institute, Vaishali Nagar, Jaipur',
    degree: 'Professional Course in Software Development',
    year: '2026',
    description:
      'Comprehensive program covering full-stack web development, data structures, database management, and software engineering principles with hands-on project-based learning.',
  },
  {
    institution: 'Gandhi Government Sr. Sec. School, Bagru, Rajasthan',
    degree: 'Senior Secondary School Examination (12th Class, RBSE)',
    year: '2023',
    description: 'Completed senior secondary education.',
  },
  {
    institution: 'Naveen Bal Niketan Sr. Sec. School, Muhana, Jaipur',
    degree: 'Secondary School Examination (10th Class, RBSE)',
    year: '2020',
    description: 'Completed secondary education.',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-section-mobile md:py-section bg-bg-secondary">
      <div className="section-container">
        <SectionHeading
          title="Education"
          subtitle="Formal training that built my foundation."
        />

        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45 }}
              className="card p-6 md:p-8 flex gap-5 items-start"
            >
              <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                <GraduationCap size={22} />
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {edu.institution}
                  </h3>
                  <span className="text-xs text-text-muted bg-bg-secondary px-3 py-1 rounded-full border border-border">
                    {edu.year}
                  </span>
                </div>
                <p className="text-sm text-accent font-medium mb-2">
                  {edu.degree}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {edu.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
