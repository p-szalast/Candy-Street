import axios from "axios";

import { CandyItemObject, OrderInterface } from "../types/common.types";

import { BASE_URL } from "../config";

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
