import styled from "styled-components";

export const StyledMobileMenu = styled.ul`
  background: ${({ theme }) => theme.colors.backgroundDarker};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.oneAndHalf};
  top: ${({ theme }) => theme.heights.header};
  left: 0;
  width: 100%;
  padding: 0;
  gap: 0.16rem;
  padding-top: 0.1rem;
  border: 1px solid ${({ theme }) => theme.colors.backgroundDark};
  transition: all 0.5s ease-in-out;

  /* TODO: transition */
  /* menu closed : */
  /* transform: translateX(50%); */

  /* menu opened */
  /* & .opened {
    transform: translateX(0%);
  } */

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
  font-size: ${({ theme }) => theme.fontSize.oneAndHalf};
  padding: ${({ theme }) => theme.spacing.two};

  &:hover {
    cursor: pointer;
  }
`;
