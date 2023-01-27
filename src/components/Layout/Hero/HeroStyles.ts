import styled from "styled-components";

const StyledHero = styled.h2`
  padding-top: 2rem;
  padding-bottom: 1rem;
  font-size: 3.5rem;
  font-family: "Rubik Moonrocks", cursive;
  text-align: center;
  font-weight: normal;

  @media (max-width: 600px) {
    font-size: 2.5rem;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
  }

  @media (max-width: 420px) {
    font-size: 2rem;
  }
`;

export default StyledHero;
