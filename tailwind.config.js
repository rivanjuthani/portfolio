module.exports = {
    content: [
        './pages/**/*.{html,js,tsx}',
        './components/**/*.{html,js,tsx}'
    ],
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}
