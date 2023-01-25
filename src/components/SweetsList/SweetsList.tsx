import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../store/user-context";
import { NavLink } from "react-router-dom";
import { navKeys } from "../../routes/routes";

import {
  getAvailableCandies,
  setLocalStorageSortType,
} from "../../common/service/common-service";
import { sortCandies } from "../../common/helpers";

import CandyItem from "./CandyItem";

import {
  Button,
  Container,
  Label,
  Select,
} from "../../common/styles/componentsStyles";
import { ContainerEnd, StyledSweetsList } from "./SweetsListStyles";

import { CandyItemObject, SortTypes } from "../../common/types/common.types";

const SweetsList = () => {
  const [sweets, setSweets] = useState<CandyItemObject[]>([]);

  const { sortType, setSortType } = useContext(UserContext);

  useEffect(() => {
    const fetchCandies = async () => {
      const data = await getAvailableCandies();
      if (!data) return;
      const sortedCandies = sortCandies(data, sortType);
      setSweets(sortedCandies);
    };
    fetchCandies();
  }, [sortType]);

  // //Sorting
  // useEffect(() => {
  //   if (sweets.length > 0) {
  //     setSortedSweets(sortCandies(sweets, sortType));
  //   }
  // }, [sweets, sortType, sortedSweets]);

  const sortTypeChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    //FIXME: check if event.target.value is SosrtTypes
    if (
      event.target.value === SortTypes.ALFABETICAL_ASC ||
      event.target.value === SortTypes.ALFABETICAL_DSC ||
      event.target.value === SortTypes.BY_PRICE_ASC ||
      event.target.value === SortTypes.BY_PRICE_DSC
    ) {
      setSortType(event.target.value);
      setLocalStorageSortType(event.target.value);
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
        <Button>Go to Cart</Button>
      </NavLink>
    </StyledSweetsList>
  );
};

export default SweetsList;
