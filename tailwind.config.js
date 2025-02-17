/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
          // // Option 1: Energetic & Modern
          // 'option1-primary': '#FF8C00',
          // 'option1-secondary': '#FFA500',
          // 'option1-accent': '#FFFFFF',
          // 'option1-background': '#F5F5F5',
          // 'option1-text': '#333333',
  
          // // Option 4: Earthy & Natural
          // 'option4-primary': '#E2725B',
          // 'option4-secondary': '#F0F8EA',
          // 'option4-accent': '#588157',
          // 'option4-background': '#FFFFFF',
          // 'option4-text': '#3A5A40',
        },
      },
    },
  plugins: [],
}