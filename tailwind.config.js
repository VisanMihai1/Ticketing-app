/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors - Adaptate pentru Tema Întunecată
        nav: "#1F212E",          // Un albastru-gri închis, mai profund decât pagina
        page: "#16161F",         // Fundalul principal, foarte închis, similar cu un gri-cărbune sau un negru soft
        card: "#2A2C3A",         // Cardurile vor fi puțin mai deschise decât fundalul paginii
        "card-hover": "#353746", // O nuanță și mai deschisă pentru hover pe carduri
        "default-text": "#EAEAFB", // Textul principal, un alb-gri deschis pentru contrast bun pe fundal închis
        "text-light": "#D4D9F0",   // Text secundar sau mai puțin important, un lavandă-gri deschis

        // Status colors - Păstrăm culorile originale, deoarece sunt deschise și vor contrasta bine pe fundal închis
        // Acestea vor servi ca accente luminoase pe tema întunecată.
        status: {
          "not-started": "#E6C0E0", // Dusty pink (original)
          "started": "#A8D8D4",     // Calm teal (original)
          "done": "#A8B9F7"         // Clean light blue (original)
        },

        // Accent colors - Păstrăm culorile originale, deoarece sunt vibrante și potrivite pentru tema întunecată
        // Acestea sunt deja culori din paleta L'Oréal pe care le-am discutat și se potrivesc bine.
        accent: {
          primary: "#6C8BE0",    // Sophisticated medium blue (L'Oréal)
          secondary: "#8E7DE3",  // Dusty purple (L'Oréal)
          hover: "#9D5CE6"       // Interactive elements / Vibrant purple (L'Oréal)
        }
      }
    },
  },
  plugins: [],
};