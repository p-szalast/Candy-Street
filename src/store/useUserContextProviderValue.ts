import { useReducer } from "react";
import {
  AddressObject,
  CartItemObject,
  SortTypes,
} from "../common/types/common.types";
import {
  CartActions,
  CartTypes,
  UserActions,
  UserContextObject,
  UserTypes,
} from "./user-context-types";

const useUserContextProviderValue = (
  userReducer: (
    state: UserContextObject,
    action: CartActions | UserActions
  ) => UserContextObject,
  defaultUserState: UserContextObject
) => {
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

  return contextValue;
};

export default useUserContextProviderValue;
