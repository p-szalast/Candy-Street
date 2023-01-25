import {
  CandyItemObject,
  CartItemObject,
  SortTypes,
} from "./types/common.types";
import * as Yup from "yup";

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
    case "ALFABETICAL_ASC":
      return candies.sort((a, b) => (a.name > b.name ? 1 : -1));
    case "ALFABETICAL_DSC":
      return candies.sort((a, b) => (a.name < b.name ? 1 : -1));
    case "BY_PRICE_ASC":
      return candies.sort((a, b) => (a.price > b.price ? 1 : -1));
    case "BY_PRICE_DSC":
      return candies.sort((a, b) => (a.price < b.price ? 1 : -1));
    default:
      return candies;
  }
};

// Form Validation

export const personalDataFormYupValidationSchema = Yup.object({
  firstName: Yup.string()
    .matches(
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
      "First name must contain letters only"
    )
    .required("Required"),
  lastName: Yup.string()
    .matches(
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
      "Last name must contain letters only"
    )
    .required("Required"),
  phoneNumber: Yup.string()
    .min(9, "Phone Number must be at least 9 digits")
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g,
      "Phone number must containg digits only"
    )
    .required("Required"),
  street: Yup.string()
    .matches(
      /^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
      "Street name in wrong format"
    )
    .required("Required"),
  houseNumber: Yup.string()
    .matches(/^[a-zA-Z0-9/ -]+$/u, "House number in wrong format")
    .required("Required"),
  city: Yup.string()
    .matches(
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u,
      "City must contain letters only"
    )
    .required("Required"),
  postCode: Yup.string().matches(/^[0-9-]+$/u, "Post code in wrong format"),
});
