import { useState, useEffect } from "react";

import CandyItem from "./CandyItem";

import { StyledSweetsList } from "./SweetsListStyles";

import { CandyItemObject } from "../../common/types/common.types";

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

  return (
    <StyledSweetsList>
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
    </StyledSweetsList>
  );
};

export default SweetsList;
