import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../store/user-context";
import { NavLink } from "react-router-dom";
import { navKeys } from "../../routes/routes";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import {
  getAvailableCandies,
  setLocalStorageSortType,
} from "../../common/service/common-service";
import { isSortType, sortCandies } from "../../common/helpers";

import CandyItem from "./CandyItem";

import { CartIcon } from "../../assets/icons";

import { Label, Select } from "../../common/styles/componentsStyles";
import { ContainerEnd, StyledSweetsList } from "./SweetsListStyles";
import { CartButton } from "../Layout/MainHeader/MainHeaderStyles";

import { CandyItemObject, SortTypes } from "../../common/types/common.types";
import { theme } from "../../common/styles/theme";

const SweetsList = () => {
  const [sweets, setSweets] = useState<CandyItemObject[]>([]);

  const { sortType, setSortType } = useContext(UserContext);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const fetchCandies = async () => {
      const data = await getAvailableCandies();
      if (!data) return;
      const sortedCandies = sortCandies(data, sortType);
      setSweets(sortedCandies);
    };
    fetchCandies();
  }, [sortType]);

  const sortTypeChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const sortValue = event.target.value;
    if (isSortType(sortValue)) {
      setSortType(sortValue);
      setLocalStorageSortType(sortValue);
    }
  };

  return (
    <StyledSweetsList>
      <ContainerEnd>
        <Label htmlFor="sortType">Sort:</Label>
        <Select
          name="sortType"
          id="sortType"
          value={sortType}
          onChange={sortTypeChangeHandler}
        >
          <option value={SortTypes.ALFABETICAL_ASC}>Afabetical &darr;</option>
          <option value={SortTypes.ALFABETICAL_DSC}>Afabetical &uarr;</option>
          <option value={SortTypes.BY_PRICE_ASC}>By price &darr;</option>
          <option value={SortTypes.BY_PRICE_DSC}>By price &uarr;</option>
        </Select>
      </ContainerEnd>
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
      {sweets.length === 0 && (
        <p>No sweets available at this moment. Please try Again later.</p>
      )}
      <NavLink className="btn-go-to-cart__container" to={navKeys.cart}>
        <CartButton>
          {width > theme.screens.large ? <span>Go to Cart</span> : <CartIcon />}
        </CartButton>
      </NavLink>
    </StyledSweetsList>
  );
};

export default SweetsList;
