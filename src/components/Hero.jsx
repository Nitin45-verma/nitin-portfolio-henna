import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowDown, Send, FileText } from 'lucide-react'
import nitinImg from '../assets/nitin.jpg'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left — Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-xs text-text-secondary bg-bg-card">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-4"
            >
              <span className="gradient-text">Nitin Verma</span>
            </motion.h1>

            {/* Title */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-xl text-text-secondary font-medium mb-6"
            >
              Full Stack Web Developer{' '}
              <span className="text-accent">(MERN Stack)</span>
            </motion.p>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-text-muted text-sm sm:text-base max-w-lg mb-10 leading-relaxed"
            >
              Building production-ready web applications with clean architecture,
              scalable APIs, and AI-assisted development workflows.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <Link
                to="projects"
                smooth
                duration={500}
                offset={-72}
                className="btn-primary cursor-pointer"
              >
                <ArrowDown size={16} />
                View Projects
              </Link>
              <Link
                to="contact"
                smooth
                duration={500}
                offset={-72}
                className="btn-secondary cursor-pointer"
              >
                <Send size={16} />
                Contact
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <FileText size={16} />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right — Animated Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            className="relative flex items-center justify-center order-first md:order-last"
          >
            {/* Outer rotating dashed ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[380px] md:h-[380px] rounded-full border-2 border-dashed border-accent/20"
            />

            {/* Inner rotating solid ring (opposite direction) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute w-[260px] h-[260px] sm:w-[310px] sm:h-[310px] md:w-[350px] md:h-[350px] rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0%, rgba(201,168,76,0.15) 25%, transparent 50%, rgba(201,168,76,0.08) 75%, transparent 100%)',
              }}
            />

            {/* Glow behind image */}
            <div className="absolute w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[270px] md:h-[270px] rounded-full bg-accent/10 blur-[40px]" />

            {/* Floating accent dots */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 right-8 sm:right-4 w-3 h-3 rounded-full bg-accent/40"
            />
            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-4 left-6 sm:left-2 w-2 h-2 rounded-full bg-accent/30"
            />
            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-1/2 -right-2 sm:-right-4 w-2.5 h-2.5 rounded-full bg-accent/25"
            />

            {/* Image container */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-2 border-accent/30 shadow-lg shadow-accent/10"
            >
              <img
                src={nitinImg}
                alt="Nitin Verma — Full Stack Developer"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
              {/* Subtle overlay gradient at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/30 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
