/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
        colors: {
            // Ganti hex code ini dengan warna persis dari Figma
            primary: {
            DEFAULT: '#FF74A6', // Warna pink utama
            hover: '#E66895',   // Warna pink yang sedikit lebih gelap untuk efek hover tombol
            },
        },
        },
    },
    plugins: [],
}