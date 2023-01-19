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
  image: string;
};

export type AddressObject = {
  firstName: string;
  lastName: string;
  street: string;
  number: string;
  postalCode: string;
  city: string;
};
