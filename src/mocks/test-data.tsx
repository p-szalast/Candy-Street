import {
  CandyItemObject,
  CartItemObject,
  OrderInterface,
} from "../common/types/common.types";

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

export const mockedOrders: OrderInterface[] = [
  {
    orderedCandies: [
      {
        id: "c01",
        name: "Classic Chocolate Chip Cookies (20 pieces)",
        price: 8,
        amount: 4,
      },
      {
        id: "c02",
        name: "Candy Canes (12 pieces)",
        price: 6.5,
        amount: 3,
      },
    ],
    address: {
      firstName: "Maciej",
      lastName: "Skiba",
      phoneNumber: "+48202102144",
      street: "Chałwowa",
      houseNumber: "73",
      city: "Wałbrzych",
      postCode: "10-203",
    },
    date: "Mon Jan 25 2023 11:22:03 GMT+0100 (Central European Standard Time)",
  },
];
