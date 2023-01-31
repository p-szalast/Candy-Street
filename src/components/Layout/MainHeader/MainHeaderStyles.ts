import styled from "styled-components";
import { Button } from "../../../common/styles/componentsStyles";

import { mediaQuery } from "../../../common/helpers";
import { theme } from "../../../common/styles/theme";

export const StyledMainHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.heights.header};
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #fff;

  & .logo {
    height: 3rem;
  }
`;

export const MainHeadingBrandName = styled.div`
  position: absolute;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3.5rem;
  font-weight: normal;
  font-family: "Rubik Puddles", cursive;
  word-spacing: 0.5rem;

  @media (max-width: 540px) {
    font-size: 2rem;
  }
`;

export const CartButton = styled(Button)`
  @media only screen and ${theme.devices.desktopXL} {
    width: auto;
  }
`;

export const ResponsiveButton = styled(Button)`
  @media only screen and ${theme.devices.tabletM} {
    width: auto;
  }

  @media only screen and ${theme.devices.tabletS} {
    border: none;
  }
`;
