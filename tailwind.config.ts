import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',
      xxl: '1600px',
      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
      xlOnly: { min: '1279.98px', max: '1599.98px' },
    },
    extend: {
      // ALL COLORS
      colors: {
        body: '#ffffff', // class="bg-body"
        black: {
          DEFAULT: '#000000', // class="bg-black text-black border-black"
          light: '#202020', // class="bg-black-light text-black-light border-black-light"
          dark: '#010101', // class="bg-black-dark text-black-dark border-black-dark"
          extralight: '#6E6E6E',
          primary: '#1A1A1A',
          secondary: '#474747',
        },
        white: {
          DEFAULT: '#ffffff', // class="bg-white text-white border-white"
          dark: '#fafafa', // class="bg-white-dark text-white-dark border-white-dark"
        },
        purple: {
          DEFAULT: '#5331B2', // hero bg, button main color
          light: '#C2B0F5', // carousel btn
          dark: '#452994', // button hover-focus
          active: '#8160E0', // button active
        },
        accent: '#d74d63', // class="bg-accent text-accent border-accent"
        primary: '#5d4b63',
        secondary: '#a38182',
        warmBg: '#f6e5e4',
        coldBg: '#cecbda',
      },
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2.5rem',
        },
      },
    },
  },
  plugins: [],
};
export default config;
