import { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";
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

import { useTheme } from "styled-components";

const MainHeader = () => {
  const { width } = useWindowDimensions();
  const navigate = useNavigate();

  const theme = useTheme();

  const [menuVisible, setMenuVisible] = useState<boolean>(false);

  const toggleMenuHandler = () => {
    setMenuVisible((prevState: boolean) => !prevState);
  };

  const handleNavToOrderHistory = () => {
    navigate(navKeys.history);
  };

  const handleNavToCart = () => {
    navigate(navKeys.cart);
  };

  let navButtons;
  //desktop and tablet versions
  if (width >= theme.screens.small) {
    navButtons = (
      <Container>
        <ResponsiveButton onClick={handleNavToOrderHistory}>
          {width > theme.screens.medium ? (
            <span>OrderHistory</span>
          ) : (
            <OrderHistoryIcon />
          )}
        </ResponsiveButton>
        <CartButton onClick={handleNavToCart}>
          <CartIcon />
          {width > theme.screens.large ? <span>Cart</span> : null}
        </CartButton>
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
    </StyledMainHeader>
  );
};

export default MainHeader;
