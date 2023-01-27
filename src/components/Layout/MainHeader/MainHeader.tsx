import { NavLink } from "react-router-dom";
import { navKeys } from "../../../routes/routes";

import logo from "../../../assets/logo.png";
import { CartIcon, OrderHistoryIcon } from "../../../assets/icons";

import {
  StyledMainHeader,
  MainHeadingBrandName,
  CartButton,
  OrderHistoryButton,
} from "./MainHeaderStyles";
import { Container } from "../../../common/styles/componentsStyles";

import useWindowDimensions from "../../../hooks/useWindowDimensions";

const MainHeader = () => {
  const { width } = useWindowDimensions();

  return (
    <StyledMainHeader>
      <NavLink to="/">
        <img className="logo" alt="" src={logo} />
      </NavLink>
      <MainHeadingBrandName>Candy&nbsp;Street</MainHeadingBrandName>
      <Container>
        <NavLink to={navKeys.history}>
          <OrderHistoryButton>
            {width > 900 ? <span>OrderHistory</span> : <OrderHistoryIcon />}
          </OrderHistoryButton>
        </NavLink>
        <NavLink to={navKeys.cart}>
          <CartButton>
            <CartIcon />
            {width > 1200 ? <span>Cart</span> : null}
          </CartButton>
        </NavLink>
      </Container>
    </StyledMainHeader>
  );
};

export default MainHeader;
