'use client'

import { motion } from 'framer-motion'
import { Database, Bot, CheckCircle, Share2 } from 'lucide-react'
import GradientText from '@/components/ui/GradientText'

const steps = [
  {
    number: '01',
    icon: Database,
    title: 'Physical asset generates data',
    description: 'IoT devices like EV chargers, industrial sensors and connected equipment collect data in real time.',
    color: 'from-dobi-blue to-electric-blue'
  },
  {
    number: '02',
    icon: Bot,
    title: 'DOBI validates and secures',
    description: 'Our onchain AI agent automatically analyzes, verifies and validates the authenticity and integrity of the data.',
    color: 'from-dobi-blue to-neon-cyan'
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Transaction approved',
    description: 'Validated data is immutably recorded on the blockchain, creating a transparent history.',
    color: 'from-dobi-blue to-neon-cyan'
  },
  {
    number: '04',
    icon: Share2,
    title: 'Benefits distributed',
    description: 'Rewards are automatically distributed among $DOBI holders according to their participation in the protocol.',
    color: 'from-electric-blue to-dobi-blue'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-dobi-dark via-dobi-navy/30 to-dobi-dark">
      {/* Enhanced background with circuit-like patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        
        {/* Circuit-like connecting lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-dobi-blue via-transparent via-transparent to-neon-purple"></div>
          <div className="absolute top-0 left-1/2 w-0.5 h-full bg-gradient-to-b from-transparent via-dobi-blue via-transparent to-transparent"></div>
        </div>
      </div>
      
      {/* Consistent tech grid overlay */}
      <div className="absolute inset-0 opacity-[0.08]" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(0, 212, 255, 0.6) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0, 212, 255, 0.6) 1px, transparent 1px)
             `,
             backgroundSize: '100px 100px'
           }} 
      />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-futuristic leading-tight tracking-tight"
          >
            How does{' '}
            <GradientText variant="hero" className="text-glow">DOBI</GradientText> work?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed"
          >
            A simple and automatic process that transforms physical assets into secure digital investments
          </motion.p>
        </motion.div>

        {/* Steps grid with animated connecting line */}
        <div className="relative">
          {/* Animated connecting line that draws progressively */}
          <div className="hidden xl:block absolute top-1/2 left-0 right-0 h-0.5 z-0">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-dobi-blue via-neon-purple to-dobi-blue origin-left"
              style={{
                backgroundSize: '200% 100%',
                animation: 'gradient 3s ease infinite'
              }}
            />
            {/* Animated particles along the line */}
            <motion.div
              animate={{
                x: ['0%', '100%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-dobi-blue rounded-full blur-sm"
            />
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 p-4 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="relative bg-gradient-to-br from-dobi-gray/30 to-dobi-dark/70 backdrop-blur-xl border border-dobi-blue/20 rounded-2xl p-8 h-full flex flex-col hover:border-dobi-blue/50 transition-all duration-500 group-hover:transform group-hover:scale-[1.02] shadow-lg shadow-dobi-blue/5 hover:shadow-xl hover:shadow-dobi-blue/10 hover:shadow-2xl hover:shadow-dobi-blue/20">
                  {/* Card tech effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dobi-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-dobi-blue to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-60"></div>
                  
                  {/* Enhanced step number */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                    viewport={{ once: true }}
                    className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-r from-neon-purple to-dobi-magenta rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-lg border border-neon-purple/50"
                  >
                    {step.number}
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-dobi-magenta opacity-50 blur-lg rounded-xl"></div>
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    viewport={{ once: true }}
                    className="relative mb-6"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}></div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.6 }}
                    viewport={{ once: true }}
                    className="text-xl font-bold mb-4 transition-all duration-300 relative"
                  >
                    <span className="text-white group-hover:opacity-0 transition-opacity duration-300">{step.title}</span>
                    <GradientText variant="soft" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{step.title}</GradientText>
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.8 }}
                    viewport={{ once: true }}
                    className="text-gray-300 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300 flex-grow"
                  >
                    {step.description}
                  </motion.p>

                  {/* Progress indicator */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 1 }}
                    viewport={{ once: true }}
                    className={`h-1 bg-gradient-to-r ${step.color} mt-6 origin-left group-hover:h-2 transition-all duration-300 rounded-full`}
                  />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>


      </div>
    </section>
  )
}