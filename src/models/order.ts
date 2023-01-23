import {
  OrderInterface,
  AddressObject,
  CartItemObject,
} from "../common/types/common.types";

class Order implements OrderInterface {
  orderedCandies: CartItemObject[];
  address: AddressObject;
  date: string;

  constructor(cartItems: CartItemObject[], address: AddressObject) {
    this.address = address;

    //Adding current date
    this.date = new Date().toString();

    //Removing url to image before creating object to post
    cartItems.forEach((item) => delete item.image);

    this.orderedCandies = cartItems;
  }
}

export default Order;
