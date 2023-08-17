/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
    theme: {
        container: {
            padding: {
                DEFAULT: "1rem",
                sm: "2rem",
                lg: "4rem",
                xl: "5rem",
                "2xl": "6rem",
            },
        },
        colors: {
            kabul: {
                50: "#f5f4f1",
                100: "#e7e4da",
                200: "#d1c9b7",
                300: "#b6a98e",
                400: "#a18e6e",
                500: "#927d60",
                600: "#7d6751",
                700: "#655143",
                800: "#55443b",
                900: "#4c3d37",
                950: "#2b201d",
            },
        },
        extend: {},
    },
    plugins: [require("flowbite/plugin")],
};
