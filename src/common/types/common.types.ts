/// Sweets List exports ////

export type CandyItemObject = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  children?: React.ReactNode;
};

export enum SortTypes {
  ALFABETICAL_ASC = "ALFABETICAL_ASC",
  ALFABETICAL_DSC = "ALFABETICAL_DSC",
  BY_PRICE_ASC = "BY_PRICE_ASC",
  BY_PRICE_DSC = "BY_PRICE_DSC",
}

/// Context exports ////

export type CartItemObject = {
  id: string;
  name: string;
  price: number;
  amount: number;
  image?: string;
};

export type AddressObject = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  street: string;
  houseNumber: string;
  postCode: string;
  city: string;
};

/// Personal Data Form exports ////

export type FormInputsObject = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  street: string;
  houseNumber: string;
  city: string;
  postCode: string;
};

/// Order Object & History

export interface OrderInterface {
  orderedCandies: CartItemObject[];
  address: AddressObject;
  date: string;
  key?: string;
}
