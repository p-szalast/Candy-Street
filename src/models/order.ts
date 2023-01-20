import {
  OrderInterface,
  AddressObject,
  CartItemObject,
} from "../common/types/common.types";

class Order implements OrderInterface {
  orderedCandies: CartItemObject[];
  address: AddressObject;
  date: String;

  constructor(cartItems: CartItemObject[], address: AddressObject) {
    this.orderedCandies = cartItems;
    this.address = address;
    this.date = new Date().toString();
  }
}

export default Order;
