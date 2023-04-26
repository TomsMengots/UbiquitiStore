/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        ubiquiti: "0px 12px 48px rgba(0, 0, 0, 0.15);",
      },
      backgroundColor: {
        "ubiquiti-neutral-1": "#F6F6F8",
        "ubiquiti-neutral-2": "#FBFBFB",
      },
      textColor: {
        "ubiquiti-neutral-2": "#838691",
        "ubiquiti-neutral-4": "#BDBDBD",
        "ubiquiti-dark": "#000000a6",
        "ubiquiti-black-45": "#00000073",
        "ubiquiti-black-85": "#000000d9",
      },
      caretColor: {
        "ubiquiti-blue": "#006FFF",
      },
      borderColor: {
        "ubiquiti-neutral-3": "#EDEDF0",
        "ubiquiti-neutral-6": "#B6B9C4",
      },
    },
  },
  plugins: [],
};
