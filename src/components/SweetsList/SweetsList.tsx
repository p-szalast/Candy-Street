import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navKeys } from "../../routes/routes";

import { getAvailableCandies } from "../../common/service/common-service";
import CandyItem from "./CandyItem";

import { Button } from "../../common/styles/componentsStyles";
import { StyledSweetsList } from "./SweetsListStyles";

import { CandyItemObject } from "../../common/types/common.types";

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
      <NavLink className="btn-go-to-cart__container" to={navKeys.cart}>
        <Button>Go to Cart</Button>
      </NavLink>
    </StyledSweetsList>
  );
};

export default SweetsList;
