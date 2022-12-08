import styled from "styled-components";
import backgroundImage from "../assets/background.png";

const Main = styled.main`
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

const Section = styled.section`
  max-width: 60rem;
  /* width: 90%; */
  margin: 3rem auto;
  text-align: center;

  border: 1px solid #fff;
  border-radius: 20px;
`;

const SweetsList: React.FC = () => {
  return (
    <Main>
      <p>Order our delicious sweets now!</p>
      <Section>SweetsList</Section>
    </Main>
  );
};

export default SweetsList;
