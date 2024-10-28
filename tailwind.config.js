/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    backgroundImage: {
      footerImage: "url('./assets/layomi.jpg')",
    },
    borderRadius: {
      md: "8px",
      full: "9999px",
      xl: "60% 40% 50% 70% / 60% 50% 70% 40%",
    },
    colors: {
      indigo: "#6610f2",
      purple: "#6f42c1",
      pink: "#e83e8c",
      red: "#dc3545",
      orange: "#fd7e14",
      yellow: "#ffc107",
      green: "#28a745",
      teal: "#20c997",
      cyan: "#17a2b8",
      gray: "#6c757d",
      darkray: "#343a40",
      primary: "#007bff",
      secondary: "#6c757d",
      success: "#28a745",
      info: "#17a2b8",
      warning: "#ffc107",
      danger: "#dc3545",
      light: "#f8f9fa",
      dark: "#343a40",
      white: "#fff",
      coral: "#DFBDBE",
      mushroom: "#ffffe0",
      shadow: "0 .5rem 1rem #00000026",
      box:' 0 0 1px 1px #0000001a',
      border: 'rgba(255, 255, 255, .4)'
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      mono: ["ui-monospace", "SFMono-Regular"],
      body: ["Mulish", "sans-serif"],
    },

    extend: {
      screen: {
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      
      animate:{
        'pulse': 'pulse 2s linear infinite',
        
       'spin-reverse':'spin 3s linear infinite reverse'
      }
    },
  },
  plugins: [],
};
