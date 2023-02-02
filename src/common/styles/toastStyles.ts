import { theme } from "./theme";

export const toasterPosition = "bottom-center"

export const toastOptionsObject = {
  duration: 1000,
  style: {
    padding: theme.spacing.basic,
    backgroundColor: theme.colors.secondary,
    margin: theme.spacing.half,
    borderRadius: theme.borderRadius.buttons,
    fontSize: theme.fontSize.enlarged,
  },
  success: {
    duration: 5000,
  },
  error: {
    style: {
      backgroundColor: theme.colors.errorDark,
    },
  },
};

export const containerStyleObject = { marginBottom: "8rem" };
