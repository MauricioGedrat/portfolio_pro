// https://github.com/kentcdodds/kentcdodds.com

// const path = require('path')
// const fromRoot = (p) => path.join(__dirname, p)

// const colors = require('tailwindcss/colors')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    mode: process.env.NODE_ENV ? 'jit' : undefined,
    content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        fontFamily: {
            // ...defaultTheme.fontFamily,
            poppins: ['Poppins'],
            kdam: ['Kdam Thmor Pro'],
            // mono: ['Menlo,Monaco', ...defaultTheme.fontFamily.mono],
            // display: [
            //     'Gilroy,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica Neue,Arial,sans-serif',
            // ],
        },

        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        // require('@tailwindcss/line-clamp'),
        // line clamp: >  https://www.youtube.com/watch?v=klh-jMTm5PU&ab_channel=TailwindLabs
        // require('@tailwindcss/line-clamp'),
        // require('@tailwindcss/typography'),
    ],
}
