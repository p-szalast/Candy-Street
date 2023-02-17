import styled from "styled-components";
import { Container } from "../../common/styles/componentsStyles";

export const StyledSweetsList = styled.section`
  margin: ${({ theme }) => theme.spacing.basic} auto;
  max-width: 60rem;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.buttons};

  & .btn-go-to-cart__container {
    margin: ${({ theme }) => theme.spacing.basic}
      ${({ theme }) => theme.spacing.two};
    display: flex;
    justify-content: end;
  }
`;

export const FilterSortContainer = styled(Container)`
  margin-right: ${({ theme }) => theme.spacing.basic};
  justify-content: space-between;

  @media only screen and ${({ theme }) => theme.devices.mobileXS} {
    flex-direction: column;
  }

  & div {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.half};
    margin: 0 0 0 ${({ theme }) => theme.spacing.basic};
  }

  & Label {
    font-weight: normal;
    width: auto;
  }

  & Input {
    font-size: ${({ theme }) => theme.fontSize.regular};
    padding: ${({ theme }) => theme.spacing.quarter}
      ${({ theme }) => theme.spacing.half};
    border: none;
    height: auto;
  }
`;
