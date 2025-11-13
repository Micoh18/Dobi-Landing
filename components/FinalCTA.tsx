'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, DollarSign, Sparkles } from 'lucide-react'
import GradientText from '@/components/ui/GradientText'

// Custom Twitter/X Icon Component
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

// Custom Telegram Icon Component  
const TelegramIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
  </svg>
)

// Custom Linktree Icon Component
const LinktreeIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 80 97.7">
    <path d="M0.2,33.1h24.2L7.1,16.7l9.5-9.6L33,23.8V0h14.2v23.8L63.6,7.1l9.5,9.6L55.8,33H80v13.5H55.7l17.3,16.7
		l-9.5,9.4L40,49.1L16.5,72.7L7,63.2l17.3-16.7H0V33.1H0.2z M33.1,65.8h14.2v32H33.1V65.8z"/>
  </svg>
)

const socialLinks = [
  { name: 'X (Twitter)', icon: TwitterIcon, url: 'https://x.com/dobi_terminal' },
  { name: 'Telegram', icon: TelegramIcon, url: 'https://t.me/DobiOfficial' },
  { name: 'Linktree', icon: LinktreeIcon, url: 'https://linktr.ee/DobiAgent' }
]



export default function FinalCTA() {
  return (
    <section id="social-networks" className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-dobi-dark via-dobi-navy/20 to-dobi-dark">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg">
        <div className="absolute inset-0 bg-gradient-to-r from-dobi-dark/90 to-dobi-gray/90"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 border border-neon-blue/20 rounded-lg"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            rotate: [0, -180, -360]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-neon-purple/20 rounded-full"
        />
        
        {/* Scattered dots */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-dobi-blue/20 to-dobi-purple/20 backdrop-blur-sm border border-neon-blue/30 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-neon-blue" />
            <span className="text-sm font-medium text-gray-200">The Future of RWAs is Here</span>
          </motion.div>

          {/* Enhanced main headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight text-futuristic"
          >
            <GradientText variant="hero" className="text-glow">DOBI:</GradientText> the onchain AI agent
            <br />
            that converts real assets into
            <br />
            <GradientText variant="hero" className="text-glow">smart investments</GradientText>
          </motion.h2>

          {/* Supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300/90 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Join the revolution that is transforming how we validate, manage and invest in real world assets
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.a
              href="https://t.me/DobiOfficial"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 50px rgba(0, 212, 255, 0.8)",
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-dobi-blue to-electric-blue text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl flex items-center gap-3 md:gap-4 transition-all duration-300 overflow-hidden shadow-glow-blue"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Users className="w-6 h-6" />
                Join the Community
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>

            <motion.a
              href="https://app.uniswap.org/explore/tokens/base/0x931ef8053e997b1bab68d1e900a061305c0ff4fb?inputCurrency=0x931ef8053e997b1bab68d1e900a061305c0ff4fb"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 50px rgba(168, 85, 247, 0.8)",
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-transparent border-2 border-neon-purple text-neon-purple px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl hover:bg-neon-purple hover:text-white transition-all duration-300 overflow-hidden shadow-lg shadow-neon-purple/10 hover:shadow-xl hover:shadow-neon-purple/20"
            >
              <span className="relative z-10 flex items-center gap-3">
                <DollarSign className="w-6 h-6" />
                Invest in $DOBI
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>



        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Follow us on our networks</h3>
          
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-16 h-16 bg-gradient-to-r from-dobi-gray to-dobi-dark border border-gray-600/50 rounded-2xl flex items-center justify-center hover:border-neon-blue/50 transition-all duration-300 group"
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                </motion.a>
              )
            })}
          </div>

          {/* Final message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-dobi-blue/10 to-dobi-purple/10 rounded-2xl border border-neon-blue/20 backdrop-blur-sm"
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              &quot;The future belongs to those who can connect the physical world with the digital one in a secure and transparent way. DOBI is building that bridge.&quot;
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-3 h-3 bg-neon-blue rounded-full animate-pulse"></div>
              <span className="text-gray-400 font-medium">Let&apos;s start now</span>
              <div className="w-3 h-3 bg-neon-purple rounded-full animate-pulse delay-500"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
