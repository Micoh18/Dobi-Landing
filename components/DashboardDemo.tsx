'use client'

import { motion } from 'framer-motion'
import { Monitor, Activity, DollarSign, Shield, ArrowRight, Eye, BarChart3, Zap } from 'lucide-react'

const dashboardFeatures = [
  {
    icon: Activity,
    title: 'Real-Time Monitoring',
    description: 'Visualize the status of all your connected devices'
  },
  {
    icon: DollarSign,
    title: 'Revenue Analysis',
    description: 'Detailed tracking of payments and benefit distribution'
  },
  {
    icon: Shield,
    title: 'Security Metrics',
    description: 'AI validations and data integrity reports'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Deep insights into your asset performance'
  }
]

const mockData = [
  { label: 'Active Devices', value: '1,247', change: '+12%' },
  { label: 'Validations/Day', value: '45.6K', change: '+8%' },
  { label: 'Revenue (24h)', value: '$12,430', change: '+15%' },
  { label: 'Uptime', value: '99.8%', change: '+0.2%' }
]

export default function DashboardDemo() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-neon-blue/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-neon-purple/3 rounded-full blur-3xl"></div>
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
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Dashboard</span> Demo
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Coming Soon
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Main dashboard container */}
            <div className="relative bg-gradient-to-br from-dobi-gray/90 to-dobi-dark/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-2xl">
              {/* Dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Monitor className="w-6 h-6 text-neon-blue" />
                  <h3 className="text-lg font-semibold text-white">DOBI Dashboard</h3>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm text-gray-300">Live</span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {mockData.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-dobi-blue/10 to-dobi-purple/10 rounded-xl p-4 border border-gray-600/30"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400 mb-2">{stat.label}</div>
                    <div className="text-xs text-green-400 font-medium">{stat.change}</div>
                  </motion.div>
                ))}
              </div>

              {/* Chart area placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-dobi-dark/50 to-dobi-gray/50 rounded-xl p-6 mb-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-300">Validation Activity</span>
                  <BarChart3 className="w-4 h-4 text-neon-purple" />
                </div>
                
                {/* Simulated chart bars */}
                <div className="flex items-end justify-between h-24 gap-2">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${Math.random() * 80 + 20}%` }}
                      transition={{ duration: 0.6, delay: 1 + i * 0.05 }}
                      viewport={{ once: true }}
                      className="bg-gradient-to-t from-neon-blue to-neon-purple rounded-sm flex-1 min-h-2"
                    />
                  ))}
                </div>
              </motion.div>

              {/* Recent activity */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="space-y-3"
              >
                <div className="text-sm text-gray-300 mb-3">Recent Activity</div>
                {[
                  { device: 'EV Charger #1247', action: 'Validation complete', time: '2 min' },
                  { device: 'IoT Sensor #892', action: 'Data verified', time: '5 min' },
                  { device: 'Station #445', action: 'Payment processed', time: '8 min' }
                ].map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between py-2 px-3 bg-dobi-dark/30 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                      <div>
                        <div className="text-sm text-white">{activity.device}</div>
                        <div className="text-xs text-gray-400">{activity.action}</div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400">{activity.time}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Floating elements */}
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
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Total control of your{' '}
                <span className="gradient-text">digital assets</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Access detailed metrics, analyze performance and make informed decisions with the most complete platform for RWA management.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-6">
              {dashboardFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-dobi-blue to-neon-blue rounded-xl p-3 group-hover:scale-110 transition-transform duration-300">
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


          </motion.div>
        </div>


      </div>
    </section>
  )
}