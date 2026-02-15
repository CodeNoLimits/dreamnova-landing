import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F0D060',
          glow: 'rgba(212, 175, 55, 0.4)',
        },
        cyan: {
          DEFAULT: '#00D4FF',
          dim: '#0099BB',
          glow: 'rgba(0, 212, 255, 0.3)',
        },
        sacred: {
          black: '#050508',
          surface: '#0A0A12',
          card: '#0E0E1A',
          border: '#1A1A2E',
        },
        danger: '#FF3366',
        healing: '#00FF88',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Rajdhani', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        shimmer: 'shimmer 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'sacred-grid': `linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'sacred-grid': '60px 60px',
      },
    },
  },
  plugins: [],
};

export default config;
