/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/flowbite/**/*.js',
    ],
    theme: {
        extend: {
            blur: {
                xs: '2px',
            }
        },
        fontFamily: {
            'sans': ['Barlow', 'sans-serif'],
        }
    },
    plugins: [
        require('flowbite/plugin'),
    ],
    safelist: [
        'bg-green-200', 'text-green-800', 'bg-red-200', 'text-red-800',
		'ring-red-400', 'ring-green-400', 'text-green-500', 'text-red-500',
		'bg-red-400', 'bg-green-400'
    ],
}
