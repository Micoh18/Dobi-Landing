'use client'

import { motion } from 'framer-motion'
import { Gamepad2, ExternalLink, Sparkles } from 'lucide-react'
import GradientText from '@/components/ui/GradientText'

export default function FlappyDobi() {
  return (
    <section id="flappy-dobi" className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-dobi-dark via-dobi-navy/20 to-dobi-dark">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-dobi-blue/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-purple/15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
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
      
      {/* Diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-dobi-blue to-transparent opacity-40" />
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-40" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-dobi-blue/20 to-dobi-purple/20 backdrop-blur-sm border border-neon-blue/30 rounded-full px-6 py-3 mb-8"
          >
            <Gamepad2 className="w-5 h-5 text-neon-blue" />
            <span className="text-sm font-medium text-gray-200">Play & Earn</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-futuristic"
          >
            <GradientText variant="hero" className="text-glow">Flappy DOBI</GradientText>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed"
          >
            Play and compete on Farcaster. The official DOBI game where you can earn rewards while having fun.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            {/* Phone Frame */}
            <div className="relative w-full max-w-sm">
              {/* Phone Container */}
              <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl">
                {/* Screen Bezel */}
                <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-3xl z-20"></div>
                  
                  {/* Screen Content */}
                  <div className="relative w-full aspect-[9/19.5] bg-gradient-to-br from-dobi-dark to-dobi-navy overflow-hidden">
                    {/* Game Video */}
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                      preload="metadata"
                    >
                      <source 
                        src="https://videos.ctfassets.net/neb2xacyy5jk/58DOS583iZZdY0iFGvVbZR/ffb467fa4dc8e43465b7b6131c4d6bcd/gam2e3_%C3%A2___Hecho_con_Clipchamp.mp4" 
                        type="video/mp4" 
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  
                  {/* Bottom Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
                </div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full blur-sm opacity-60"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-neon-purple to-neon-blue rounded-full blur-sm opacity-40"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Play on{' '}
                <GradientText variant="accent">Farcaster</GradientText>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Flappy DOBI is the official DOBI community game deployed on Farcaster. 
                Show off your skills, and be part of a gamified 
                community where entertainment meets blockchain.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {[
                {
                  icon: Gamepad2,
                  title: 'Addictive Gameplay',
                  description: 'Classic fun with a DOBI twist, easy to learn but hard to master.'
                },
                {
                  icon: Sparkles,
                  title: 'Blockchain Rewards',
                  description: 'Earn tokens and recognition as you play and improve your score.'
                },
                {
                  icon: ExternalLink,
                  title: 'Integrated with Farcaster',
                  description: 'Access directly from your Farcaster feed and share your achievements.'
                }
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-dobi-blue to-neon-blue rounded-xl p-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                        {feature.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Button */}
            <motion.a
              href="https://farcaster.xyz/miniapps/OczfRMSOND5Y/flappy-dobi"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 50px rgba(0, 212, 255, 0.8)",
                y: -3
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-dobi-blue to-electric-blue text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 overflow-hidden shadow-glow-blue group"
            >
              <Gamepad2 className="w-5 h-5" />
              <span>Play Flappy DOBI</span>
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

