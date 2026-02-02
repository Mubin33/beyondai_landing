/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@your-org/meeting-scheduler-react/**/*.js",
    "./node_modules/@your-org/meeting-scheduler-react/**/*.ts",
    "./node_modules/@your-org/meeting-scheduler-react/**/*.tsx",
  ], // include your component source
  theme: { extend: {} },
  plugins: [],
};
