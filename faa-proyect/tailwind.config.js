module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                // Paleta “Contemporánea Contrastada” refinada
                purpleDark: '#756A90',      // fondo header/footer
                purpleLight: '#C1B1D3',     // secciones de contenido
                turquoise: '#43BFB3',       // acento en CTAs y hover
                neutralBg: '#E1E1E1',       // fondo neutro para cards
                textWhite: '#F2F2F2',       // texto principal sobre fondos oscuros
            },
        },
    },
    plugins: [],
};