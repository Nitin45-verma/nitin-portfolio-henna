import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      'HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 
      'React Native / Expo', 'Redux Toolkit', 'Tailwind CSS', 
      'Bootstrap', 'Framer Motion',
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 
      'JWT Authentication', 'Google OAuth 2.0', 'Nodemailer',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Git / GitHub', 'Vercel', 'Render', 
      'AWS (EC2, PM2)', 'Prompt Engineering',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
}

const tagVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="py-section-mobile md:py-section">
      <div className="section-container">
        <SectionHeading
          title="Skills & Tools"
          subtitle="Technologies I work with on a daily basis."
        />

        <div className="grid md:grid-cols-3 gap-8 md:gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, delay: catIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-5">
                {category.title}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-30px' }}
                className="flex flex-wrap gap-2.5"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariants}
                    className="skill-tag"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
