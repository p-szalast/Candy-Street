import styled from "styled-components";
import backgroundImage from "../../assets/background.png";

export const StyledCartPage = styled.main`
  /* top: 5rem; */
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
