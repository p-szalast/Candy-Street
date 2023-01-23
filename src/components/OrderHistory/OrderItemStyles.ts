import styled from "styled-components";

const StyledOrderItem = styled.div`
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
