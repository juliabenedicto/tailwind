const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.html', './src/**/*.js'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            titles: ['Boogaloo'],
            body: ['Lato']
        },
        colors: {
            primary: '#388e3c',
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.coolGray,
            red: colors.red,
            yellow: colors.amber,
            green: colors.emerald,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,

        },
    },

    extend: {

    },

    variants: {
        extend: {},
    },
    plugins: [],
}
