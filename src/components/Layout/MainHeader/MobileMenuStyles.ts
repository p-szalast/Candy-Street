import styled from "styled-components";

export const StyledMobileMenu = styled.ul`
  background: #eee;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.big};
  top: 5rem;
  left: 0;
  width: 100%;
  padding: 0;
  gap: 0.16rem;
  padding-top: 0.1rem;
  border: 1px solid ${({ theme }) => theme.colors.backgroundDark};
  /* TODO: transition */ /* menu closed : */
  /* transform: translateX(100%); */ /* menu opened */
  /* transform: translateX(0%); */ /* transition: all 0.5s ease-in-out; */

  & li {
    background: ${({ theme }) => theme.colors.backgroundDark};
    list-style: none;
    width: 100%;
  }
`;

export const MobileMenuBtn = styled.button`
  width: 100%;
  height: 100%;
  background: transparent;
  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.big};
  padding: 2rem;

  &:hover {
    cursor: pointer;
  }
`;
