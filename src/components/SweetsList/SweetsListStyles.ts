import styled from "styled-components";

export const StyledSweetsList = styled.section`
  margin: 1rem auto;
  max-width: 60rem;
  text-align: center;
  border-radius: 20px;

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
