import styled from "styled-components";

import * as theme from "../../../common/styles/theme";

export const StyledMainHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${theme.HEADER_HEIGHT};
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #fff;
  min-width: 1000px;

  & .logo {
    height: 3rem;
  }
`;

export const MainHeadingBrandName = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3.5rem;
  font-weight: normal;
  font-family: "Rubik Puddles", cursive;
  word-spacing: 0.5rem;
  min-width: 400px;
`;
