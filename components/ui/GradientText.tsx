'use client'

import { ReactNode, CSSProperties } from 'react'

type GradientVariant = 'hero' | 'soft' | 'accent' | 'blue' | 'purple' | 'cyan-purple'

interface GradientTextProps {
  children: ReactNode
  variant?: GradientVariant
  angle?: number
  animate?: boolean
  className?: string
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div'
}

const gradientVariants: Record<GradientVariant, string> = {
  hero: 'linear-gradient(135deg, #00d4ff 0%, #0ea5e9 40%, #a855f7 60%, #d946ef 100%)',
  soft: 'linear-gradient(120deg, #00d4ff 0%, #22d3ee 50%, #00d4ff 100%)',
  accent: 'linear-gradient(45deg, #a855f7 0%, #d946ef 50%, #a855f7 100%)',
  blue: 'linear-gradient(135deg, #00d4ff 0%, #0ea5e9 50%, #22d3ee 100%)',
  purple: 'linear-gradient(135deg, #a855f7 0%, #d946ef 50%, #a855f7 100%)',
  'cyan-purple': 'linear-gradient(135deg, #00d4ff 0%, #22d3ee 30%, #a855f7 70%, #d946ef 100%)',
}

export default function GradientText({
  children,
  variant = 'hero',
  angle,
  animate = true,
  className = '',
  as: Component = 'span',
}: GradientTextProps) {
  const baseGradient = gradientVariants[variant]
  const gradient = angle 
    ? baseGradient.replace(/\d+deg/, `${angle}deg`)
    : baseGradient
  
  const gradientStyle: CSSProperties = {
    background: gradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundSize: animate ? '200% 200%' : '100% 100%',
    filter: 'saturate(1.05)',
    display: 'inline-block',
  }

  const animationClass = animate 
    ? variant === 'soft' 
      ? 'animate-gradient-shift-slow'
      : 'animate-gradient-shift'
    : ''

  return (
    <Component
      style={gradientStyle}
      className={`${className} ${animationClass}`}
    >
      {children}
    </Component>
  )
}

