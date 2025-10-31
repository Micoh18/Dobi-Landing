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
          'slide-up': 'slideUp 0.8s ease-out',
          'fade-in': 'fadeIn 0.6s ease-out',
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
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}