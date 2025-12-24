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
        animation: {
          'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'gradient-shift': 'gradientShift 8s ease-in-out infinite',
        },
        keyframes: {
          gradientShift: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
        },
      },
    },
    plugins: [],
  }

