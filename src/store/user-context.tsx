import React, { useReducer, PropsWithChildren } from "react";
import { CartItemObject } from "../common/types/common.types";
import {
  CartActions,
  CartTypes,
  UserContextObject,
} from "./user-context-types";

// Creating default context state object
const defaultUserState: UserContextObject = {
  cartItems: [],
  address: null,
  history: [],
  sortType: "",
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
};

// Creating context
export const UserContext =
  React.createContext<UserContextObject>(defaultUserState);

// Creating reducer function
const userReducer = (state: UserContextObject, action: CartActions) => {
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
  }

  return state;
};

//Creating context state
const UserContextProvider = (props: PropsWithChildren<UserContextObject>) => {
  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultUserState
  );

  const addItemHandler = (item: CartItemObject) => {
    dispatchUserAction({
      type: CartTypes.ADD_ITEM,
      payload: {
        item,
      },
    });
  };

  const removeItemHandler = (id: string) => {
    dispatchUserAction({
      type: CartTypes.REMOVE_ITEM,
      payload: {
        id,
      },
    });
  };

  const clearCartHandler = () => {
    dispatchUserAction({
      type: CartTypes.CLEAR_CART,
    });
  };

  const contextValue: UserContextObject = {
    cartItems: userState.cartItems,
    address: userState.address,
    history: userState.history,
    sortType: "",
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
