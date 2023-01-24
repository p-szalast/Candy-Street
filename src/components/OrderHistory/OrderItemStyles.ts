import styled from "styled-components";

import { Container } from "../../common/styles/componentsStyles";

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > p {
    text-align: end;
    flex-basis: 10rem;
  }
`;

export const OrderDetailsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
`;

const StyledOrderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: 1rem;
  gap: 0.5rem;
  padding: 1rem 1rem;
  background: #fff;
  opacity: 90%;
  border: 0px solid #fff;
  border-radius: 10px;
  color: black;

  & .cart-item__title {
    font-size: 1.5rem;
    text-align: left;
    width: 40%;
  }

  & .item__price {
    width: 2.5rem;
    min-width: 2.5rem;
  }

  & .item__price-total {
    width: 3.5rem;
    font-weight: bold;
  }
`;

export default StyledOrderItem;
