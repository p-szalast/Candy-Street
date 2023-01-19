import { AddressObject, CartItemObject } from "../common/types/common.types";

export type UserContextObject = {
  cartItems: CartItemObject[];
  address: AddressObject | null;
  history?: [];
  sortType?: string;
  addItem: (item: CartItemObject) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};

export enum CartTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  CLEAR_CART = "CLEAR_CART",
}

export type AddItemAction = {
  type: CartTypes.ADD_ITEM;
  payload: {
    item: CartItemObject;
  };
};

export type RemoveItemAction = {
  type: CartTypes.REMOVE_ITEM;
  payload: {
    id: string;
  };
};

export type ClearCartAction = {
  type: CartTypes.CLEAR_CART;
};

export type CartActions = AddItemAction | RemoveItemAction | ClearCartAction;
