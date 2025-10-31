'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, DollarSign } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Security & Trust',
    description: 'Data validation and fraud prevention through advanced AI algorithms that guarantee the integrity of every transaction.',
    color: 'from-dobi-blue to-electric-blue'
  },
  {
    icon: Zap,
    title: 'Total Automation',
    description: 'Self-managing assets with AI. Monitoring, validation and automatic execution without human intervention.',
    color: 'from-neon-purple to-dobi-magenta'
  },
  {
    icon: DollarSign,
    title: 'Fair Profitability',
    description: 'Real-time rewards and complete transparency in benefit distribution.',
    color: 'from-dobi-blue to-neon-cyan'
  }
]

export default function ValueSection() {
  return (
    <section id="why-dobi" className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-dobi-dark via-dobi-navy/20 to-dobi-dark">
      {/* Enhanced background with prominent visual elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-dobi-blue/30 via-transparent to-transparent opacity-20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_var(--tw-gradient-stops))] from-neon-purple/30 via-transparent to-transparent opacity-20"></div>
      </div>
      
      {/* Consistent grid overlay */}
      <div className="absolute inset-0 opacity-[0.08]" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(0, 212, 255, 0.6) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0, 212, 255, 0.6) 1px, transparent 1px)
             `,
             backgroundSize: '80px 80px'
           }} 
      />
      
      {/* Diagonal accent lines similar to hero */}
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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-futuristic leading-tight tracking-tight"
          >
            Why choose{' '}
            <span className="gradient-text text-glow">DOBI</span>?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed"
          >
            We revolutionize real asset management with blockchain technology and artificial intelligence
          </motion.p>
        </motion.div>

        {/* Value propositions grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative p-8 h-full bg-gradient-to-br from-dobi-gray/30 to-dobi-dark/70 backdrop-blur-xl border border-dobi-blue/20 rounded-2xl hover:border-dobi-blue/50 transition-all duration-500 group overflow-hidden shadow-lg shadow-dobi-blue/5 hover:shadow-xl hover:shadow-dobi-blue/10">
                  {/* Card background effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dobi-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-dobi-blue to-transparent opacity-60"></div>
                  
                  {/* Enhanced Icon with tech styling */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="relative mb-8"
                  >
                    <div className="relative">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} p-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-r ${value.color} opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-300`}></div>
                      {/* Tech corner accents */}
                      <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-dobi-blue rounded-tl-lg opacity-60"></div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-neon-purple rounded-br-lg opacity-60"></div>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300"
                  >
                    {value.title}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                    viewport={{ once: true }}
                    className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
                  >
                    {value.description}
                  </motion.p>

                  {/* Hover effect indicator */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.9 }}
                    viewport={{ once: true }}
                    className={`h-1 bg-gradient-to-r ${value.color} mt-6 origin-left group-hover:h-2 transition-all duration-300`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom decorative element */}

      </div>
    </section>
  )
}