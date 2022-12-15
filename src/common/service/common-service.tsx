import axios from "axios";
import { useState } from "react";

import { BASE_URL } from "../config";

export const getAvailableCandies: () => void = async () => {
  //   const [sweets, setSweets] = useState([]);

  // const fetchMeals = async () => {
  //     const response = await fetch("");

  //     const mealsData = await response.json();

  let availableCandies: any[] = [];

  //   await axios.get(`${BASE_URL}/candies/`).then((response) => {
  //     availableCandies = response.data;
  //   });

  const response = await fetch(BASE_URL + "candies/");
  availableCandies = await response.json();

  console.log(availableCandies);
  return availableCandies;
};
