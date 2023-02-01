import React from "react";
import { useNavigate } from "react-router-dom";
import { navKeys } from "../../../routes/routes";

import { StyledMobileMenu, MobileMenuBtn } from "./MobileMenuStyles";

const MobileMenu = ({
  toggleMenu,
  menuVisible,
}: {
  toggleMenu: () => void;
  menuVisible: boolean;
}) => {
  const navigate = useNavigate();

  const navToHandler = (path: string) => {
    navigate(path);
    toggleMenu();
  };

  return (
    <StyledMobileMenu className={menuVisible ? "opened" : ""}>
      <li>
        <MobileMenuBtn onClick={() => navToHandler(navKeys.main)}>
          Sweets List
        </MobileMenuBtn>
      </li>
      <li>
        <MobileMenuBtn onClick={() => navToHandler(navKeys.history)}>
          Order History
        </MobileMenuBtn>
      </li>
      <li>
        <MobileMenuBtn onClick={() => navToHandler(navKeys.cart)}>
          Cart
        </MobileMenuBtn>
      </li>
    </StyledMobileMenu>
  );
};

export default MobileMenu;
