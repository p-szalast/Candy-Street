import { useState } from "react";

import { NavLink } from "react-router-dom";
import { navKeys } from "../../../routes/routes";

import logo from "../../../assets/logo.png";
import {
  CartIcon,
  CloseIcon,
  MobileMenuIcon,
  OrderHistoryIcon,
} from "../../../assets/icons";

import {
  StyledMainHeader,
  MainHeadingBrandName,
  CartButton,
  ResponsiveButton,
} from "./MainHeaderStyles";
import { Container } from "../../../common/styles/componentsStyles";

import useWindowDimensions from "../../../hooks/useWindowDimensions";
import MobileMenu from "./MobileMenu";
import { theme } from "../../../common/styles/theme";

const MainHeader = () => {
  const { width } = useWindowDimensions();
  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenuHandler = () => {
    setMenuVisible((prevState: boolean) => !prevState);
  };

  let navButtons;

  //desktop and tablet versions
  if (width >= theme.screens.small) {
    navButtons = (
      <Container>
        <NavLink to={navKeys.history}>
          <ResponsiveButton>
            {width > theme.screens.medium ? (
              <span>OrderHistory</span>
            ) : (
              <OrderHistoryIcon />
            )}
          </ResponsiveButton>
        </NavLink>
        <NavLink to={navKeys.cart}>
          <CartButton>
            <CartIcon />
            {width > theme.screens.large ? <span>Cart</span> : null}
          </CartButton>
        </NavLink>
      </Container>
    );
  }

  //mobile version
  if (width < theme.screens.small) {
    navButtons = (
      <Container>
        <ResponsiveButton onClick={toggleMenuHandler}>
          {menuVisible ? <CloseIcon /> : <MobileMenuIcon />}
        </ResponsiveButton>
      </Container>
    );
  }

  return (
    <StyledMainHeader>
      <NavLink to="/">
        <img className="logo" alt="" src={logo} />
      </NavLink>
      <MainHeadingBrandName>Candy&nbsp;Street</MainHeadingBrandName>
      {navButtons}
      {width < theme.screens.small && menuVisible && (
        <MobileMenu toggleMenu={toggleMenuHandler} menuVisible={menuVisible} />
      )}
      {/* {width < theme.screens.small && (
        <MobileMenu toggleMenu={toggleMenuHandler} menuVisible={menuVisible} />
      )} */}
    </StyledMainHeader>
  );
};

export default MainHeader;
