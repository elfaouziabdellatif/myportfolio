/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      rotate: {
        '48': '48deg',
      },
    
    animation: {
      typewriter: 'typewriter 0.8s steps(21) forwards',
      caret: 'typewriter 2s steps(21) forwards, blink 1s steps(21) infinite 1s',
      slideLeftReactIcon: 'slideLeftReactIcon 2s ease-in-out forwards',
      slideRightReactIcon: 'slideRightReactIcon 2s ease-in-out forwards',
      slideRightDownReactIcon: 'slideRightDownReactIcon 2s ease-in-out forwards',
      slideLeftDownReactIcon: 'slideLeftDownReactIcon 2s ease-in-out forwards',
    },
    keyframes: {
      typewriter: {
        to: {
          left: '100%',
        },
      },
      slideLeftReactIcon: {
        '0%': { top: '35rem', left: '35rem',opacity:-0.2 ,transform:'rotate(-1900deg)'},
        '50%': { transform:'rotate(-1480deg)'},
        '100%': { top: '3rem', left: '-0.2rem',opacity:1 ,transform:'rotate(68deg)'},
      },
      slideRightReactIcon: {
        '0%': { top: '35rem', right: '35rem',opacity:-0.5 ,transform:'rotate(-1900deg)'},
        '50%': { transform:'rotate(-1480deg)'},
        '100%': { top: '3rem', right: '-1.2rem',opacity:1 ,transform:'rotate(30deg)'},
      },
      slideRightDownReactIcon: {
        '0%': { bottom: '35rem', right: '39rem',opacity:-0.5 ,transform:'rotate(-1900deg)'},
        '50%': { transform:'rotate(-1480deg)'},
        '100%': { bottom: '3rem', right: '-1.4rem',opacity:1 ,transform:'rotate(20deg)'},
      },
      slideLeftDownReactIcon: {
        '0%': { bottom: '35rem', left: '35rem',opacity:-0.5 ,transform:'rotate(-1900deg)'},
        '50%': { transform:'rotate(-1480deg)'},
        '100%': { bottom: '3rem', left: '-0.5rem',opacity:1 ,transform:'rotate(-20deg)'},
      },

      blink: {
        '0%': {
          opacity: '0',
        },
        '0.1%': {
          opacity: '1',
          
        },
        '50%': {
          opacity: '1',
        },
        '50.1%': {
          opacity: '0',
        },
        '100%': {
          opacity: '1',
          
        },
        
      },
    },
  }},
  plugins: [],
}