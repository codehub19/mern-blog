import flowbite from "flowbite-react/tailwind"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    // "node_modules/flowbite-react/**/*.{js,jsx,tz,tsx}",
  ],
  theme: {
    extend: {},
  },
    plugins: [flowbite.plugin()],
}


