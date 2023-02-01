import {
  CandyItemObject,
  CartItemObject,
  SortTypes,
} from "./types/common.types";
import * as Yup from "yup";

import { theme } from "./styles/theme";

export const calcCartTotalAmount: (cartItems: CartItemObject[]) => number = (
  cartItems
) => {
  return cartItems.reduce((acc, cur) => acc + cur.amount * cur.price, 0);
};

export const sortCandies: (
  candies: CandyItemObject[],
  sortType: SortTypes
) => CandyItemObject[] = (candies, sortType) => {
  switch (sortType) {
    case SortTypes.ALFABETICAL_ASC:
      return candies.sort((a, b) => (a.name > b.name ? 1 : -1));
    case SortTypes.ALFABETICAL_DSC:
      return candies.sort((a, b) => (a.name < b.name ? 1 : -1));
    case SortTypes.BY_PRICE_ASC:
      return candies.sort((a, b) => (a.price > b.price ? 1 : -1));
    case SortTypes.BY_PRICE_DSC:
      return candies.sort((a, b) => (a.price < b.price ? 1 : -1));
    default:
      return candies;
  }
};

// Media querries helpers
export const mediaQuery = (key: keyof typeof theme.screens) => {
  return (style: string) =>
    `@media (max-width: ${theme.screens[key]}px) { ${style} }`;
};

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

// Form Validation

const validateLettersPattern =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

const validateStreetPattern =
  /^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

const validatePhoneNumberpattern =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g;

export const personalDataFormYupValidationSchema = Yup.object({
  firstName: Yup.string()
    .matches(validateLettersPattern, "First name must contain letters only")
    .required("Required"),
  lastName: Yup.string()
    .matches(validateLettersPattern, "Last name must contain letters only")
    .required("Required"),
  phoneNumber: Yup.string()
    .min(9, "Phone Number must be at least 9 digits")
    .matches(
      validatePhoneNumberpattern,
      "Phone number must containg digits only"
    )
    .required("Required"),
  street: Yup.string()
    .matches(validateStreetPattern, "Street name in wrong format")
    .required("Required"),
  houseNumber: Yup.string()
    .matches(/^[a-zA-Z0-9/ -]+$/u, "House number in wrong format")
    .required("Required"),
  city: Yup.string()
    .matches(validateLettersPattern, "City must contain letters only")
    .required("Required"),
  postCode: Yup.string()
    .required("Required")
    .matches(/^[0-9-]+$/u, "Post code in wrong format"),
});

// Typescipt guard
export const isSortType = (value: string): value is SortTypes => {
  return value in SortTypes;
};
