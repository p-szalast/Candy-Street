import { CandyItemObject, CartItemObject } from "./types/common.types";

export const mockedSweets: CandyItemObject[] = [
  {
    id: "c01",
    name: "Classic Chocolate Chip Cookies (20 pieces)",
    price: 8,
    image:
      "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/classic-chocolate-chip-cookies.jpg",
    description:
      "A chocolate chip cookie is a drop cookie that features chocolate chips or chocolate morsels as its istinguishing ingredient. Chocolate chip cookies originated in the US about 1938.",
  },
];

export const mockedCart: CartItemObject[] = [
  {
    id: "c01",
    name: "Classic Chocolate Chip Cookies (20 pieces)",
    price: 8,
    amount: 2,
  },
  {
    id: "c03",
    name: "Moist Chocolate Muffins (4 pieces)",
    price: 12,
    amount: 3,
  },
];
