import axios from "axios";
import { BASE_URL } from "../../common/config";

import { useState, useEffect } from "react";

import { StyledMain, StyledSection } from "./SweetsListStyles";
import Hero from "../Hero/Hero";
import CandyItem from "./CandyItem";
import { getAvailableCandies } from "../../common/service/common-service";

const SweetsList = () => {
  const [sweets, setSweets] = useState([]);

  // useEffect(() => {
  // const availableCandies = getAvailableCandies();
  //   setSweets(availableCandies);
  //   console.log(availableCandies);
  // }, []);

  /////////////////////////////////////////////
  let availableCandies: any[] = [];

  const getAvailableCandies = async () => {
    // const fetchMeals = async () => {
    //     const response = await fetch("");

    //     const mealsData = await response.json();

    await axios.get(`${BASE_URL}/candies/`).then((response) => {
      availableCandies = response.data;
    });

    console.log(availableCandies);
  };

  getAvailableCandies();

  return (
    <StyledMain>
      <Hero />
      <StyledSection>
        {availableCandies.map((item) => (
          <CandyItem name={item.name} />
        ))}
        <div className="btn-order__container">
          <button className="btn-order">Order</button>
        </div>
      </StyledSection>
    </StyledMain>
  );
};

export default SweetsList;
