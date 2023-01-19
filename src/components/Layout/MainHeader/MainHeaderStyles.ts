import styled from "styled-components";

export const StyledMainHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #fff;

  & .logo {
    height: 3rem;
  }

  & .header__brand-name {
  }

  & .nav {
    display: flex;
    gap: 0.5rem;
  }
`;

export const MainHeadingBrandName = styled.h1`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3.5rem;
  font-weight: normal;
  font-family: "Rubik Puddles", cursive;
  word-spacing: 0.5rem;
`;
