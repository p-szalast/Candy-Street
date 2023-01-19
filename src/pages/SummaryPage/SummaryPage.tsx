import { StyledSummaryPage } from "./SummaryPageStyles";
import Summary from "../../components/Summary/Summary";

import Hero from "../../components/Layout/Hero/Hero";

const SummaryPage = () => {
  return (
    <StyledSummaryPage>
      <Hero />
      <Summary />
    </StyledSummaryPage>
  );
};

export default SummaryPage;
