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
  {
    id: "c04",
    name: "Christmas Tree Lolipops (10 piesces)",
    price: 4.5,
    image:
      "https://cdn.shopify.com/s/files/1/1371/3393/products/41862HPQRML._SL1000.jpg",
    description:
      "Great for Holiday Gifts. Perfect for tucking in a holiday candy dish or stocking! Mixed fruit flavor. Individually wrapped. Fat-free.",
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
    date: "Sat Nov 25 2023 10:22:03 GMT+0100 (Central European Standard Time)",
  },
];

export const newOrder: OrderInterface = {
  orderedCandies: [
    {
      id: "c05",
      name: "Fruit Slices Candy (25 pieces)",
      price: 9.5,
      amount: 1,
    },
  ],
  address: {
    firstName: "Dominik",
    lastName: "Dziekan",
    phoneNumber: "+48306102144",
    street: "Samochodowa",
    houseNumber: "9",
    city: "Warszawa",
    postCode: "01-203",
  },
  date: "Thu Jan 09 2023 10:22:03 GMT+0100 (Central European Standard Time)",
};
