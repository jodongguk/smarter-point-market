/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}',
    ],
    theme: {
        extend: {
            colors: {
                'point-market-purple1': '#7800CE',
                'point-market-gray1': '#4F5855',

                smarterMain: '#43425D',
                smarterBodyBg: '#F0F0F7',
            }
        },
    },
    plugins: [],
}

