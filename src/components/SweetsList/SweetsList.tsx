import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";

import CandyItem from "./CandyItem";
import { UserContext } from "../../store/user-context";

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
      <NavLink className="btn-go-to-cart__container" to="/cart">
        <button className="btn-go-to-cart">Go to Cart</button>
      </NavLink>
    </StyledSweetsList>
  );
};

export default SweetsList;
