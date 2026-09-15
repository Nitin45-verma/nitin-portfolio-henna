import { Mail, Heart } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Nitin45-verma', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/in/nitin-verma-30104731a', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:nikn63641@gmail.com', label: 'Email', isLucide: true },
]

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border bg-bg-secondary">
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-xs text-text-muted flex items-center gap-1.5">
            © {new Date().getFullYear()} Nitin Verma. Built with
            <Heart size={12} className="text-accent" />
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-2 rounded-lg text-text-muted hover:text-accent hover:bg-accent/10 transition-all"
              >
                {link.isLucide ? (
                  <link.icon size={18} />
                ) : (
                  <link.icon size={18} />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
