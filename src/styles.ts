const APP_STYLES = {
  BOX_SHADOW: {
    SM: '0px 1px 2px rgba(0, 0, 0, 0.05)',
    DEFAULT: '0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06)',
    MD: '0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.06)',
    LG: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -2px rgba(0, 0, 0, 0.05)',
    XL: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)',
    WRAP: '0px 4px 4px 1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.06), 0px 0px 4px -1px rgba(0, 0, 0, 0.12)',
    NONE: 'none',
  },
  SCREENS: {
    XS: '20em', // 320px
    SM: '30em', // 480px
    MD: '48em', // 768px
    LG: '62em', // 992px
    XL: '75em', // 1200px
    XXL: '90em', // 1440px
    },
  FONT_FAMILY: {
    PRIMARY: 'var(--font-primary)',
    SECONDARY: 'var(--font-secondary)',
  },
  BORDER_WIDTH: {
    0.5: '0.5px',
  },
  COLORS: {
    STANDARD: {
      BLACK: 'rgba(0,0,0,1)', // #000000
      WHITE: 'rgba(255,255,255,1)', // #FFFFFF
    },
    PRIMARY: {
      400: 'rgba(34,124,157,1)', // #227C9D
    },
    SECONDARY: {
      400: 'rgba(255,203,119,1)', // #FFCB77
    },
    NEUTRAL: {
      100: 'rgba(254,249,239,1)', // #FEF9EF
      400: 'rgba(28,29,33,1)', // #1C1D21
      500: 'rgba(14,19,31,1)', // #0E131F
    },
    ERROR: {
      400: 'rgba(231,128,135,1)', // #E78087
    },
    SUCCESS: {
      400: 'rgba(109,209,125,1)', // #6DD17D
    },
    UNIQUE: {
      TEAL: 'rgba(23,195,178,1)', // #17C3B2
    },
  },
  HEIGHT: {
    FOOTER: '4rem', // 64px
  },
};

module.exports = {
  APP_STYLES,
};
