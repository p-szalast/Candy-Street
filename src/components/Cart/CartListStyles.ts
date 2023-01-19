import styled from "styled-components";

export const StyledCart = styled.div`
  display: block;
  margin: 1rem auto;
  max-width: 60rem;
  text-align: center;
  border-radius: 20px;

  & .cart--heading {
  }

  & .btn-order__container {
    margin: 1rem 2rem;
    gap: 0.5rem;
    display: flex;
    justify-content: end;
  }

  & .btn {
    padding: 0.5rem 1rem;
    border: none;
    background: #fff;
    border-radius: 10px;
  }

  & .btn-order {
    font-weight: bold;
  }
`;
