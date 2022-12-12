import styled from "styled-components";
import backgroundImage from "../assets/background.png";

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

  color: #fff;

  & p {
    padding: 2rem;
    font-size: 4rem;
    text-align: center;
  }
`;

export const StyledSection = styled.section`
  margin: 3rem auto;
  max-width: 60rem;
  text-align: center;
  border: 1px solid #fff;
  border-radius: 20px;
`;
