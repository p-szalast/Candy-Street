import styled from "styled-components";
import backgroundImage from "../../assets/background.png";

export const StyledMain = styled.main`
  position: fixed;
  top: 5rem;
  background: linear-gradient(
      rgba(207, 187, 203, 0.81),
      rgba(207, 187, 203, 0.81)
    ),
    url(${backgroundImage}) no-repeat top center fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  min-width: 600px;
  padding-bottom: 5rem;
  overflow: auto;

  color: #fff;
`;

export const StyledSection = styled.section`
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
