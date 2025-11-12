/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'dobi-blue': '#00d4ff',
          'dobi-purple': '#a855f7',
          'dobi-magenta': '#d946ef',
          'dobi-dark': '#000000',
          'dobi-navy': '#0a0a0f',
          'dobi-gray': '#1a1a2e',
          'neon-blue': '#00d4ff',
          'neon-purple': '#a855f7',
          'neon-cyan': '#22d3ee',
          'electric-blue': '#0ea5e9',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        fontSize: {
          '7xl': '4.5rem',
          '8xl': '6rem',
          '9xl': '8rem',
        },
        borderRadius: {
          '2xl': '1rem',
          '3xl': '1.5rem',
          '4xl': '2rem',
        },
        boxShadow: {
          'glow-blue': '0 0 20px rgba(0, 212, 255, 0.3)',
          'glow-purple': '0 0 20px rgba(168, 85, 247, 0.3)',
          'glow-strong-blue': '0 0 40px rgba(0, 212, 255, 0.6)',
          'glow-strong-purple': '0 0 40px rgba(168, 85, 247, 0.6)',
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'gradient': 'gradient 15s ease infinite',
          'gradient-shift': 'gradientShift 8s ease-in-out infinite',
          'gradient-shift-slow': 'gradientShift 12s ease-in-out infinite',
          'slide-up': 'slideUp 0.8s ease-out',
          'fade-in': 'fadeIn 0.6s ease-out',
          'first': 'moveVertical 30s ease infinite',
          'second': 'moveInCircle 20s reverse infinite',
          'third': 'moveInCircle 40s linear infinite',
          'fourth': 'moveHorizontal 40s ease infinite',
          'fifth': 'moveInCircle 20s ease infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          glow: {
            '0%': { boxShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff' },
            '100%': { boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        moveHorizontal: {
          '0%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
          '50%': {
            transform: 'translateX(50%) translateY(10%)',
          },
          '100%': {
            transform: 'translateX(-50%) translateY(-10%)',
          },
        },
        moveInCircle: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '50%': {
            transform: 'rotate(180deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        moveVertical: {
          '0%': {
            transform: 'translateY(-50%)',
          },
          '50%': {
            transform: 'translateY(50%)',
          },
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #00d4ff 0%, #0ea5e9 40%, #a855f7 60%, #d946ef 100%)',
        'gradient-soft': 'linear-gradient(120deg, #00d4ff 0%, #22d3ee 50%, #00d4ff 100%)',
        'gradient-accent': 'linear-gradient(45deg, #a855f7 0%, #d946ef 50%, #a855f7 100%)',
        'gradient-blue': 'linear-gradient(135deg, #00d4ff 0%, #0ea5e9 50%, #22d3ee 100%)',
        'gradient-purple': 'linear-gradient(135deg, #a855f7 0%, #d946ef 50%, #a855f7 100%)',
        'gradient-cyan-purple': 'linear-gradient(135deg, #00d4ff 0%, #22d3ee 30%, #a855f7 70%, #d946ef 100%)',
      },
    },
  },
  plugins: [],
}