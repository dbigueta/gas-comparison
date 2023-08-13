import type { Config } from 'tailwindcss';
const defaultTheme = require('tailwindcss/defaultTheme');
const { APP_STYLES } = require('./src/styles');

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    boxShadow: {
      sm: APP_STYLES.BOX_SHADOW.SM,
      DEFAULT: APP_STYLES.BOX_SHADOW.DEFAULT,
      md: APP_STYLES.BOX_SHADOW.MD,
      lg: APP_STYLES.BOX_SHADOW.LG,
      xl: APP_STYLES.BOX_SHADOW.XL,
      wrap: APP_STYLES.BOX_SHADOW.WRAP,
      none: APP_STYLES.BOX_SHADOW.NONE,
    },
    screens: {
      xs: '20em', // 320px
      sm: '30em', // 480px
      md: '48em', // 768px
      lg: '62em', // 992px
      xl: '75em', // 1200px
      xxl: '90em', // 1440px
    },
    fontSize: {
      'desktop-xl': '4rem', // 64px
      'desktop-lg': '3rem', // 48px
      'desktop-md': '2rem', // 32px
      'desktop-sm': '1.5rem', // 24px
      'desktop-xs': '1.25rem', // 20px
      'mobile-xl': '2.5rem', // 40px
      'mobile-lg': '2.25rem', // 36px
      'mobile-md': '1.75rem', // 28px
      'mobile-sm': '1.25rem', // 20px
      'mobile-xs': '1rem', // 16px
    },
    extend: {
      fontFamily: {
        primary: [APP_STYLES.FONT_FAMILY.PRIMARY, APP_STYLES.FONT_FAMILY.SECONDARY, ...defaultTheme.fontFamily.sans],
        secondary: [APP_STYLES.FONT_FAMILY.SECONDARY, ...defaultTheme.fontFamily.sans],
      },
      borderWidth: {
        0.5: APP_STYLES.BORDER_WIDTH[0.5],
      },
      colors: {
        primary: {
          400: APP_STYLES.COLORS.PRIMARY[400],
        },
        secondary: {
          400: APP_STYLES.COLORS.SECONDARY[400],
        },
        neutral: {
          100: APP_STYLES.COLORS.NEUTRAL[100],
          400: APP_STYLES.COLORS.NEUTRAL[400],
          500: APP_STYLES.COLORS.NEUTRAL[500],
        },
        error: {
          400: APP_STYLES.COLORS.ERROR[400],
        },
        success: {
          400: APP_STYLES.COLORS.SUCCESS[400],
        },
      },
    },
  },
  plugins: [],
};
export default config;
