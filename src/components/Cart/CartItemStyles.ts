import styled from "styled-components";
import { Container, ButtonLittle } from "../../common/styles/componentsStyles";

const StyledCartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;

  padding: 1rem 1rem;
  background: #fff;
  opacity: 90%;
  border: 0px solid #fff;
  border-radius: 10px;
  color: black;

  & img {
    object-fit: cover;
    height: 4rem;
    width: 4rem;
    border: 0px solid #fff;
    border-radius: 10px;
  }

  & .cart-item__title {
    font-size: 1.5rem;
    text-align: left;
    width: 40%;
  }

  & .item__price {
    width: 2.5rem;
    min-width: 2.5rem;
  }

  & .cart-item--signs {
    font-weight: bold;
  }

  & .item__price-total {
    width: 3.5rem;
    font-weight: bold;
  }
`;

export const BtnsAddRemoveContainer = styled(Container)`
  padding: 0 4rem;
  gap: 0.5rem;
  width: 2rem;
`;

export const ButtonDelete = styled(ButtonLittle)`
  padding: 0;
`;

export default StyledCartItem;
