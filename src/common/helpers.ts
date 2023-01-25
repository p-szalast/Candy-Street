import { CartItemObject } from "./types/common.types";

export const calcCartTotalAmount: (cartItems: CartItemObject[]) => number = (
  cartItems
) => {
  return cartItems.reduce((acc, cur) => acc + cur.amount * cur.price, 0);
};
