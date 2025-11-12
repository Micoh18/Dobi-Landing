'use client'

import { motion } from 'framer-motion'
import { Shield, Zap, DollarSign, CheckCircle } from 'lucide-react'
import GradientText from '@/components/ui/GradientText'

const values = [
  {
    icon: Shield,
    title: 'Security & Trust',
    description: 'Data validation and fraud prevention through advanced AI algorithms that guarantee the integrity of every transaction.',
    color: 'from-dobi-blue to-electric-blue',
    caption: 'Data validation and fraud prevention through AI'
  },
  {
    icon: Zap,
    title: 'Total Automation',
    description: 'Self-managing assets with AI. Monitoring, validation and automatic execution without human intervention.',
    color: 'from-dobi-blue to-neon-cyan',
    caption: 'AI monitoring, validation, execution without human intervention'
  },
  {
    icon: DollarSign,
    title: 'Fair Profitability',
    description: 'Real-time rewards and complete transparency in benefit distribution.',
    color: 'from-dobi-blue to-neon-cyan',
    caption: 'Real-time rewards and transparent distribution'
  },
  {
    icon: CheckCircle,
    title: 'Real-time Verification',
    description: 'On-chain validation of signals and assets with programmable trust.',
    color: 'from-electric-blue to-dobi-blue',
    caption: 'On-chain validation of signals and assets'
  }
]

export default function ValueSection() {
  return (
    <section id="why-dobi" className="py-32 md:py-40 px-6 relative overflow-hidden bg-gradient-to-b from-dobi-dark via-dobi-navy/20 to-dobi-dark">
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
          className="text-center mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-futuristic leading-tight tracking-tight"
          >
            Why choose{' '}
            <GradientText variant="hero" className="text-glow">DOBI</GradientText>?
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

        {/* Split-screen layout: Radial diagram on left, content on right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side: Four-peg radial diagram */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center"
            style={{ position: 'relative' }}
          >
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 400 400" 
              preserveAspectRatio="xMidYMid meet" 
              style={{ overflow: 'visible' }}
            >
              {/* Gradient definitions */}
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#A855F7" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.6" />
                </linearGradient>
                <radialGradient id="hub-glow">
                  <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
                </radialGradient>
                {/* Glow filter for nodes */}
                <filter id="node-glow">
                  <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                {/* Stronger glow filter */}
                <filter id="node-glow-strong">
                  <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                {/* Circular clip path for logo */}
                <clipPath id="logo-clip">
                  <circle cx="200" cy="200" r="28" />
                </clipPath>
              </defs>

              {/* Connecting lines (spokes) and nodes */}
              {values.map((value, index) => {
                const angle = (index * 90 - 45) * (Math.PI / 180) // Start at -45deg, then 45deg, 135deg, 225deg
                const centerX = 200
                const centerY = 200
                const radius = 140
                const endX = centerX + Math.cos(angle) * radius
                const endY = centerY + Math.sin(angle) * radius

                return (
                  <g key={`line-${index}`}>
                    <motion.line
                      x1={centerX}
                      y1={centerY}
                      x2={endX}
                      y2={endY}
                      stroke="url(#line-gradient)"
                      strokeWidth="2"
                      opacity="0.4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 0.4 }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                    {/* Animated pulse particles along the line */}
                    <motion.circle
                      r="3"
                      fill="#00D4FF"
                      initial={{ cx: centerX, cy: centerY, opacity: 0 }}
                      animate={{
                        cx: [centerX, endX, centerX],
                        cy: [centerY, endY, centerY],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    />
                    {/* Outer glow circle - animated pulse */}
                    <motion.circle
                      cx={endX}
                      cy={endY}
                      r="35"
                      fill={`url(#node-gradient-${index})`}
                      opacity={0.3}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0.2, 0.4, 0.2],
                        scale: [1, 1.15, 1]
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2
                      }}
                      filter="url(#node-glow-strong)"
                    />
                    {/* Middle glow circle */}
                    <motion.circle
                      cx={endX}
                      cy={endY}
                      r="32"
                      fill={`url(#node-gradient-${index})`}
                      opacity={0.4}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.2 + 0.1
                      }}
                      filter="url(#node-glow)"
                    />
                    {/* Node circle at exact end of line - serves as base for icon */}
                    <motion.circle
                      cx={endX}
                      cy={endY}
                      r="28"
                      fill={`url(#node-gradient-${index})`}
                      stroke="rgba(0, 212, 255, 0.8)"
                      strokeWidth="2.5"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: [0.9, 1, 0.9],
                        scale: 1
                      }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.8 + index * 0.15,
                        opacity: {
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.2
                        }
                      }}
                      filter="url(#node-glow)"
                    />
                    {/* Icon inside the circle using foreignObject */}
                    <foreignObject
                      x={endX - 14}
                      y={endY - 14}
                      width="28"
                      height="28"
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        {(() => {
                          const Icon = value.icon
                          return (
                            <Icon 
                              className="w-6 h-6 text-white drop-shadow-lg" 
                              style={{ 
                                display: 'block',
                                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))'
                              }} 
                            />
                          )
                        })()}
                      </div>
                    </foreignObject>
                    {/* Label below the node */}
                    <text
                      x={endX}
                      y={endY + 50}
                      textAnchor="middle"
                      className="text-white font-bold"
                      style={{ fontSize: '12px', fill: '#FFFFFF' }}
                    >
                      {value.title}
                    </text>
                  </g>
                )
              })}
              
              {/* Additional gradient definitions for nodes */}
              <defs>
                {values.map((value, index) => {
                  const colors = {
                    'from-dobi-blue to-electric-blue': ['#00D4FF', '#0EA5E9'],
                    'from-neon-purple to-dobi-magenta': ['#A855F7', '#D946EF'],
                    'from-dobi-blue to-neon-cyan': ['#00D4FF', '#22D3EE'],
                    'from-electric-blue to-dobi-blue': ['#0EA5E9', '#00D4FF']
                  }
                  const [color1, color2] = colors[value.color as keyof typeof colors] || ['#00D4FF', '#A855F7']
                  return (
                    <linearGradient key={index} id={`node-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={color1} stopOpacity="1" />
                      <stop offset="50%" stopColor={color2} stopOpacity="0.95" />
                      <stop offset="100%" stopColor={color1} stopOpacity="0.9" />
                    </linearGradient>
                  )
                })}
              </defs>

              {/* Central hub: DOBI x402 */}
              <g>
                {/* Outer glow circle */}
                <circle
                  cx="200"
                  cy="200"
                  r="50"
                  fill="url(#hub-glow)"
                />
                {/* Animated outer ring */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="40"
                  fill="none"
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.6, 1, 0.6]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                {/* Main orb circle with gradient border */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="35"
                  fill="none"
                  stroke="url(#line-gradient)"
                  strokeWidth="3"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0.8, 1, 0.8],
                    scale: 1
                  }}
                  transition={{
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    scale: {
                      duration: 0.8,
                      delay: 0.3
                    }
                  }}
                  filter="url(#node-glow-strong)"
                />
                {/* Inner circle background for logo - filled circle */}
                <motion.circle
                  cx="200"
                  cy="200"
                  r="28"
                  fill="#000000"
                  stroke="#00D4FF"
                  strokeWidth="2.5"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1,
                    scale: 1
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4
                  }}
                />
                {/* Logo in the center with circular clip */}
                <g clipPath="url(#logo-clip)">
                  <foreignObject
                    x="172"
                    y="172"
                    width="56"
                    height="56"
                  >
                    <div className="w-full h-full flex items-center justify-center" style={{ borderRadius: '50%', overflow: 'hidden' }}>
                      <motion.img
                        src="/dobi-logo.png"
                        alt="DOBI Logo"
                        className="w-full h-full object-contain"
                        style={{
                          filter: 'drop-shadow(0 0 10px rgba(0, 212, 255, 0.8))',
                          borderRadius: '50%'
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                      />
                    </div>
                  </foreignObject>
                </g>
              </g>
            </svg>
          </motion.div>

          {/* Right side: Content stacked vertically without cards */}
          <div className="space-y-12">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  {/* No card container - content directly on background */}
                  <div className="flex gap-6 items-start">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative flex-shrink-0"
                    >
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} p-4 shadow-lg`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className={`absolute inset-0 w-16 h-16 rounded-xl bg-gradient-to-r ${value.color} opacity-30 blur-xl`}></div>
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 transition-all duration-300 relative">
                        <span className="text-white group-hover:opacity-0 transition-opacity duration-300">{value.title}</span>
                        <GradientText variant="cyan-purple" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{value.title}</GradientText>
                      </h3>
                      
                      <p className="text-gray-300 leading-relaxed text-base md:text-lg group-hover:text-gray-200 transition-colors duration-300" style={{ lineHeight: '1.6' }}>
                        {value.description}
                      </p>

                      {/* Subtle accent line on hover */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        className={`h-0.5 bg-gradient-to-r ${value.color} mt-4 origin-left`}
                      />
                    </div>
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
