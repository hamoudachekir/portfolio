/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        code: {
          bg: '#0A0E14',
          panel: '#111827',
          line: '#1F2937',
          fg: '#E5E7EB',
          mute: '#9CA3AF',
          dim: '#6B7280',
        },
        sky: {
          DEFAULT: '#38BDF8',
          dim: '#0EA5E9',
        },
        mint: {
          DEFAULT: '#2DD4BF',
          dim: '#14B8A6',
        },
        amber: {
          DEFAULT: '#FBBF24',
          dim: '#F59E0B',
        },
        ink: {
          DEFAULT: '#E5E7EB',
          soft: '#D1D5DB',
          mute: '#9CA3AF',
        },
        paper: {
          DEFAULT: '#0A0E14',
          elev: '#111827',
          line: '#1F2937',
        },
        signal: {
          DEFAULT: '#2DD4BF',
          bright: '#5EEAD4',
          deep: '#14B8A6',
        },
        ember: {
          DEFAULT: '#F87171',
          soft: '#FCA5A5',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        lift: '0 24px 48px -28px rgba(0, 0, 0, 0.65)',
        glow: '0 0 0 1px rgba(56,189,248,0.25), 0 0 40px -12px rgba(45,212,191,0.35)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(ellipse 70% 50% at 15% 0%, rgba(56,189,248,0.12), transparent), radial-gradient(ellipse 50% 40% at 90% 10%, rgba(45,212,191,0.10), transparent), linear-gradient(180deg, #0A0E14 0%, #0D1219 100%)',
      },
    },
  },
  plugins: [],
};
