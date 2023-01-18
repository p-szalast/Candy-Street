import React, { useReducer } from "react";
import {
  Props,
  UserContextObject,
  CartItemObject,
} from "../common/types/common.types";

// Creating default context state object
const defaultUserState: UserContextObject = {
  cartItems: [],
  address: {},
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
const userReducer = (
  state: UserContextObject,
  action: { type: string; item?: CartItemObject; id?: string }
) => {
  if (action.type === "ADD_ITEM") {
    //guard clause
    if (!action.item) return state;

    //Check if item is already in the cart
    const indexOfAlreadyAddedItem: number = state.cartItems.findIndex(
      (item) => action.item?.id === item.id
    );

    const alreadyAddedItem: CartItemObject =
      state.cartItems[indexOfAlreadyAddedItem];

    let updatedCartItems: CartItemObject[];

    //if item exists:
    if (alreadyAddedItem) {
      const updatedItem = {
        ...alreadyAddedItem,
        amount: alreadyAddedItem.amount + action.item.amount,
      };

      updatedCartItems = [...state.cartItems];
      updatedCartItems[indexOfAlreadyAddedItem] = updatedItem;
    } else {
      //if item does not exist
      updatedCartItems = state.cartItems.concat(action.item);
    }

    //updating app state with changed CartItems
    const updatedState = {
      ...state,
      cartItems: updatedCartItems,
    };

    return updatedState;
  }
  if (action.type === "REMOVE_ITEM") {
  }
  if (action.type === "CLEAR_CART") {
  }

  return defaultUserState;
};

//Creating context state
const UserContextProvider: React.FC<Props> = (props) => {
  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultUserState
  );

  const addItemHandler = (item: CartItemObject) => {
    dispatchUserAction({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemHandler = (id: string) => {
    dispatchUserAction({
      type: "REMOVE_ITEM",
      id: id,
    });
  };

  const clearCartHandler = () => {
    dispatchUserAction({
      type: "CLEAR_CART",
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
