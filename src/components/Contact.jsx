import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send } from 'lucide-react'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import SpecularButton from './SpecularButton'

/* Wrapper to make react-icons accept size prop like Lucide */
const wrapIcon = (Icon) => ({ size, className }) => <Icon size={size} className={className} />

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'nikn63641@gmail.com',
    href: 'mailto:nikn63641@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9166680296',
    href: 'tel:+919166680296',
  },
  {
    icon: wrapIcon(FaLinkedinIn),
    label: 'LinkedIn',
    value: 'linkedin.com/in/nitin-verma-30104731a',
    href: 'https://linkedin.com/in/nitin-verma-30104731a',
  },
  {
    icon: wrapIcon(FaGithub),
    label: 'GitHub',
    value: 'github.com/Nitin45-verma',
    href: 'https://github.com/Nitin45-verma',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Contact: ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )
    window.open(`mailto:nitinverma@example.com?subject=${subject}&body=${body}`)
  }

  return (
    <section id="contact" className="py-section-mobile md:py-section">
      <div className="section-container">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or want to chat? I'd love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <p className="text-text-secondary text-sm leading-relaxed mb-6">
              Whether you have a project idea, a job opportunity, or just want to connect — 
              feel free to reach out. I typically respond within 24 hours.
            </p>

            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="p-2.5 rounded-lg bg-bg-card border border-border group-hover:border-accent/40 transition-colors">
                  <item.icon size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs text-text-muted uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <div>
              <label htmlFor="contact-name" className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-bg-card border border-border text-sm text-text-primary placeholder:text-text-muted/60 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <SpecularButton type="submit" className="w-full" baseColor="#3b82f6">
              <Send size={16} />
              Send Message
            </SpecularButton>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
