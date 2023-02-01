export const theme = {
  heights: {
    header: "5rem",
    footer: "2rem",
  },

  colors: {
    primary: "#cfbbcb",
    primaryLight: "#e5dfe4",
    primaryDark: "#ae8ca7",
    primaryDarker: "#99658f",

    secondary: "#dae9d2",

    tertiary: "#fffde6",

    background: "#fff",
    backgroundDark: "#faf8fa",
    backgroundDarker: "#f1ebef",

    text: "#151314",

    grey: "#3e383d",

    error: "#DB0B30",
    errorDark: "#B00020",

    success: "#604379",
  },

  spacing: {
    quarter: "0.25rem",
    half: "0.5rem",
    basic: "1rem",
    basicEnlarged: "1.5rem",
    two: "2rem",
    twoEnlarged: "2.5rem",
    three: "3rem",
    threeEnlarged: "3.5rem",
    four: "4rem",
  },

  borderRadius: {
    items: "10px",
    buttons: "20px",
    buttonsLittle: "100px",
  },

  fontSize: {
    regular: "1rem",
    enlarged: "1.2rem",
    oneAndHalf: "1.5rem",
    two: "2rem",
    twoAndHalf: "2.5rem",
    three: "3rem",
    threeAndHalf: "3.5rem",
  },

  screens: {
    little: 540,
    small: 710,
    medium: 920,
    big: 1024,
    large: 1200,
  },

  devices: {
    get mobileXS() {
      return `(max-width: ${theme.screens.little}px)`;
    },
    get tabletS() {
      return `(max-width: ${theme.screens.small}px)`;
    },
    get tabletM() {
      return `(max-width: ${theme.screens.medium}px)`;
    },
    get desktopL() {
      return `(max-width: ${theme.screens.big}px)`;
    },
    get desktopXL() {
      return `(max-width: ${theme.screens.large}px)`;
    },
  },
  minPageWidth: "320px",
};

export type ThemeType = typeof theme;
