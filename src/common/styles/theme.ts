//TODO: delete
// export const screens = {
//   little: 540,
//   small: 710,
//   medium: 920,
//   big: 1024,
//   large: 1200,
// };

export const theme = {
  heights: {
    header: "5rem",
    footer: "2rem",
  },

  colors: {
    colorMain: "#ffffff",
    colorMainDark: "#cecece",
    colorMainDarker: "#a2a0a0",
    colorPrimary: "#cfbbcb",
    colorPrimaryLight: "#e5dfe4",
    colorPrimaryDark: "#ae8ca7",
    colorPrimaryDarker: "#99658f",
    colorSecondary: "#dae9d2",
    colorTertiary: "#fffde6",

    error: "#D2122E",
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
};

export type ThemeType = typeof theme;
