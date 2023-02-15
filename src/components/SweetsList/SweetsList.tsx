import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../store/user-context";
import { useNavigate } from "react-router-dom";
import { navKeys } from "../../routes/routes";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import {
  getAvailableCandies,
  setLocalStorageSortType,
} from "../../common/service/common-service";
import { isSortType, sortCandies } from "../../common/helpers";

import CandyItem from "./CandyItem";

import { CartIcon } from "../../assets/icons";

import {
  Container,
  EmptyListMsg,
  Label,
  Select,
  VFlexBox,
} from "../../common/styles/componentsStyles";
import { ContainerEnd, StyledSweetsList } from "./SweetsListStyles";
import { CartButton } from "../Layout/MainHeader/MainHeaderStyles";

import { CandyItemObject, SortTypes } from "../../common/types/common.types";
import { theme } from "../../common/styles/theme";
import Loader from "../../common/styles/loader";
import { toast } from "react-hot-toast";

const SweetsList = () => {
  const [sweets, setSweets] = useState<CandyItemObject[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { sortType, setSortType } = useContext(UserContext);
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCandies = async () => {
      setIsLoading(true);

      const data = await getAvailableCandies();

      if (!data) {
        setIsLoading(false);
        return;
      }

      const sortedCandies = sortCandies(data, sortType);

      setSweets(sortedCandies);

      setIsLoading(false);
    };

    //TODO: error when failed to fetch data
    // toast.promise(fetchCandies, {
    //   success: "Sweets loaded!",
    //   error: "Error when fetching sweets",
    // });

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

  const handleNavToCart = () => {
    navigate(navKeys.cart);
  };

  return (
    <StyledSweetsList>
      <ContainerEnd>
        <Label htmlFor="sortType">Sort:</Label>
        <Select
          name="sortType"
          id="sortType"
          data-testid="sortSelect"
          value={sortType}
          onChange={sortTypeChangeHandler}
        >
          <option value={SortTypes.ALFABETICAL_ASC}>Afabetical &darr;</option>
          <option value={SortTypes.ALFABETICAL_DSC} data-testid="sortOption">
            Afabetical &uarr;
          </option>
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
      {isLoading && (
        <VFlexBox>
          <p>Loading...</p>
          <Loader className="loader"></Loader>
        </VFlexBox>
      )}
      {sweets.length === 0 && !isLoading && (
        <EmptyListMsg>
          No sweets available at this moment. Please try Again later.
        </EmptyListMsg>
      )}
      <Container className="btn-go-to-cart__container">
        <CartButton
          data-testid="cartBtn"
          className="call-to-action"
          onClick={handleNavToCart}
        >
          {width > theme.screens.large ? <span>Go to Cart</span> : <CartIcon />}
        </CartButton>
      </Container>
    </StyledSweetsList>
  );
};

export default SweetsList;
