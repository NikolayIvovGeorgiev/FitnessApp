/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Option 1: Energetic & Modern
        "theme-primary": "#FF8C00",
        "theme-secondary": "#FFA500",
        "theme-accent": "#FFFFFF",
        "theme-background": "#F5F5F5",
        "theme-text": "#333333",
        "theme-white": "#FFFFFF",
        "theme-black": "#000000",
        "theme-gray": "#808080",

        // Option 4: Earthy & Natural
        "option4-primary": "#E2725B",
        "option4-secondary": "#F0F8EA",
        "option4-accent": "#588157",
        "option4-background": "#FFFFFF",
        "option4-text": "#3A5A40",
      },
    },
  },
  plugins: [],
};
