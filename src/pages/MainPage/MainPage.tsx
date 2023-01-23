import { StyledPage } from "../../common/styles/componentsStyles";

import Hero from "../../components/Layout/Hero/Hero";
import SweetsList from "../../components/SweetsList/SweetsList";

const MainPage = () => {
  return (
    <StyledPage>
      <Hero />
      <SweetsList />
    </StyledPage>
  );
};

export default MainPage;
