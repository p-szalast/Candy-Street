import styled from "styled-components";

const StyledHero = styled.h2`
  padding-top: ${({ theme }) => theme.spacing.two};
  padding-bottom: ${({ theme }) => theme.spacing.basic};
  font-size: ${({ theme }) => theme.fontSize.threeAndHalf};
  font-family: "Rubik Moonrocks", cursive;
  text-align: center;
  font-weight: normal;

  @media only screen and ${({ theme }) => theme.devices.tabletM} {
    font-size: ${({ theme }) => theme.fontSize.three};
    padding-top: ${({ theme }) => theme.spacing.basic};
    padding-bottom: ${({ theme }) => theme.spacing.half};
  }

  @media only screen and ${({ theme }) => theme.devices.tabletS} {
    font-size: ${({ theme }) => theme.fontSize.twoAndHalf};
    padding-bottom: 0;
  }

  @media only screen and ${({ theme }) => theme.devices.mobileXS} {
    font-size: ${({ theme }) => theme.fontSize.two};
  }
`;

export default StyledHero;
