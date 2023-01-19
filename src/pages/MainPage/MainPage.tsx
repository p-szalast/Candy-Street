import { StyledMainPage } from "./MainPageStyles";
import Hero from "../../components/Layout/Hero/Hero";
import SweetsList from "../../components/SweetsList/SweetsList";

const MainPage = () => {
  return (
    <StyledMainPage>
      <Hero />
      <SweetsList />
    </StyledMainPage>
  );
};

export default MainPage;
