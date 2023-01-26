import React, { useReducer, PropsWithChildren } from "react";
import {
  CartItemObject,
  AddressObject,
  SortTypes,
} from "../common/types/common.types";
import {
  CartActions,
  CartTypes,
  UserTypes,
  UserActions,
  UserContextObject,
} from "./user-context-types";

import { getLocalStorageSortType } from "../common/service/common-service";

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
const defaultUserState: UserContextObject = {
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

    //TODO: update local storage

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

  const setSortTypeHandler = (sortType: SortTypes) => {
    dispatchUserAction({
      type: UserTypes.SET_SORT_TYPE,
      payload: {
        sortType,
      },
    });
  };

  ///////////////////////////////////////

  const contextValue: UserContextObject = {
    cartItems: userState.cartItems,
    address: userState.address,
    sortType: userState.sortType,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearCart: clearCartHandler,
    setAddress: setAddressHandler,
    setSortType: setSortTypeHandler,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
