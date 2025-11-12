'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, ArrowRight, Cloud, Cpu, Brain } from 'lucide-react'
import GradientText from '@/components/ui/GradientText'

const useCases = [
  {
    icon: Cloud,
    title: 'Autonomous Drone',
    description: 'Purchases precise climatology data before each flight',
    speed: 'Instant speed',
    gradient: 'from-dobi-blue to-neon-cyan'
  },
  {
    icon: Cpu,
    title: 'IoT Station',
    description: 'Pays for maintenance only when needed',
    speed: 'Real-time cost optimization',
    gradient: 'from-electric-blue to-dobi-blue'
  },
  {
    icon: Brain,
    title: 'AI Model',
    description: 'Unlocks verified datasets and updates instantly',
    speed: 'Frictionless continuous learning',
    gradient: 'from-neon-purple to-dobi-magenta'
  }
]

export default function X402Section() {
  return (
    <section 
      id="x402" 
      className="py-32 md:py-40 px-6 relative overflow-hidden bg-[#000000]"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dobi-blue/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}} />
      </div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 opacity-[0.08]" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(0, 212, 255, 0.6) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0, 212, 255, 0.6) 1px, transparent 1px)
             `,
             backgroundSize: '100px 100px'
           }} 
      />
      
      {/* Diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-dobi-blue to-transparent opacity-60" />
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-60" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-dobi-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-futuristic leading-tight tracking-tight"
          >
            What if your{' '}
            <span className="text-white">AI could</span>
            <br />
            <span className="text-dobi-blue">pay by itself</span>
            <span className="text-white"> for what it needs?</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed"
          >
            x402 + DOBI: The autonomous economy that breathes in real-time
          </motion.p>
        </motion.div>

        {/* Two main content blocks - immersive without cards */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 md:mb-32 items-stretch">
          {/* Block 1 - x402 Technology */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative flex"
          >
            {/* Subtle glassmorphism background - no borders */}
            <div className="relative backdrop-blur-md bg-gradient-to-br from-dobi-blue/5 via-transparent to-transparent rounded-2xl p-8 md:p-10 hover:bg-dobi-blue/10 transition-all duration-500 w-full flex flex-col">
              <div className="mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-dobi-blue to-neon-cyan p-5 group-hover:scale-110 transition-transform duration-300 inline-flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">402</span>
                </div>
                <div className="absolute w-20 h-20 rounded-2xl bg-gradient-to-r from-dobi-blue to-neon-cyan opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6 transition-all duration-300 relative">
                <span className="text-white group-hover:opacity-0 transition-opacity duration-300">x402 activates the payable web</span>
                <GradientText variant="blue" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">x402 activates the payable web</GradientText>
              </h3>
              
              <p className="text-gray-300 leading-relaxed mb-6 text-lg group-hover:text-gray-200 transition-colors duration-300 flex-grow" style={{ lineHeight: '1.7' }}>
                Implements HTTP 402 ('Payment Required') code so every API, sensor, or service can open on demand. Machines detect, request, pay, and use data in seconds. No humans in between.
              </p>

              <a 
                href="https://www.x402.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-dobi-blue hover:text-neon-cyan transition-colors text-sm font-medium inline-flex items-center gap-2 mt-auto"
              >
                HTTP 402 Protocol: Payment Required →
              </a>
            </div>
          </motion.div>

          {/* Block 2 - DOBI Validation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="group relative flex"
          >
            {/* Subtle glassmorphism background - no borders */}
            <div className="relative backdrop-blur-md bg-gradient-to-br from-neon-purple/5 via-transparent to-transparent rounded-2xl p-8 md:p-10 hover:bg-neon-purple/10 transition-all duration-500 w-full flex flex-col">
              <div className="mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-neon-purple to-dobi-magenta p-5 group-hover:scale-110 transition-transform duration-300 inline-flex items-center justify-center">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <div className="absolute w-20 h-20 rounded-2xl bg-gradient-to-r from-neon-purple to-dobi-magenta opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-6 transition-all duration-300 relative">
                <span className="text-white group-hover:opacity-0 transition-opacity duration-300">DOBI validates and authorizes</span>
                <GradientText variant="purple" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">DOBI validates and authorizes</GradientText>
              </h3>
              
              <p className="text-gray-300 leading-relaxed text-lg group-hover:text-gray-200 transition-colors duration-300 flex-grow" style={{ lineHeight: '1.7' }}>
                Only real and useful signals gain access. DOBI verifies authenticity, authorizes the transaction, and records every exchange on blockchain for programmable trust.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Use Cases - Minimal cards without borders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 md:mb-32"
        >
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group relative flex"
                >
                  {/* Minimal glassmorphism - no borders */}
                  <div className="relative backdrop-blur-sm bg-gradient-to-br from-dobi-blue/5 to-transparent rounded-xl p-6 hover:bg-dobi-blue/10 transition-all duration-500 w-full flex flex-col">
                    <div className="mb-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${useCase.gradient} p-3.5 group-hover:scale-110 transition-transform duration-300 inline-flex items-center justify-center`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                    </div>

                    <h4 className="text-xl font-bold mb-3 transition-all duration-300 relative">
                      <span className="text-white group-hover:opacity-0 transition-opacity duration-300">{useCase.title}</span>
                      <GradientText variant="cyan-purple" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{useCase.title}</GradientText>
                    </h4>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 flex-grow">
                      {useCase.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-dobi-blue mt-auto">
                      <Zap className="w-4 h-4" />
                      <span>{useCase.speed}</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-futuristic leading-tight"
          >
            <GradientText variant="hero" className="text-glow">
              The future already pays by itself.
            </GradientText>
          </motion.h3>

          <motion.a
            href="#x402"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 border-2 border-dobi-blue/50 text-dobi-blue font-semibold px-8 py-4 rounded-2xl hover:bg-dobi-blue/10 hover:border-dobi-blue transition-all duration-300"
          >
            <span>Explore x402</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

