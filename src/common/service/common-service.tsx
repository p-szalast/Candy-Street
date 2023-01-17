import axios from "axios";

import { CandyItemObject } from "../types/common.types";

import { BASE_URL } from "../config";

export const getAvailableCandies = async () => {
  return axios
    .get<CandyItemObject[]>(`${BASE_URL}/candies/`)
    .then((response) => response.data);
};
