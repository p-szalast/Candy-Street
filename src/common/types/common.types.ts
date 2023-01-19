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
  number: string;
  postalCode: string;
  city: string;
};

/// Personal Data Form exports ////

export type PersonalDataFormInputs = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  street: string;
  houseNumber: string;
  city: string;
  postCode: string;
};
