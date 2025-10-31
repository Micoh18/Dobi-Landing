'use client'

import { motion } from 'framer-motion'
import { Car, Factory, TrendingUp, ArrowRight } from 'lucide-react'

const useCases = [
  {
    icon: Car,
    title: 'Ehive (Electric Mobility)',
    subtitle: 'Charging station validation',
    description: 'DOBI monitors and validates in real time the operation of charging stations for electric vehicles, ensuring that usage, availability and status data is accurate and reliable.',
    features: [
      '24/7 station monitoring',
      'Charging transaction validation',
      'Automatic revenue distribution',
      'Real-time availability reports'
    ],
    gradient: 'from-dobi-blue to-neon-cyan',
    bgGradient: 'from-dobi-blue/10 to-neon-cyan/10'
  },
  {
    icon: Factory,
    title: 'Industrial IoT',
    subtitle: 'Autonomous maintenance',
    description: 'Complete automation of industrial maintenance through IoT sensors that report machinery status, predict failures and execute preventive maintenance protocols.',
    features: [
      'AI-powered failure prediction',
      'Automated preventive maintenance',
      'Operational cost optimization',
      'Proactive performance alerts'
    ],
    gradient: 'from-electric-blue to-dobi-blue',
    bgGradient: 'from-electric-blue/10 to-dobi-blue/10'
  },
  {
    icon: TrendingUp,
    title: 'Decentralized Finance',
    subtitle: 'AI validation for RWAs built from devices performance data.',
    description: 'We verify the work, anchor it on-chain, and route rewards/fees creating programmable, creating new DeFi investment opportunities with maximum transparency and trust.',
    features: [
      'AI-verified tokenization',
      'Multi-layer asset validation',
      'Enhanced liquidity for RWAs',
      'Global access to investments'
    ],
    gradient: 'from-neon-purple to-dobi-magenta',
    bgGradient: 'from-neon-purple/10 to-dobi-magenta/10'
  }
]

export default function UseCases() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-dobi-dark via-dobi-navy/20 to-dobi-dark">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Consistent tech grid overlay */}
      <div className="absolute inset-0 opacity-[0.08]" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(0, 212, 255, 0.6) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0, 212, 255, 0.6) 1px, transparent 1px)
             `,
             backgroundSize: '120px 120px'
           }} 
      />
      
      {/* Diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-dobi-blue to-transparent opacity-30" />
        <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-30" />
      </div>

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
            Real-world{' '}
            <span className="gradient-text text-glow">Use Cases</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed"
          >
            DOBI is already transforming industries with practical AI solutions for asset validation and automated management
          </motion.p>
        </motion.div>

        {/* Use cases grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
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
                <div className="relative h-full rounded-2xl bg-gradient-to-br from-dobi-gray/30 to-dobi-dark/70 backdrop-blur-xl border border-dobi-blue/20 p-8 hover:border-dobi-blue/50 transition-all duration-500 shadow-lg shadow-dobi-blue/5 hover:shadow-xl hover:shadow-dobi-blue/10">
                  {/* Enhanced background effects */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-500`}></div>
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-dobi-blue to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-40"></div>
                  
                  {/* Tech corner elements */}
                  <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-dobi-blue/60 rounded-tr-lg"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-neon-purple/60 rounded-bl-lg"></div>
                  
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    viewport={{ once: true }}
                    className="relative mb-6"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-r ${useCase.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}></div>
                  </motion.div>

                  {/* Header */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="mb-4"
                  >
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-300">
                      {useCase.title}
                    </h3>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 + 0.7 }}
                      viewport={{ once: true }}
                      className={`h-px bg-gradient-to-r ${useCase.gradient} mb-3 origin-left`}
                    />
                    <p className={`text-sm font-medium bg-gradient-to-r ${useCase.gradient} bg-clip-text text-transparent`}>
                      {useCase.subtitle}
                    </p>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.7 }}
                    viewport={{ once: true }}
                    className="text-gray-300 leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300"
                  >
                    {useCase.description}
                  </motion.p>

                  {/* Features list */}
                  <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.9 }}
                    viewport={{ once: true }}
                    className="space-y-3 mb-6"
                  >
                    {useCase.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.2 + 1 + i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${useCase.gradient}`}></div>
                        {feature}
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Learn more link/button - only for Ehive */}
                  {index === 0 && (
                    <motion.a
                      href="https://ehive.cc/"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 1.2 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative z-10 inline-flex items-center gap-2 bg-gradient-to-r from-dobi-blue to-neon-cyan text-white px-4 py-2 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-dobi-blue/25 transition-all duration-300 cursor-pointer"
                    >
                      <span>Explore Use Case</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                  )}

                  {/* Bottom gradient line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 1.4 }}
                    viewport={{ once: true }}
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${useCase.gradient} origin-left group-hover:h-2 transition-all duration-300`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-br from-dobi-gray/40 to-dobi-dark/60 backdrop-blur-xl border border-dobi-blue/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-white mb-4"
            >
              Do you have a specific use case?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="text-gray-300 mb-6 max-w-2xl mx-auto"
            >
              DOBI is highly adaptable and can integrate with any existing IoT system, physical infrastructure or DePin. Contact us to explore how we can validate your assets.
            </motion.p>
            <motion.a
              href="https://t.me/DobiOfficial"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-dobi-blue to-neon-blue text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Contact the team
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}