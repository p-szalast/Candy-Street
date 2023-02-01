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

export const ContainerEnd = styled(Container)`
  margin-right: 1rem;
  justify-content: flex-end;

  & Label {
    font-weight: normal;
    width: auto;
  }
`;
