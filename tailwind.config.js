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
        ubiqiti: "0px 12px 48px rgba(0, 0, 0, 0.15);",
      },
      backgroundColor: {
        "ubiqiti-neutral-1": "#F6F6F8",
        "ubiqiti-neutral-2": "#FBFBFB",
      },
      textColor: {
        "ubiqiti-neutral-2": "#838691",
        "ubiqiti-neutral-4": "#BDBDBD",
        "ubiqiti-dark": "#000000a6",
        "ubiqiti-black-45": "#00000073",
        "ubiqiti-black-85": "#000000d9",
      },
      caretColor: {
        "ubiqiti-blue": "#006FFF",
      },
      borderColor: {
        "ubiqiti-neutral-3": "#EDEDF0",
        "ubiqiti-neutral-6": "#B6B9C4",
      },
    },
  },
  plugins: [],
};
