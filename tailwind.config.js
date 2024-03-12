/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/*.html"],
    theme: {
        extend: {
            backgroundImage: {
                images: "url('./assets/images.png')",
            },
        },
    },
    plugins: [],
};
