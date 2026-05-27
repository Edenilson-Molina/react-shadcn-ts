/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
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
  				foreground: 'hsl(var(--primary-foreground))',
				50: 'var(--color-primary-50)',
				100: 'var(--color-primary-100)',
				200: 'var(--color-primary-200)',
				300: 'var(--color-primary-300)',
				400: 'var(--color-primary-400)',
				500: 'var(--color-primary-500)',
				600: 'var(--color-primary-600)',
				700: 'var(--color-primary-700)',
				800: 'var(--color-primary-800)',
				900: 'var(--color-primary-900)',
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))',
				50: 'var(--color-secondary-50)',
				100: 'var(--color-secondary-100)',
				200: 'var(--color-secondary-200)',
				300: 'var(--color-secondary-300)',
				400: 'var(--color-secondary-400)',
				500: 'var(--color-secondary-500)',
				600: 'var(--color-secondary-600)',
				700: 'var(--color-secondary-700)',
				800: 'var(--color-secondary-800)',
				900: 'var(--color-secondary-900)',
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
  				foreground: 'hsl(var(--destructive-foreground))',
				50: 'var(--color-destructive-50)',
				100: 'var(--color-destructive-100)',
				200: 'var(--color-destructive-200)',
				300: 'var(--color-destructive-300)',
				400: 'var(--color-destructive-400)',
				500: 'var(--color-destructive-500)',
				600: 'var(--color-destructive-600)',
				700: 'var(--color-destructive-700)',
				800: 'var(--color-destructive-800)',
				900: 'var(--color-destructive-900)',
  			},
			warning: {
				DEFAULT: 'hsl(var(--warning))',
				foreground: 'hsl(var(--warning-foreground))',
				50: 'var(--color-warning-50)',
				100: 'var(--color-warning-100)',
				200: 'var(--color-warning-200)',
				300: 'var(--color-warning-300)',
				400: 'var(--color-warning-400)',
				500: 'var(--color-warning-500)',
				600: 'var(--color-warning-600)',
				700: 'var(--color-warning-700)',
				800: 'var(--color-warning-800)',
				900: 'var(--color-warning-900)',
			},
			info: {
				DEFAULT: 'hsl(var(--info))',
				foreground: 'hsl(var(--info-foreground))'
			},
			success: {
				DEFAULT: 'hsl(var(--success))',
				foreground: 'hsl(var(--success-foreground))',
				50: 'var(--color-success-50)',
				100: 'var(--color-success-100)',
				200: 'var(--color-success-200)',
				300: 'var(--color-success-300)',
				400: 'var(--color-success-400)',
				500: 'var(--color-success-500)',
				600: 'var(--color-success-600)',
				700: 'var(--color-success-700)',
				800: 'var(--color-success-800)',
				900: 'var(--color-success-900)',
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
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
			colorText: {
				DEFAULT: 'var(--color-text-900)',
			}
  		},
		fontFamily: {
			sans: ['Nunito', 'sans-serif']
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

