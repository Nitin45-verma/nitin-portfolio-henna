import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-12 md:mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base md:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="accent-line mt-4" />
    </motion.div>
  )
}
