'use client'

import { motion } from 'framer-motion'
import { Calendar, Globe, Link, CheckCircle, Bot, DollarSign, Users, Shield, Zap, Target } from 'lucide-react'

const roadmapItems = [
  {
    quarter: 'Aug 2025',
    status: 'completed',
    title: 'Reactivation & Foundations',
    description: 'Community reactivation, TEE architecture implementation, and Virtuals.io integration',
    details: [
      'DOBI Awakens: Official reactivation on X/Twitter and Telegram',
      'TEE Architecture: Base implementation for secure validation',
      'Landing Page v2: Complete update with agentic value proposition'
    ],
    kpis: '200+ active holders, 1,000+ social interactions, 90+ PageSpeed score',
    icon: Bot,
    color: 'from-dobi-blue to-electric-blue'
  },
  {
    quarter: 'Sep 2025',
    status: 'in_progress',
    title: 'Community & Marketing',
    description: '360° marketing plan, developer documentation, and partnership pipeline activation',
    details: [
      '360° Marketing Plan: Technical content and use cases',
      'DOBI Wiki: Complete technical documentation and API references',
      'Developer Relations: Active participation in Base, Virtuals.io and DePIN communities',
      'Partnership Pipeline: Pre-engagement with 10+ DePIN projects'
    ],
    kpis: '5,000+ content views, 3+ partnerships in pipeline',
    icon: Users,
    color: 'from-neon-purple to-dobi-magenta'
  },
  {
    quarter: 'Oct 2025',
    status: 'upcoming',
    title: 'Product V1 + Pre-agreements',
    description: 'Core validation engine launch with device integration and pilot program',
    details: [
      'Main Endpoints: /validate/device, /monitor/uptime, /actions/maintenance',
      'Device Integration: EV chargers',
      'Beta Dashboard: Real-time validation visualization',
      'Strategic Pre-agreements: 2-3 DePIN projects on Base'
    ],
    kpis: 'V1 on mainnet 99.5%+ uptime, 100+ validations, 2+ signed agreements',
    icon: Zap,
    color: 'from-electric-blue to-neon-cyan'
  },
  {
    quarter: 'Nov 2025',
    status: 'upcoming',
    title: 'First Partnerships',
    description: 'Enhanced capabilities, official partnerships, and agent-to-agent framework',
    details: [
      'DOBI V1.1: Ticket management, bill processing, transaction verification',
      '2-3 Ecosystem Partnerships: Official Base/Virtuals collaborations',
      'A2A Protocol v0.1: Basic inter-agent communication',
      'Settlement Layer: Payment layer for inter-agent services'
    ],
    kpis: '3+ active partnerships, 100+ validated transactions, A2A with 1+ agents',
    icon: Link,
    color: 'from-dobi-blue to-neon-cyan'
  },
  {
    quarter: 'Dec 2025',
    status: 'upcoming',
    title: 'Client MVPs',
    description: 'Testing with real clients, SDK release, and revenue validation',
    details: [
      '1-2 Live MVPs: Clients testing for production validations',
      'SDK 0.1: Core toolkit for Base with integration guides',
      'Performance Dashboard: Detailed metrics for all validations'
    ],
    kpis: 'SDK used by 10+ developers, 95%+ validation success rate',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-400'
  },
  {
    quarter: 'Q1 2026',
    status: 'upcoming',
    title: 'Robustness & Token Utility',
    description: 'Enterprise-grade features, staking with slashing, and cross-chain expansion',
    details: [
      'DOBI V1.2: Anti-fraud engine, rate limiting, M2M testing',
      'Staking v1 with Slashing: Curator system for data quality',
      'USDC Autopayments: Base/Stellar for asset maintenance',
      'Cross-chain Plan: Multi-network AI agent ecosystem'
    ],
    kpis: '2+ enterprise clients, cross-chain operational',
    icon: Shield,
    color: 'from-purple-500 to-pink-400'
  },
  {
    quarter: 'Q2 2026',
    status: 'upcoming',
    title: 'A2A & Marketplace v1',
    description: 'Agent-to-agent economy, service marketplace, and operational scale',
    details: [
      'Agent-to-Agent Settlements: Service marketplace and reputation system',
      'Open Endpoint Marketplace: Public catalog and rating system',
      'SDK 0.3: Signed webhooks, device templates, testing suite',
      '≥5 Operators / ≥50 Devices: Active SLOs and public QoS metrics'
    ],
    kpis: '$10,000+ MRR, 50+ monitored devices, 95%+ SLA compliance',
    icon: Globe,
    color: 'from-indigo-500 to-blue-400'
  },
  {
    quarter: 'Q3 2026',
    status: 'upcoming',
    title: 'Revenue Engine & Scale',
    description: 'Revenue diversification, "Machines Pay Bills" campaign, and V2 preview',
    details: [
      'Revenue Diversification: Validation fees, revenue share, enterprise licensing',
      '"Machines Pay Bills" Campaign: Live demonstrations and case studies',
      'Performance Scaling: 4× transaction growth, geographic expansion',
      'DOBI V2 Preview: Unstructured data validation, device twin NFTs'
    ],
    kpis: '$15,000+ MRR, DOBI V2 deployed, 2026-27 roadmap published',
    icon: Target,
    color: 'from-orange-500 to-red-400'
  }
]



export default function Roadmap() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-gradient-to-b from-dobi-gray to-dobi-dark">
      {/* Enhanced DOBI-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dobi-dark via-dobi-navy/30 to-dobi-dark" />
      
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dobi-blue/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 right-1/6 w-64 h-64 bg-neon-cyan/15 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '4s'}} />
      </div>
      
      {/* Consistent futuristic grid overlay */}
      <div className="absolute inset-0 opacity-[0.08]" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(0, 212, 255, 0.6) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0, 212, 255, 0.6) 1px, transparent 1px)
             `,
             backgroundSize: '60px 60px'
           }} 
      />
      
      {/* Diagonal accent lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-dobi-blue to-transparent opacity-40" />
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-40" />
        <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-transparent via-dobi-blue to-transparent opacity-30" />
        <div className="absolute bottom-0 right-0 h-full w-1 bg-gradient-to-b from-transparent via-neon-purple to-transparent opacity-30" />
      </div>
      





      

      
      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/3 left-10 w-4 h-4 bg-dobi-blue rounded-full blur-sm opacity-60"
          animate={{ 
            y: [-20, 20, -20],
            x: [-10, 10, -10]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 right-10 w-6 h-6 bg-neon-purple rounded-full blur-sm opacity-50"
          animate={{ 
            y: [20, -20, 20],
            x: [10, -10, 10]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute top-2/3 left-1/3 w-3 h-3 bg-neon-cyan rounded-full blur-sm opacity-70"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight"
          >
            DOBI 2025-26{' '}
            <span className="gradient-text">Roadmap</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            AI Agent for Real-World Asset Validation - From reactivation to revenue scale
          </motion.p>
        </motion.div>

        {/* Roadmap timeline */}
        <div className="relative">
          {/* Timeline line - only on desktop */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-blue opacity-30 hidden lg:block"></div>
          
          {/* Mobile timeline line */}
          <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-blue opacity-30 lg:hidden"></div>

          <div className="space-y-8 lg:space-y-16">
            {roadmapItems.map((item, index) => {
              const Icon = item.icon
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Mobile Layout */}
                  <div className="flex items-start gap-6 lg:hidden">
                    {/* Mobile Timeline node */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="relative flex-shrink-0"
                    >
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} p-3 border-4 border-dobi-dark shadow-lg`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className={`absolute inset-0 w-12 h-12 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-xl animate-pulse`}></div>
                    </motion.div>

                    {/* Mobile Content */}
                    <div className="flex-1 pb-8">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`bg-gradient-to-br from-dobi-gray/80 to-dobi-dark/80 backdrop-blur-sm border ${
                          item.status === 'completed' ? 'border-green-500/50' :
                          item.status === 'in_progress' ? 'border-neon-blue/50' :
                          'border-gray-600/50'
                        } rounded-2xl p-4 hover:border-neon-purple/50 transition-all duration-300`}
                      >
                        {/* Quarter badge */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                          item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                          item.status === 'in_progress' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-gray-600/20 text-gray-400'
                        }`}>
                          <Calendar className="w-3 h-3" />
                          {item.quarter}
                        </div>

                        <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300 leading-relaxed text-sm mb-3">{item.description}</p>
                        
                        {/* Details */}
                        {item.details && (
                          <div className="mb-3">
                            <h4 className="text-sm font-semibold text-neon-blue mb-1">Key Deliverables:</h4>
                            <ul className="text-xs text-gray-400 space-y-1">
                              {item.details.map((detail, i) => (
                                <li key={i}>• {detail}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* KPIs */}
                        {item.kpis && (
                          <div className="mb-3">
                            <h4 className="text-sm font-semibold text-neon-purple mb-1">Success Metrics:</h4>
                            <p className="text-xs text-gray-400">{item.kpis}</p>
                          </div>
                        )}

                        {/* Status indicator */}
                        <div className="flex items-center gap-2">
                          {item.status === 'completed' && (
                            <span className="text-green-400 text-sm font-medium">✓ Completed</span>
                          )}
                          {item.status === 'in_progress' && (
                            <span className="text-green-300 text-sm font-medium">🔄 In Progress</span>
                          )}
                          {item.status === 'upcoming' && (
                            <span className="text-gray-400 text-sm font-medium">⏳ Upcoming</span>
                          )}
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className={`hidden lg:flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Content */}
                    <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8'}`}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className={`bg-gradient-to-br from-dobi-gray/80 to-dobi-dark/80 backdrop-blur-sm border ${
                          item.status === 'completed' ? 'border-green-500/50' :
                          item.status === 'in_progress' ? 'border-neon-blue/50' :
                          'border-gray-600/50'
                        } rounded-2xl p-6 hover:border-neon-purple/50 transition-all duration-300`}
                      >
                        {/* Quarter badge */}
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                          item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                          item.status === 'in_progress' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-gray-600/20 text-gray-400'
                        }`}>
                          <Calendar className="w-3 h-3" />
                          {item.quarter}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
                        
                        {/* Details */}
                        {item.details && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-neon-blue mb-2">Key Deliverables:</h4>
                            <ul className="text-sm text-gray-400 space-y-1">
                              {item.details.map((detail, i) => (
                                <li key={i}>• {detail}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                        
                        {/* KPIs */}
                        {item.kpis && (
                          <div className="mb-4">
                            <h4 className="text-sm font-semibold text-neon-purple mb-2">Success Metrics:</h4>
                            <p className="text-sm text-gray-400">{item.kpis}</p>
                          </div>
                        )}

                        {/* Status indicator */}
                        <div className={`mt-4 flex items-center gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                          {item.status === 'completed' && (
                            <span className="text-green-400 text-sm font-medium">✓ Completed</span>
                          )}
                          {item.status === 'in_progress' && (
                            <span className="text-green-300 text-sm font-medium">🔄 In Progress</span>
                          )}
                          {item.status === 'upcoming' && (
                            <span className="text-gray-400 text-sm font-medium">⏳ Upcoming</span>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Timeline node */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="relative w-2/12 flex justify-center"
                    >
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${item.color} p-4 border-4 border-dobi-dark shadow-lg`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className={`absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r ${item.color} opacity-20 blur-xl animate-pulse`}></div>
                    </motion.div>

                    {/* Spacer */}
                    <div className="w-5/12"></div>
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