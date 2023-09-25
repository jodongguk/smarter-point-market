
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const pointMarketTheme: CustomThemeConfig = {
    name: 'point-market-theme',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `system-ui`,
        "--theme-font-family-heading": `system-ui`,
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "9999px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "1px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "255 255 255",
        "--on-secondary": "255 255 255",
        "--on-tertiary": "0 0 0",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "255 255 255",
        "--on-surface": "255 255 255",
        // =~= Theme Colors  =~=
        // primary | #7800CE
        "--color-primary-50": "235 217 248", // #ebd9f8
        "--color-primary-100": "228 204 245", // #e4ccf5
        "--color-primary-200": "221 191 243", // #ddbff3
        "--color-primary-300": "201 153 235", // #c999eb
        "--color-primary-400": "161 77 221", // #a14ddd
        "--color-primary-500": "120 0 206", // #7800CE
        "--color-primary-600": "108 0 185", // #6c00b9
        "--color-primary-700": "90 0 155", // #5a009b
        "--color-primary-800": "72 0 124", // #48007c
        "--color-primary-900": "59 0 101", // #3b0065
        // secondary | #A83DFF
        "--color-secondary-50": "242 226 255", // #f2e2ff
        "--color-secondary-100": "238 216 255", // #eed8ff
        "--color-secondary-200": "233 207 255", // #e9cfff
        "--color-secondary-300": "220 177 255", // #dcb1ff
        "--color-secondary-400": "194 119 255", // #c277ff
        "--color-secondary-500": "168 61 255", // #A83DFF
        "--color-secondary-600": "151 55 230", // #9737e6
        "--color-secondary-700": "126 46 191", // #7e2ebf
        "--color-secondary-800": "101 37 153", // #652599
        "--color-secondary-900": "82 30 125", // #521e7d
        // tertiary | #0EA5E9
        "--color-tertiary-50": "219 242 252", // #dbf2fc
        "--color-tertiary-100": "207 237 251", // #cfedfb
        "--color-tertiary-200": "195 233 250", // #c3e9fa
        "--color-tertiary-300": "159 219 246", // #9fdbf6
        "--color-tertiary-400": "86 192 240", // #56c0f0
        "--color-tertiary-500": "14 165 233", // #0EA5E9
        "--color-tertiary-600": "13 149 210", // #0d95d2
        "--color-tertiary-700": "11 124 175", // #0b7caf
        "--color-tertiary-800": "8 99 140", // #08638c
        "--color-tertiary-900": "7 81 114", // #075172
        // success | #84cc16
        "--color-success-50": "237 247 220", // #edf7dc
        "--color-success-100": "230 245 208", // #e6f5d0
        "--color-success-200": "224 242 197", // #e0f2c5
        "--color-success-300": "206 235 162", // #ceeba2
        "--color-success-400": "169 219 92", // #a9db5c
        "--color-success-500": "132 204 22", // #84cc16
        "--color-success-600": "119 184 20", // #77b814
        "--color-success-700": "99 153 17", // #639911
        "--color-success-800": "79 122 13", // #4f7a0d
        "--color-success-900": "65 100 11", // #41640b
        // warning | #EAB308
        "--color-warning-50": "252 244 218", // #fcf4da
        "--color-warning-100": "251 240 206", // #fbf0ce
        "--color-warning-200": "250 236 193", // #faecc1
        "--color-warning-300": "247 225 156", // #f7e19c
        "--color-warning-400": "240 202 82", // #f0ca52
        "--color-warning-500": "234 179 8", // #EAB308
        "--color-warning-600": "211 161 7", // #d3a107
        "--color-warning-700": "176 134 6", // #b08606
        "--color-warning-800": "140 107 5", // #8c6b05
        "--color-warning-900": "115 88 4", // #735804
        // error | #D41976
        "--color-error-50": "249 221 234", // #f9ddea
        "--color-error-100": "246 209 228", // #f6d1e4
        "--color-error-200": "244 198 221", // #f4c6dd
        "--color-error-300": "238 163 200", // #eea3c8
        "--color-error-400": "225 94 159", // #e15e9f
        "--color-error-500": "212 25 118", // #D41976
        "--color-error-600": "191 23 106", // #bf176a
        "--color-error-700": "159 19 89", // #9f1359
        "--color-error-800": "127 15 71", // #7f0f47
        "--color-error-900": "104 12 58", // #680c3a
        // surface | #ffffff
        "--color-surface-50": "255 255 255", // #ffffff
        "--color-surface-100": "255 255 255", // #ffffff
        "--color-surface-200": "255 255 255", // #ffffff
        "--color-surface-300": "255 255 255", // #ffffff
        "--color-surface-400": "255 255 255", // #ffffff
        "--color-surface-500": "255 255 255", // #ffffff
        "--color-surface-600": "230 230 230", // #e6e6e6
        "--color-surface-700": "191 191 191", // #bfbfbf
        "--color-surface-800": "153 153 153", // #999999
        "--color-surface-900": "125 125 125", // #7d7d7d
    }
}