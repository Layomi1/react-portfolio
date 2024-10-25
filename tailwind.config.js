/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
  theme: {
    colors: {
      indigo: '#6610f2',
      purple:'#6f42c1',
      pink:'#e83e8c',
      red:'#dc3545',
      orange:'#fd7e14',
      yellow:'#ffc107',
      green:'#28a745',
      teal:'#20c997',
      cyan: '#17a2b8',
      gray: '#6c757d',
      darkray:'#343a40',
      primary:'#007bff',
      secondary:'#6c757d',
      success:'#28a745',
      info: '#17a2b8',
      warning: '#ffc107',
      danger: '#dc3545',
      light: '#f8f9fa',
      dark: '#343a40',
      white: '#fff',
      coral : '#DFBDBE'
    },
    fontFamily: {
      sans: ['ui-sans-serif', 'system-ui'],
      mono: ['ui-monospace', 'SFMono-Regular'],
      body: ['Mulish','sans-serif'],
    },

    extend: {
      screen:{
        sm: '375px',
        md:'768px',
        lg: '1024px',
        xl: '1440px'
      }
    },
  },
  plugins: [],
}

