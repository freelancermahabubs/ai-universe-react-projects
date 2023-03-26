/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#75e25d",
        
"secondary": "#92e87f",
        
"accent": "#04d82e",
        
"neutral": "#1E2125",
        
"base-100": "#FCFCFD",
        
"info": "#4BBED8",
        
"success": "#43EAD4",
        
"warning": "#E8BD21",
        
"error": "#E54334",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
