import styled from "styled-components";

export const StyledMobileMenu = styled.ul`
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  font-size: 1.5rem;
  top: 5rem;
  left: 0;
  width: 100%;
  //TODO: choose delete or save
  /* height: 100vh; */
  padding: 0;
  gap: 0.16rem;
  padding-top: 0.1rem;
  border: 1px solid #ddd;
  z-index: 10;

  opacity: 0.9;

  & li {
    background: #fff;
    opacity: 0.9;
    list-style: none;
    width: 100%;
  }
`;

export const MobileMenuBtn = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  font-family: inherit;
  font-size: 1.5rem;
  //FIXME: Z-index of items
  /* than add paddings */
  /* padding: 2rem; */
`;
