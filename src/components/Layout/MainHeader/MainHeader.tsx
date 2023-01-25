import { NavLink } from "react-router-dom";
import { navKeys } from "../../../routes/routes";

import { StyledMainHeader, MainHeadingBrandName } from "./MainHeaderStyles";
import { Button, Container } from "../../../common/styles/componentsStyles";

import logo from "../../../assets/logo.png";
import { Cart } from "../../../assets/icons";

const MainHeader = () => {
  return (
    <StyledMainHeader>
      <NavLink to="/">
        <img className="logo" alt="" src={logo} />
      </NavLink>
      <MainHeadingBrandName>Candy&nbsp;Street</MainHeadingBrandName>
      <Container>
        <NavLink to={navKeys.history}>
          <Button>Order History</Button>
        </NavLink>
        <NavLink to={navKeys.cart}>
          <Button>
            <Cart />
            Cart
          </Button>
        </NavLink>
      </Container>
    </StyledMainHeader>
  );
};

export default MainHeader;
