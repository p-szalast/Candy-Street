import {
  AddressObject,
  SortTypes,
  CartItemObject,
} from "../common/types/common.types";

export type UserContextObject = {
  cartItems: CartItemObject[];
  address: AddressObject;
  sortType: SortTypes;
  addItem: (item: CartItemObject) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  setAddress: (address: AddressObject) => void;
  setSortType: (sortType: SortTypes) => void;
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

///////////////////////////////////////////

export enum UserTypes {
  SET_ADDRESS = "SET_ADDRESS",
  SET_SORT_TYPE = "SET_SORT_TYPE",
}

export type SetAddressAction = {
  type: UserTypes.SET_ADDRESS;
  payload: {
    address: AddressObject;
  };
};

export type SetSortType = {
  type: UserTypes.SET_SORT_TYPE;
  payload: {
    sortType: SortTypes;
  };
};

export type UserActions = SetAddressAction | SetSortType;
