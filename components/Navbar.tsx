'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import GradientText from '@/components/ui/GradientText'

const navItems = [
  { name: 'Home', href: '#home', active: true },
  { name: 'x402', href: '#x402' },
  { name: 'Use cases', href: '#use-cases' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Tokenomics', href: '#tokenomics' },
  { name: 'Flappy DOBI', href: '#flappy-dobi' },
  { name: 'Social Networks', href: '#social-networks' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 100
      const elementTop = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementTop - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/95 backdrop-blur-md border-b border-dobi-blue/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 group"
          >
            <GradientText variant="hero" className="text-xl md:text-2xl font-bold">DOBI</GradientText>
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-300 relative group ${
                  item.active 
                    ? 'text-dobi-blue' 
                    : 'text-white hover:text-dobi-blue'
                }`}
              >
                {item.name}
                {item.active && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-dobi-blue to-neon-purple"></span>
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

