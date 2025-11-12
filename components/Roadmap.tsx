'use client'

import {
  useScroll,
  useTransform,
  motion,
} from 'framer-motion'
import { Calendar, Globe, Link, CheckCircle, Bot, DollarSign, Users, Shield, Zap, Target } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import GradientText from '@/components/ui/GradientText'

const roadmapItems = [
  {
    quarter: 'Aug 2025',
    title: 'Reactivation & Foundations',
    description: 'Community reactivation, TEE architecture implementation, and Virtuals.io integration',
    details: [
      'DOBI Awakens: Official reactivation on X/Twitter and Telegram',
      'TEE Architecture: Base implementation for secure validation',
      'Landing Page v2: Complete update with agentic value proposition'
    ],
    kpis: '200+ active holders, 1,000+ social interactions, 90+ PageSpeed score',
    icon: Bot,
    color: 'from-dobi-blue to-electric-blue',
    variant: 'primary'
  },
  {
    quarter: 'Sep 2025',
    title: 'Community & Marketing',
    description: '360° marketing plan, developer documentation, and partnership pipeline activation',
    details: [
      '360° Marketing Plan: Technical content and use cases',
      'Developer Relations: Active participation in Base, Virtuals.io and DePIN communities',
      'Partnership Pipeline: Pre-engagement with 10+ DePIN projects'
    ],
    kpis: '5,000+ content views, 3+ partnerships in pipeline',
    icon: Users,
    color: 'from-neon-purple to-dobi-magenta',
    variant: 'secondary'
  },
  {
    quarter: 'Oct 2025',
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
    color: 'from-electric-blue to-neon-cyan',
    variant: 'primary'
  },
  {
    quarter: 'Nov 2025',
    title: 'First Partnerships',
    description: 'Enhanced capabilities, official partnerships, and agent-to-agent framework',
    details: [
      'Integration of x402 protocol in Production',
      'DOBI Wiki: Complete technical documentation and API references',
      '2-3 Ecosystem Partnerships: Official Base/Virtuals collaborations',
      'A2A Protocol v0.1: Basic inter-agent communication'
    ],
    kpis: '3+ active partnerships, 100+ validated transactions, A2A with 1+ agents',
    icon: Link,
    color: 'from-dobi-blue to-neon-cyan',
    variant: 'secondary'
  },
  {
    quarter: 'Dec 2025',
    title: 'Client MVPs',
    description: 'Testing with real clients, SDK release, and revenue validation',
    details: [
      '1-2 Live MVPs: Clients testing for production validations',
      'SDK 0.1: Core toolkit for Base with integration guides',
      'Performance Dashboard: Detailed metrics for all validations'
    ],
    kpis: 'SDK used by 10+ developers, 95%+ validation success rate',
    icon: DollarSign,
    color: 'from-green-500 to-emerald-400',
    variant: 'primary'
  },
  {
    quarter: 'Q1 2026',
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
    color: 'from-purple-500 to-pink-400',
    variant: 'secondary'
  },
  {
    quarter: 'Q2 2026',
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
    color: 'from-indigo-500 to-blue-400',
    variant: 'primary'
  },
  {
    quarter: 'Q3 2026',
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
    color: 'from-orange-500 to-red-400',
    variant: 'secondary'
  }
]

interface MilestoneCardProps {
  item: typeof roadmapItems[0]
  index: number
}

function MilestoneCard({ item, index }: MilestoneCardProps) {
  const Icon = item.icon
  const isPrimary = item.variant === 'primary'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative rounded-2xl p-6 md:p-8 backdrop-blur-md border transition-all duration-300 bg-gradient-to-br from-dobi-gray/60 via-dobi-dark/60 to-dobi-gray/60 border-gray-600/30 hover:border-dobi-blue/40 hover:shadow-xl hover:shadow-dobi-blue/10"
    >
      {/* Subtle background gradient */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br ${item.color} opacity-5`} />

      {/* Date badge */}
      <div className={`
        inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 uppercase tracking-wider border
        ${isPrimary 
          ? 'bg-dobi-blue/10 text-dobi-blue border-dobi-blue/20' 
          : 'bg-neon-purple/10 text-neon-purple border-neon-purple/20'
        }
      `}>
        <Calendar className="w-3 h-3" />
        {item.quarter}
      </div>

      {/* Title */}
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">
        {item.title}
      </h3>

      {/* Description - always visible */}
      <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg" style={{ lineHeight: '1.7', letterSpacing: '0.01em' }}>
        {item.description}
      </p>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-600/30 to-transparent mb-6" />

      {/* Key Deliverables */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-dobi-blue uppercase tracking-wide mb-3">
          Key Deliverables
        </h4>
        
        <ul className="space-y-3 text-sm text-gray-400" style={{ lineHeight: '1.6' }}>
          {item.details.map((detail, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-dobi-blue" />
              <span className="flex-1">{detail}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      {item.kpis && (
        <div className="h-px bg-gradient-to-r from-transparent via-gray-600/30 to-transparent mb-6" />
      )}

      {/* Success Metrics - Always visible but compact */}
      {item.kpis && (
        <div>
          <h4 className="text-sm font-semibold text-neon-purple uppercase tracking-wide mb-2">
            Success Metrics
          </h4>
          <p className="text-sm text-gray-400 leading-relaxed" style={{ lineHeight: '1.6' }}>
            {item.kpis}
          </p>
        </div>
      )}

      {/* Subtle accent line at bottom */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-b-2xl`} />
    </motion.div>
  )
}

export default function Roadmap() {
  const ref = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      setHeight(rect.height)
    }
  }, [ref])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 10%', 'end 50%'],
  })

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <section 
      id="roadmap" 
      className="py-32 md:py-40 px-6 relative overflow-hidden bg-gradient-to-b from-dobi-dark via-dobi-navy/20 to-dobi-dark"
      ref={containerRef}
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-dobi-blue/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}} />
      </div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.08]" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(0, 212, 255, 0.6) 1px, transparent 1px),
               linear-gradient(90deg, rgba(0, 212, 255, 0.6) 1px, transparent 1px)
             `,
             backgroundSize: '60px 60px'
           }} 
      />
      
      {/* Accent lines */}
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
          className="text-center mb-20 md:mb-24"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-futuristic leading-tight tracking-tight"
          >
            DOBI 2025-26{' '}
            <GradientText variant="hero">Roadmap</GradientText>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed"
          >
            AI Agent for Real-World Asset Validation - From reactivation to revenue scale
          </motion.p>
        </motion.div>

        {/* Timeline container */}
        <div ref={ref} className="relative pb-20">
          {roadmapItems.map((item, index) => {
            const Icon = item.icon
            const isPrimary = item.variant === 'primary'
            
            return (
              <div
                key={index}
                className="flex justify-start pt-10 md:pt-20 md:gap-10"
              >
                {/* Left side - Sticky date/quarter */}
                <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                  {/* Timeline node */}
                  <div className={`h-10 absolute left-3 md:left-3 w-10 rounded-full bg-dobi-dark flex items-center justify-center`}>
                    <div className={`
                      h-4 w-4 rounded-full bg-gradient-to-r ${item.color}
                      border-2 border-dobi-dark shadow-lg relative flex items-center justify-center
                    `}>
                      <Icon className="w-2.5 h-2.5 text-white" />
                    </div>
                    <div className={`
                      absolute inset-0 rounded-full animate-pulse
                      bg-gradient-to-r ${item.color} opacity-30
                    `} />
                  </div>
                  
                  {/* Date text - Desktop */}
                  <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-gray-400 dark:text-gray-500">
                    {item.quarter}
                  </h3>
                </div>

                {/* Right side - Content card */}
                <div className="relative pl-20 pr-4 md:pl-4 w-full">
                  {/* Date text - Mobile */}
                  <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-gray-400">
                    {item.quarter}
                  </h3>
                  
                  <MilestoneCard item={item} index={index} />
                </div>
              </div>
            )
          })}

          {/* Animated timeline line */}
          <div
            style={{
              height: height + 'px',
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-dobi-blue/30 dark:via-neon-purple/30 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-dobi-blue via-neon-purple to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
