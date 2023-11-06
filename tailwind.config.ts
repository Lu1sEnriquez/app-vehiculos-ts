
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['Nunito', 'sans'],
        'nunito-sans': ['Nunito Sans', 'sans'],
        'poppins': ['Poppins', 'sans'],
        'pt-sans': ['PT Sans', 'sans'],
        'roboto': ['Roboto', 'sans'],
      },
      colors: {
        blanco: "#f2f2f2",
        AmarilloVerde: "#d9d04e",
        AmarilloCafe: "#d9c873",
        rojoRosa: "#F24444",
        azulOscuro: "#0c3c59",
        AzulOscuro: "#0b3c65",
        azulMarino: "#0a4b73",
        azulNormal: "#026ab1",
        azulTurquesa: "#3caacb",
        azulClaro: "#a0d3f2",
        grisOscuro: "#5a5c5a",
        bluePrimary: "#007BFF",
        orangePendiente: "#FF8A00",
        greenSuccess: "#28A745",
        slatePrimary: "#4B4B4B",
      },
    },
  },
  plugins: [],
}