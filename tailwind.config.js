/** @type {import('tailwindcss').Config} */
export default {
    content: ["views/*.ejs"],
    theme: {
        extend: {
            animation: ['motion-safe'],
            screens: {
                'xs': { 'max': '639px' }
            }
        },
    },
    plugins: [],
}

