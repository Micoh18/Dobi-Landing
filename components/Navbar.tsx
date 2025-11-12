'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import GradientText from '@/components/ui/GradientText'

const navItems = [
  { name: 'Use Cases', href: '#use-cases' },
  { name: 'Flappy DOBI', href: '#flappy-dobi' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Tokenomics', href: '#tokenomics' },
]

const allNavItems = [
  { name: 'Home', href: '#home' },
  ...navItems
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
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
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      // Special offset for Flappy DOBI section to show the CTA button
      const offset = href === '#flappy-dobi' ? -120 : 100 // Offset for fixed navbar
      const elementTop = element.getBoundingClientRect().top + window.scrollY
      const offsetPosition = elementTop - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dobi-dark/95 backdrop-blur-md border-b border-dobi-blue/20' : 'bg-transparent'
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
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-dobi-blue/60 overflow-hidden bg-gradient-to-r from-dobi-blue/20 to-neon-cyan/20 backdrop-blur-sm group-hover:border-dobi-blue transition-all duration-300">
                <img 
                  src="/dobi-logo.png" 
                  alt="DOBI Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <GradientText variant="hero" className="text-xl md:text-2xl font-bold">DOBI</GradientText>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {allNavItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-dobi-blue transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-dobi-blue to-neon-purple group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-dobi-blue transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-dobi-dark via-dobi-navy to-dobi-dark border-l border-dobi-blue/20 z-50 lg:hidden overflow-y-auto"
            >
              <div className="p-6">
                {/* Mobile Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-dobi-blue/60 overflow-hidden bg-gradient-to-r from-dobi-blue/20 to-neon-cyan/20">
                      <img 
                        src="/dobi-logo.png" 
                        alt="DOBI Logo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <GradientText variant="hero" className="text-xl font-bold">DOBI</GradientText>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 text-gray-300 hover:text-dobi-blue transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Menu Items */}
                <nav className="space-y-2">
                  {allNavItems.map((item, index) => (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="block px-4 py-3 text-base font-medium text-gray-300 hover:text-dobi-blue hover:bg-dobi-blue/10 rounded-lg transition-all duration-300 border border-transparent hover:border-dobi-blue/20"
                    >
                      {item.name}
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-8 pt-8 border-t border-dobi-blue/20"
                >
                  <a
                    href="https://farcaster.xyz/miniapps/OczfRMSOND5Y/flappy-dobi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-dobi-blue to-electric-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-dobi-blue/50 transition-all duration-300"
                  >
                    Play Flappy DOBI
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

