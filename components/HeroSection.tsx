'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen lg:min-h-[85vh] flex flex-col overflow-hidden">
      {/* Spacer for fixed navbar */}
      <div className="h-20"></div>

      {/* Hero Content */}
      <div className="flex-1 flex items-center justify-center">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dobi-dark via-dobi-navy/30 to-dobi-dark" />
      
      {/* Prominent DOBI brand elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dobi-blue/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}} />
      </div>
      
      {/* Enhanced futuristic grid overlay */}
      <div className="absolute inset-0 opacity-20" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(0, 212, 255, 0.8) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0, 212, 255, 0.8) 1px, transparent 1px)
             `,
             backgroundSize: '60px 60px'
           }} 
      />
      
      {/* Diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-dobi-blue to-transparent opacity-60" />
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-60" />
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-dobi-blue to-transparent opacity-40" />
        <div className="absolute bottom-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-neon-purple to-transparent opacity-40" />
      </div>
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating orbs with glow */}
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-dobi-blue rounded-full blur-sm"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-20 w-2 h-2 bg-neon-purple rounded-full blur-sm"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-6 h-6 bg-dobi-blue rounded-full blur-sm"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-3 h-3 bg-neon-purple rounded-full blur-sm"
          animate={{ 
            y: [0, -18, 0],
            opacity: [0.4, 1, 0.4],
            scale: [1, 1.4, 1]
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Enhanced floating geometric shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-dobi-blue/40 rounded-2xl"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-20 h-20 border-2 border-neon-purple/40 rounded-full"
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
            scale: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
          }}
        />
        
        {/* Additional decorative elements */}
        <motion.div
          className="absolute top-1/2 left-10 w-32 h-1 bg-gradient-to-r from-transparent via-dobi-blue to-transparent"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-1 h-32 bg-gradient-to-b from-transparent via-neon-purple to-transparent"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto py-8 lg:py-16"
        >


          {/* Enhanced Main title with better typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-10 leading-[1.1] text-futuristic tracking-tight"
          >
            <span className="gradient-text text-glow">DOBI:</span>
            <br className="md:hidden" />
            <span className="text-white"> Onchain AI Agent</span>
            <br />
            <span className="text-white">for IoT and </span>
            <span className="gradient-text text-glow">DePIN</span>
          </motion.h1>

          {/* Enhanced Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300/90 mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed font-normal"
          >
            Verifies device data and distributes RWA payouts onchain
          </motion.p>



          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group btn-primary flex items-center gap-4 text-lg md:text-xl font-bold px-8 md:px-12 py-4 md:py-5 cursor-default"
            >
              <span className="relative z-10 flex items-center gap-3 md:gap-4">
                Dashboard (Coming Soon)
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.div>

            {/* Dobi x402 Button - Commented out for future use */}
            {/* <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group flex items-center gap-4 text-lg md:text-xl font-bold px-8 md:px-12 py-4 md:py-5 cursor-default relative overflow-hidden rounded-2xl border-2 border-dobi-blue/50 bg-gradient-to-r from-dobi-blue to-neon-cyan text-white shadow-lg shadow-dobi-blue/20 hover:shadow-xl hover:shadow-dobi-blue/30 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-3 md:gap-4">
                Dobi x402
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.div> */}

            <motion.a
              href="https://app.uniswap.org/explore/tokens/base/0x931ef8053e997b1bab68d1e900a061305c0ff4fb?inputCurrency=0x931ef8053e997b1bab68d1e900a061305c0ff4fb"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group btn-secondary flex items-center gap-4 text-lg md:text-xl font-bold px-8 md:px-12 py-4 md:py-5"
            >
              <span className="relative z-10 flex items-center gap-3 md:gap-4">
                Buy $DOBI
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>


      </div>
      </div>
    </section>
  )
}
