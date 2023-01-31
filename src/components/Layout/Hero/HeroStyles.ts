import styled from "styled-components";
import { theme } from "../../../common/styles/theme";

const StyledHero = styled.h2`
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 3.5rem;
  font-family: "Rubik Moonrocks", cursive;
  text-align: center;
  font-weight: normal;

  @media only screen and ${theme.devices.tabletM} {
    font-size: 3rem;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }

  @media only screen and ${theme.devices.tabletS} {
    font-size: 2.5rem;
    padding-bottom: 0rem;
  }

  @media only screen and ${theme.devices.mobileXS} {
    font-size: 2rem;
  }
`;

export default StyledHero;
