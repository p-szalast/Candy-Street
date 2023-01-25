import axios from "axios";

import {
  CandyItemObject,
  OrderInterface,
  SortTypes,
} from "../types/common.types";

import { BASE_URL } from "../config";

/// Server

export const getAvailableCandies = async () => {
  return axios
    .get<CandyItemObject[]>(`${BASE_URL}/candies`)
    .then((response) => response.data);
};

export const postOrder = async (order: OrderInterface) => {
  return axios
    .post<OrderInterface>(`${BASE_URL}/orders`, order)
    .then((response) => response.data);
};

export const fetchOrderHistory = async () => {
  return axios
    .get<OrderInterface[]>(`${BASE_URL}/orders`)
    .then((response) => response.data);
};

/// Local storage

export const setLocalStorageSortType: (sortType: SortTypes) => void = (
  sortType
) => {
  localStorage.setItem("sortType", sortType);
};

//FIXME:
export const getLocalStorageSortType: () => SortTypes = () => {
  const stringSortType: string | null = localStorage.getItem("sortType");

  //FIXME: check if stringSortType is SortTypes
  if (
    stringSortType === SortTypes.ALFABETICAL_ASC ||
    stringSortType === SortTypes.ALFABETICAL_DSC ||
    stringSortType === SortTypes.BY_PRICE_ASC ||
    stringSortType === SortTypes.BY_PRICE_DSC
  ) {
    return stringSortType;
  } else {
    return SortTypes.ALFABETICAL_ASC;
  }
};
