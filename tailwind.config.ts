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
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'bg': 'var(--mauve-1)',
  			'text-primary': 'var(--mauve-12)',
  			'text-secondary': 'var(--mauve-11)',
  			'paragraph-primary': 'var(--mauve-12)',
  			'paragraph-secondary': 'var(--mauve-11)',
  			'primary-light': 'var(--purple-9)',
  			'primary-light-hover': 'var(--purple-10)',
  			'primary-light-active': 'var(--purple-8)',
  			'primary-light-disabled': 'var(--mauve-9)',
  			'primary-dark': 'var(--purple-a2)',
  			'primary-dark-hover': 'var(--purple-a10)',
  			'primary-dark-active': 'var(--purple-a8)',
  			'primary-dark-disabled': 'var(--mauve-a3)',
  			'disabled': 'var(--mauve-a3)',
  			'mauve-2': 'var(--mauve-2)',
  			'mauve-3': 'var(--mauve-3)',
  			'mauve-6': 'var(--mauve-6)',
  			'mauve-7': 'var(--mauve-7)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
