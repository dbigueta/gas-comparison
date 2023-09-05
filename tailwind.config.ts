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
      xs: APP_STYLES.SCREENS.XS,
      sm: APP_STYLES.SCREENS.SM,
      md: APP_STYLES.SCREENS.MD,
      lg: APP_STYLES.SCREENS.LG,
      xl: APP_STYLES.SCREENS.XL,
      xxl: APP_STYLES.SCREENS.XXL,
      height_lg: { 'raw': `(min-height: ${APP_STYLES.SCREENS.LG}) and (min-width: ${APP_STYLES.SCREENS.MD})`}
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
        unique: {
          teal: APP_STYLES.COLORS.UNIQUE.TEAL,
        }
      },
      height: {
        footer: APP_STYLES.HEIGHT.FOOTER,
      },
      minHeight: {
        main: `calc(100vh - ${APP_STYLES.HEIGHT.FOOTER})`,
      },
      maxWidth: {
        'wrapper-xxl': `calc(${APP_STYLES.SCREENS.XXL} - 12.5rem)`,
      },
    },
  },
  plugins: [],
};
export default config;
