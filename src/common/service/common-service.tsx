import axios from "axios";

import { CandyItemObject } from "../types/common.types";

import { BASE_URL } from "../config";

export const getAvailableCandies = async () => {
  let availableCandies: CandyItemObject[] = [];

  await axios.get(`${BASE_URL}/candies/`).then((response) => {
    availableCandies = response.data;
  });

  // console.log(availableCandies);

  return availableCandies;
};
