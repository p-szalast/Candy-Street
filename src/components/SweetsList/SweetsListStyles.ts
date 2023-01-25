import styled from "styled-components";
import { Container } from "../../common/styles/componentsStyles";

export const StyledSweetsList = styled.section`
  margin: 1rem auto;
  max-width: 60rem;
  text-align: center;
  border-radius: 20px;

  & .btn-go-to-cart__container {
    margin: 1rem 2rem;
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
