import styled from "styled-components";

const StyledCart = styled.div`
  display: block;
  margin: 1rem auto;
  max-width: 60rem;
  text-align: center;
  border-radius: 20px;

  & .cart--heading {
    padding: 0 1.5rem;
    font-weight: normal;

    text-align: start;
  }

  & .btn-order__container {
    margin: 1rem 2rem;
    display: flex;
    justify-content: end;
  }

  & .btn-order {
    padding: 0.5rem 1rem;
    border: none;
    background: #fff;
    font-weight: bold;
    border-radius: 10px;
  }
`;

export default StyledCart;
