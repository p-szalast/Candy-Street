import { useState, useEffect } from "react";

import { CandyItemObject } from "../../common/types/common.types";

import { StyledMain, StyledSection } from "./SweetsListStyles";
import Hero from "../Hero/Hero";
import CandyItem from "./CandyItem";
import { getAvailableCandies } from "../../common/service/common-service";

const SweetsList = () => {
  const [sweets, setSweets] = useState<CandyItemObject[] | null>([]);

  useEffect(() => {
    const fetchCandies = async () => {
      const data = await getAvailableCandies();
      setSweets(data);
    };
    fetchCandies();
  }, []);

  // const availableCandiesb = await getAvailableCandies.then((resp) => {
  //   resp.data;
  // });

  // console.log(availableCandies);

  // setSweets(availableCandies);

  // const availableCandies = async() => {
  //   const availableCandies: CandyItemObject[] = [];
  //   await const getAvailableCandies();
  //   setSweets(availableCandies);

  // }

  /////////////////////////////////////////////
  // let availableCandies: any[] = [];

  //   await axios.get(`${BASE_URL}/candies/`).then((response) => {
  //     availableCandies = response.data;
  //   });

  //   console.log(availableCandies);
  // };

  // getAvailableCandies();

  return (
    <StyledMain>
      <Hero />
      <StyledSection>
        {sweets &&
          sweets.map((item) => (
            <CandyItem
              id={item.id}
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          ))}
        <div className="btn-order__container">
          <button className="btn-order">Order</button>
        </div>
      </StyledSection>
    </StyledMain>
  );
};

export default SweetsList;
