'use client'

import { motion } from 'framer-motion'
import { Shield, TrendingUp, Users, Zap, CheckCircle, Info } from 'lucide-react'
import { useState } from 'react'

const tokenomicsData = {
  totalSupply: 1000000000,
  publicAllocation: 87.5,
  liquidityPool: 12.5,
  chain: 'Base',
  platform: 'Virtuals.io'
}

const metricCards = [
  {
    title: 'Total Supply',
    value: '1,000,000,000',
    subtitle: '$DOBI',
    icon: TrendingUp,
    gradient: 'from-dobi-blue to-neon-cyan'
  },
  {
    title: 'Public Allocation',
    value: '87.5%',
    subtitle: '875,000,000 $DOBI',
    icon: Users,
    gradient: 'from-neon-purple to-dobi-magenta'
  },
  {
    title: 'Liquidity Pool',
    value: '12.5%',
    subtitle: '125,000,000 $DOBI',
    icon: Zap,
    gradient: 'from-electric-blue to-dobi-blue'
  },
  {
    title: 'Chain',
    value: 'Base',
    subtitle: 'Virtuals.io native',
    icon: Shield,
    gradient: 'from-dobi-blue to-electric-blue'
  }
]

const fairLaunchPoints = [
  'Open distribution, no private/VC rounds',
  'Fixed supply; no complex emissions',
  'Initial liquidity for price discovery'
]



export default function Tokenomics() {
  const [hoveredSlice, setHoveredSlice] = useState<string | null>(null)
  const [showTooltip, setShowTooltip] = useState(false)

  const chartData = [
    {
      name: 'Public Sale',
      value: tokenomicsData.publicAllocation,
      color: '#00D4FF',
      description: 'Open to all participants'
    },
    {
      name: 'Liquidity Pool',
      value: tokenomicsData.liquidityPool,
      color: '#A855F7',
      description: 'DEX liquidity provision'
    }
  ]

  // Calculate stroke offsets for donut chart
  const radius = 90
  const circumference = 2 * Math.PI * radius
  const publicStroke = (tokenomicsData.publicAllocation / 100) * circumference
  const liquidityStroke = (tokenomicsData.liquidityPool / 100) * circumference

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-dobi-dark via-dobi-navy/20 to-dobi-dark">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-dobi-blue/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-purple/15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Tech grid overlay */}
      <div className="absolute inset-0 opacity-5" 
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
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Tokenomics — <span className="gradient-text">Virtuals.io Fair Launch</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Fair-launch model: 1,000,000,000 $DOBI fixed supply. 87.5% Public, 12.5% Liquidity. No private rounds; addresses and movements are 100% auditable on-chain.
          </motion.p>

          {/* Tooltip note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400"
          >
            <Info className="w-4 h-4" />
            <span>Fair launch aims to minimize asymmetries: open distribution, simple rules, and on-chain traceability.</span>
          </motion.div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Interactive Donut Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="relative w-80 h-80 mb-8">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
                {/* Background circle */}
                <circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="20"
                  fill="transparent"
                />
                
                {/* Public Sale slice */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="#00D4FF"
                  strokeWidth="20"
                  fill="transparent"
                  strokeDasharray={`${publicStroke} ${circumference}`}
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 565.49" }}
                  whileInView={{ strokeDasharray: `${publicStroke} ${circumference}` }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                  onMouseEnter={() => setHoveredSlice('public')}
                  onMouseLeave={() => setHoveredSlice(null)}
                  className="cursor-pointer filter drop-shadow-lg"
                  style={{
                    filter: hoveredSlice === 'public' ? 'drop-shadow(0 0 8px #00D4FF)' : 'drop-shadow(0 0 4px #00D4FF50)'
                  }}
                />
                
                {/* Liquidity Pool slice */}
                <motion.circle
                  cx="100"
                  cy="100"
                  r={radius}
                  stroke="#A855F7"
                  strokeWidth="20"
                  fill="transparent"
                  strokeDasharray={`${liquidityStroke} ${circumference}`}
                  strokeDashoffset={-publicStroke}
                  strokeLinecap="round"
                  initial={{ strokeDasharray: "0 565.49" }}
                  whileInView={{ strokeDasharray: `${liquidityStroke} ${circumference}` }}
                  transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
                  onMouseEnter={() => setHoveredSlice('liquidity')}
                  onMouseLeave={() => setHoveredSlice(null)}
                  className="cursor-pointer filter drop-shadow-lg"
                  style={{
                    filter: hoveredSlice === 'liquidity' ? 'drop-shadow(0 0 8px #A855F7)' : 'drop-shadow(0 0 4px #A855F750)'
                  }}
                />
              </svg>
              
              {/* Center label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sm text-gray-400 mb-1">Total Supply</div>
                  <div className="text-2xl font-bold text-white">1,000,000,000</div>
                  <div className="text-sm text-dobi-blue font-medium">$DOBI</div>
                </motion.div>
              </div>

              {/* Hover tooltip */}
              {hoveredSlice && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-dobi-dark border border-dobi-blue/30 rounded-lg px-4 py-2 text-sm"
                >
                  {hoveredSlice === 'public' && (
                    <div className="text-center">
                      <div className="text-[#00D4FF] font-semibold">Public Sale 87.5%</div>
                      <div className="text-gray-300">Open to all participants</div>
                    </div>
                  )}
                  {hoveredSlice === 'liquidity' && (
                    <div className="text-center">
                      <div className="text-[#A855F7] font-semibold">Liquidity Pool 12.5%</div>
                      <div className="text-gray-300">DEX liquidity provision</div>
                    </div>
                  )}
                </motion.div>
              )}
            </div>

            {/* Chart Legend */}
            <div className="flex flex-col gap-3 w-full max-w-xs">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-4 h-4 rounded-full bg-[#00D4FF]"></div>
                <span className="text-gray-300">Public Sale (87.5%)</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <div className="w-4 h-4 rounded-full bg-[#A855F7]"></div>
                <span className="text-gray-300">Liquidity Pool (12.5%)</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Metric Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {metricCards.map((card, index) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-dobi-gray/30 to-dobi-dark/60 backdrop-blur-xl border border-dobi-blue/20 rounded-2xl p-6 hover:border-dobi-blue/40 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${card.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-white mb-1">{card.value}</div>
                        <div className="text-sm text-gray-400">{card.subtitle}</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-300">{card.title}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Fair Launch Explainer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-dobi-gray/20 to-dobi-dark/40 backdrop-blur-xl border border-dobi-blue/20 rounded-2xl p-8 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Fair Launch Model</h3>
              <div className="space-y-4">
                {fairLaunchPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-dobi-blue flex-shrink-0" />
                    <span className="text-gray-300">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="bg-dobi-dark/60 rounded-xl p-6 border border-dobi-blue/20">
                <h4 className="text-lg font-semibold text-white mb-4">Vesting Schedule</h4>
                <div className="flex items-center gap-3 text-gray-300">
                  <Shield className="w-5 h-5 text-dobi-blue" />
                  <span>Fixed Supply — no vesting/unlocks schedule</span>
                </div>
                <div className="mt-4 text-sm text-gray-400">
                  All tokens are distributed at launch with immediate circulation.
                </div>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  )
}