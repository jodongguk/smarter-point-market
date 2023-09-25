import { join } from 'path';
import type { Config } from 'tailwindcss'
import { skeleton } from '@skeletonlabs/tw-plugin';
import {pointMarketTheme} from "./point-market-theme";


/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{html,js,svelte,ts}',
        join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
    ],
    safelist: [
        {pattern: /(to|from)-point-market-gradient(1|2|3|4|5|6)-(to|from)/,},
    ],
    theme: {
        extend: {
            colors: {
                'point-market-purple1': '#7800CE',
                'point-market-purple2': '#A83DFF',
                'point-market-gray1': '#4F5855',

                'point-market-gradient1': {from: '#FFC94A', to: '#FFAC00',},
                'point-market-gradient2': {from: '#56C75E', to: '#00AC6C',},
                'point-market-gradient3': {from: '#B384F8', to: '#AC51EA',},
                'point-market-gradient4': {from: '#FFA36A', to: '#FF794A',},
                'point-market-gradient5': {from: '#8EBAFB', to: '#5D88E7',},
                'point-market-gradient6': {from: '#FE899C', to: '#FE555C',},

                smarterMain: '#43425D',
                smarterBodyBg: '#F0F0F7',
            }
        },
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        skeleton({
            themes: {
                custom: [
                    pointMarketTheme
                ]
            }
        })
    ],
} satisfies Config

