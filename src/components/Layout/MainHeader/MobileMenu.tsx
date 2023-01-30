import React from "react";
import { useNavigate } from "react-router-dom";
import { navKeys } from "../../../routes/routes";

import { StyledMobileMenu, MobileMenuBtn } from "./MobileMenuStyles";

const MobileMenu = ({ toggleMenu }: { toggleMenu: () => void }) => {
  const navigate = useNavigate();

  const navToHandler = (path: string) => {
    navigate(path);
    toggleMenu();
  };

  return (
    <StyledMobileMenu>
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
