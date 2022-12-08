import React, { useState, useReducer } from "react";

type UserContextObject = {
  order: {
    items: Object[];
    adress: {};
  };
  history: [];
  sortType: string;
  addItem: () => void;
  removeItem: () => void;
};

type Props = { children: React.ReactNode };

// default: empty values
export const UserContext = React.createContext<UserContextObject>({
  order: {
    items: [],
    adress: {},
  },
  history: [],
  sortType: "",
  addItem: () => {},
  removeItem: () => {},
});

const UserContextProvider: React.FC<Props> = (props) => {
  const [order, setOrder] = useState();

  const contextValue: UserContextObject = {
    order: {
      items: [],
      adress: {},
    },
    history: [],
    sortType: "",
    addItem: () => {},
    removeItem: () => {},
  };

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
