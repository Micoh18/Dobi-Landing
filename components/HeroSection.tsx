'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import GradientText from '@/components/ui/GradientText'

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 md:pt-40">
      {/* Hero Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 leading-[1.1] tracking-tight"
          >
            <GradientText variant="hero" as="span" className="text-glow">DOBI</GradientText>
            <span className="text-white">: Onchain AI Agent for IoT and </span>
            <GradientText variant="hero" as="span" className="text-glow">DePIN</GradientText>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed font-normal"
          >
            Verifies device data and distributes RWA payouts onchain
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 lg:mb-20"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group btn-primary flex items-center gap-3 text-lg md:text-xl font-bold px-8 md:px-12 py-4 md:py-5 cursor-default"
            >
              <span className="relative z-10 flex items-center gap-3">
                x402 App (Coming Soon)
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.div>

            <motion.a
              href="https://app.uniswap.org/explore/tokens/base/0x931ef8053e997b1bab68d1e900a061305c0ff4fb?inputCurrency=0x931ef8053e997b1bab68d1e900a061305c0ff4fb"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group btn-secondary flex items-center gap-3 text-lg md:text-xl font-bold px-8 md:px-12 py-4 md:py-5"
            >
              <span className="relative z-10 flex items-center gap-3">
                Buy $DOBI
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Device Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="relative mt-8 lg:mt-12 flex justify-center items-center"
        >
          <div className="device-glow">
            {/* Device Container - Vertical/Standing */}
            <div className="relative" style={{
              width: '220px',
              height: '370px',
              margin: '0 auto',
            }}>
              {/* Base - Bottom rectangle */}
              <div 
                className="absolute"
                style={{
                  width: '280px',
                  height: '50px',
                  bottom: '0px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(to bottom, rgba(0, 212, 255, 0.35), rgba(0, 212, 255, 0.15))',
                  border: '2px solid rgba(0, 212, 255, 0.7)',
                  borderRadius: '6px',
                  boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)',
                }}
              />
              
              {/* Main Body - Front face */}
              <div 
                className="absolute"
                style={{
                  width: '220px',
                  height: '320px',
                  bottom: '25px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(to bottom, rgba(0, 212, 255, 0.2), rgba(0, 212, 255, 0.05))',
                  border: '2px solid rgba(0, 212, 255, 0.7)',
                  borderRadius: '10px',
                  boxShadow: '0 0 50px rgba(0, 212, 255, 0.6)',
                }}
              >
                {/* Circular Icon - Folder/Data Chip */}
                <div 
                  className="absolute"
                  style={{
                    width: '90px',
                    height: '90px',
                    top: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderRadius: '50%',
                    border: '3px solid rgba(0, 212, 255, 0.9)',
                    background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15), rgba(0, 0, 0, 0.8))',
                    boxShadow: 'inset 0 0 25px rgba(0, 212, 255, 0.4), 0 0 30px rgba(0, 212, 255, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {/* Folder/Data Chip Icon */}
                  <div style={{
                    width: '50px',
                    height: '50px',
                    position: 'relative',
                  }}>
                    {/* Folder shape */}
                    <div style={{
                      width: '100%',
                      height: '70%',
                      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.6), rgba(0, 212, 255, 0.3))',
                      border: '2px solid rgba(0, 212, 255, 0.9)',
                      borderRadius: '4px 4px 0 0',
                      position: 'relative',
                      boxShadow: '0 0 15px rgba(0, 212, 255, 0.5)',
                    }}>
                      {/* Folder tab */}
                      <div style={{
                        position: 'absolute',
                        top: '-8px',
                        left: '8px',
                        width: '20px',
                        height: '8px',
                        background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.8), rgba(0, 212, 255, 0.5))',
                        border: '2px solid rgba(0, 212, 255, 0.9)',
                        borderRadius: '2px 2px 0 0',
                        boxShadow: '0 0 10px rgba(0, 212, 255, 0.4)',
                      }}></div>
                    </div>
                    {/* Bottom part */}
                    <div style={{
                      width: '100%',
                      height: '30%',
                      background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.4), rgba(0, 212, 255, 0.2))',
                      border: '2px solid rgba(0, 212, 255, 0.9)',
                      borderTop: 'none',
                      borderRadius: '0 0 4px 4px',
                      boxShadow: '0 0 10px rgba(0, 212, 255, 0.3)',
                    }}></div>
                  </div>
                </div>
                
                {/* READY Text - More prominent */}
                <div 
                  className="absolute text-center"
                  style={{
                    top: '150px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                  }}
                >
                  <div 
                    className="text-dobi-blue font-bold mb-1" 
                    style={{ 
                      fontSize: '18px',
                      textShadow: '0 0 15px rgba(0, 212, 255, 0.8), 0 0 25px rgba(0, 212, 255, 0.5)',
                      letterSpacing: '1px',
                    }}
                  >
                    READY
                  </div>
                  <div 
                    className="text-dobi-blue/70" 
                    style={{ 
                      fontSize: '12px',
                      textShadow: '0 0 10px rgba(0, 212, 255, 0.6)',
                      letterSpacing: '0.5px',
                    }}
                  >
                    STATUS
                  </div>
                </div>
                
                {/* Side Panels/Ports - More visible */}
                <div 
                  className="absolute"
                  style={{
                    width: '32px',
                    height: '56px',
                    top: '70px',
                    left: '12px',
                    border: '2px solid rgba(0, 212, 255, 0.5)',
                    borderRadius: '4px',
                    background: 'rgba(0, 212, 255, 0.15)',
                    boxShadow: 'inset 0 0 10px rgba(0, 212, 255, 0.2)',
                  }}
                />
                <div 
                  className="absolute"
                  style={{
                    width: '32px',
                    height: '56px',
                    top: '70px',
                    right: '12px',
                    border: '2px solid rgba(0, 212, 255, 0.5)',
                    borderRadius: '4px',
                    background: 'rgba(0, 212, 255, 0.15)',
                    boxShadow: 'inset 0 0 10px rgba(0, 212, 255, 0.2)',
                  }}
                />
                <div 
                  className="absolute"
                  style={{
                    width: '70px',
                    height: '20px',
                    bottom: '40px',
                    left: '20px',
                    border: '2px solid rgba(0, 212, 255, 0.5)',
                    borderRadius: '4px',
                    background: 'rgba(0, 212, 255, 0.15)',
                    boxShadow: 'inset 0 0 10px rgba(0, 212, 255, 0.2)',
                  }}
                />
                <div 
                  className="absolute"
                  style={{
                    width: '70px',
                    height: '20px',
                    bottom: '40px',
                    right: '20px',
                    border: '2px solid rgba(0, 212, 255, 0.5)',
                    borderRadius: '4px',
                    background: 'rgba(0, 212, 255, 0.15)',
                    boxShadow: 'inset 0 0 10px rgba(0, 212, 255, 0.2)',
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

