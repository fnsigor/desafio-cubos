import type { Config } from "tailwindcss";
import {
  purple, purpleA,
  purpleDark, purpleDarkA,
  mauve, mauveA,
  mauveDark,
  mauveDarkA
} from '@radix-ui/colors'

function getColorScale(name: any) {
  let scale: any = {};
  for (let i = 1; i <= 12; i++) {
    scale[i] = `var(--${name}-${i})`;
    // next line only needed if using alpha values
    scale[`a${i}`] = `var(--${name}-a${i})`;
  }

  return scale; 
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "var(--mauve-1)",

        "text-primary": "var(--mauve-12)",
        "text-secondary": "var(--mauve-11)",
        "paragraph-primary": "var(--mauve-12)",
        "paragraph-secondary": "var(--mauve-11)",

        "primary-light": "var(--purple-9)",
        "primary-light-hover": "var(--purple-10)",
        "primary-light-active": "var(--purple-8)",
        "primary-light-disabled": "var(--mauve-9)",

        "primary-dark": "var(--purple-a2)",
        "primary-dark-hover": "var(--purple-a10)",
        "primary-dark-active": "var(--purple-a8)",
        "primary-dark-disabled": "var(--mauve-a3)",

        "disabled": "var(--mauve-a3)",

        "mauve-2": "var(--mauve-2)",
        "mauve-6": "var(--mauve-6)",
        "mauve-7": "var(--mauve-7)",
      },
    },
  },
  plugins: [],
};
export default config;
