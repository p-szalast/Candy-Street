import { NavLink } from "react-router-dom";
import { navKeys } from "../../../routes/routes";

import { StyledMainHeader, MainHeadingBrandName } from "./MainHeaderStyles";
import { Button } from "../../../common/styles/componentsStyles";

import logo from "../../../assets/logo.png";
import { Cart } from "../../../assets/icons";

const MainHeader: React.FC = () => {
  return (
    <StyledMainHeader>
      <NavLink to="/">
        <img className="logo" alt="" src={logo} />
      </NavLink>
      <MainHeadingBrandName>Candy Street</MainHeadingBrandName>
      <div className="nav">
        <NavLink to={navKeys.history}>
          <Button>Order History</Button>
        </NavLink>
        <NavLink to={navKeys.cart}>
          <Button>
            <Cart />
            Cart
          </Button>
        </NavLink>
      </div>
    </StyledMainHeader>
  );
};

export default MainHeader;
