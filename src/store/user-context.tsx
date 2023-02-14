import React, { PropsWithChildren } from "react";
import { CartItemObject } from "../common/types/common.types";
import {
  CartActions,
  CartTypes,
  UserTypes,
  UserActions,
  UserContextObject,
} from "./user-context-types";

import { getLocalStorageSortType } from "../common/service/common-service";
import useUserContextProviderValue from "./useUserContextProviderValue";

export const emptyAddressObject = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  street: "",
  houseNumber: "",
  postCode: "",
  city: "",
};

// Creating default context state object
export const defaultUserState: UserContextObject = {
  cartItems: [],
  address: emptyAddressObject,
  sortType: getLocalStorageSortType(),
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
  setAddress: () => {},
  setSortType: () => {},
};

// Creating context
export const UserContext =
  React.createContext<UserContextObject>(defaultUserState);
UserContext.displayName = "UserContext";

// Creating reducer function
export const userReducer = (
  state: UserContextObject,
  action: CartActions | UserActions
) => {
  ///////////////////////
  ///// CART ACTIONS /////
  ////////////////////////

  if (action.type === CartTypes.ADD_ITEM) {
    //Check if item is already in the cart
    const indexOfAlreadyAddedItem: number = state.cartItems.findIndex(
      (item) => action.payload.item.id === item.id
    );

    const alreadyAddedItem: CartItemObject =
      state.cartItems[indexOfAlreadyAddedItem];

    let updatedCartItems: CartItemObject[];

    //if item exists:
    if (alreadyAddedItem) {
      const updatedItem = {
        ...alreadyAddedItem,
        amount: alreadyAddedItem.amount + action.payload.item.amount,
      };

      updatedCartItems = [...state.cartItems];
      updatedCartItems[indexOfAlreadyAddedItem] = updatedItem;
    } else {
      //if item does not exist
      updatedCartItems = state.cartItems.concat(action.payload.item);
    }

    //updating app state with changed CartItems
    const updatedState = {
      ...state,
      cartItems: updatedCartItems,
    };

    return updatedState;
  }

  if (action.type === CartTypes.REMOVE_ITEM) {
    const updatedState = {
      ...state,
      cartItems: state.cartItems.filter(
        (item) => item.id !== action.payload.id
      ),
    };

    return updatedState;
  }

  if (action.type === CartTypes.CLEAR_CART) {
    const updatedState = {
      ...state,
      cartItems: [],
    };

    return updatedState;
  }

  ///////////////////////
  ///// USER ACTIONS /////
  ////////////////////////

  if (action.type === UserTypes.SET_ADDRESS) {
    const updatedState = {
      ...state,
      address: action.payload.address,
    };

    return updatedState;
  }

  if (action.type === UserTypes.SET_SORT_TYPE) {
    const updatedState = {
      ...state,
      sortType: action.payload.sortType,
    };

    return updatedState;
  }

  return state;
};

//Creating context state
const UserContextProvider = (props: PropsWithChildren) => {
  return (
    <UserContext.Provider
      value={useUserContextProviderValue(userReducer, defaultUserState)}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
