import { StyledMain } from "./MainPageStyles";
import Hero from "../../components/Layout/Hero/Hero";
import SweetsList from "../../components/SweetsList/SweetsList";

const MainPage = () => {
  return (
    <StyledMain>
      <Hero />
      <SweetsList />
    </StyledMain>
  );
};

export default MainPage;
