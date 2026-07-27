/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F172A',
          soft: '#334155',
          mute: '#64748B',
        },
        paper: {
          DEFAULT: '#F7F4EE',
          elev: '#FFFFFF',
          line: '#E7E2D8',
        },
        signal: {
          DEFAULT: '#0F766E',
          bright: '#14B8A6',
          deep: '#115E59',
        },
        ember: {
          DEFAULT: '#C2410C',
          soft: '#FB923C',
        },
      },
      fontFamily: {
        display: ['"Syne"', 'system-ui', 'sans-serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        lift: '0 18px 40px -24px rgba(15, 23, 42, 0.35)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(ellipse 80% 50% at 20% 10%, rgba(20,184,166,0.18), transparent), radial-gradient(ellipse 60% 40% at 90% 20%, rgba(194,65,12,0.10), transparent), linear-gradient(180deg, #F7F4EE 0%, #EEF2F0 100%)',
      },
    },
  },
  plugins: [],
};
