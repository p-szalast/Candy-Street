export type Props = { children: React.ReactNode };

/// Sweets List exports ////

export type CandyItemObject = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

/// Context exports ////

export type CartItemObject = {
  id: string;
  name: string;
  price: number;
  amount: number;
};

type AddressObject = {
  firstName: string;
  lastName: string;
  street: string;
  number: string;
  postalCode: string;
  city: string;
};

export type UserContextObject = {
  cartItems: CartItemObject[];
  address: AddressObject | {};
  history?: [];
  sortType?: string;
  addItem: (item: CartItemObject) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
};
