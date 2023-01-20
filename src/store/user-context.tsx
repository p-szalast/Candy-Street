import React, { useReducer, PropsWithChildren } from "react";
import {
  CartItemObject,
  AddressObject,
  OrderInterface,
} from "../common/types/common.types";
import {
  CartActions,
  CartTypes,
  UserTypes,
  UserActions,
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
  setAddress: () => {},
  addToHistory: () => {},
};

// Creating context
export const UserContext =
  React.createContext<UserContextObject>(defaultUserState);
UserContext.displayName = "UserContext";

// Creating reducer function
const userReducer = (
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

  if (action.type === UserTypes.ADD_TO_HISTORY) {
    //TODO: history: number??
    // const updatedHistory = state.history.push(action.payload.order);
    // const updatedState = {
    //   ...state,
    //   history: updatedHistory,
    // };
    // return updatedState;
  }

  return state;
};

//Creating context state
const UserContextProvider = (props: PropsWithChildren) => {
  const [userState, dispatchUserAction] = useReducer(
    userReducer,
    defaultUserState
  );

  ///////////////////////
  ///// CART ACTIONS /////
  ////////////////////////

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

  ///////////////////////
  ///// USER ACTIONS /////
  ////////////////////////

  const setAddressHandler = (address: AddressObject) => {
    dispatchUserAction({
      type: UserTypes.SET_ADDRESS,
      payload: {
        address,
      },
    });
  };

  const addToHistoryHandler = (order: OrderInterface) => {
    dispatchUserAction({
      type: UserTypes.ADD_TO_HISTORY,
      payload: {
        order,
      },
    });
  };

  ///////////////////////////////////////

  const contextValue: UserContextObject = {
    cartItems: userState.cartItems,
    address: userState.address,
    history: userState.history,
    sortType: "",
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
    setAddress: setAddressHandler,
    addToHistory: addToHistoryHandler,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
