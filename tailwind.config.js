/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nude: {
          50: '#FFFDF9',
          100: '#FAF6F0',
          200: '#F4DCD6',
          300: '#E8B4B8',
          400: '#D4AF37',
          500: '#C9A227',
          600: '#B8941F',
        },
        rose: {
          50: '#2A2326',
          100: '#1C1617',
          200: '#3A2D30',
          300: '#E8B4B8',
          400: '#D4AF37',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-rose': '0 0 30px -5px rgba(232, 180, 184, 0.5)',
        'glow-rose-lg': '0 8px 40px -8px rgba(232, 180, 184, 0.45)',
        'glow-gold': '0 0 30px -5px rgba(212, 175, 55, 0.4)',
        'glow-gold-lg': '0 8px 40px -8px rgba(212, 175, 55, 0.35)',
        'soft': '0 10px 40px -15px rgba(28, 22, 23, 0.12)',
        'soft-lg': '0 20px 60px -20px rgba(28, 22, 23, 0.18)',
        'card-hover': '0 12px 48px -12px rgba(232, 180, 184, 0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left': 'slideInLeft 0.4s ease-out forwards',
        'toast-in': 'toastIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        toastIn: {
          '0%': { opacity: '0', transform: 'translateY(-20px) scale(0.95)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px -5px rgba(232, 180, 184, 0.3)' },
          '50%': { boxShadow: '0 0 35px -5px rgba(232, 180, 184, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};
