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
    little: "600px",
    small: "900px",
    medium: "1200px",
    large: "",
  },
};

export type ThemeType = typeof theme;

export const device = {
  mobile: `(max-width: ${theme.screens.little})`,
  tabletV: `(max-width: ${theme.screens.small})`,
  tabletH: `(max-width: ${theme.screens.medium})`,
  desktop: `(min-width: ${theme.screens.medium})`,
};
