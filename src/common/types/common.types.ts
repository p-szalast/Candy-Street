import React from "react";

/// Sweets List exports ////

export type CandyItemObject = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  children?: React.ReactNode;
};

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
  street: string;
  houseNumber: string;
  postCode: string;
  city: string;
};

/// Personal Data Form exports ////

export type PersonalDataFormInputsObject = {
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
  date: String;
}
