import { StyledMain, StyledSection } from "./SweetsListStyles";
import CandyItem from "./CandyItem";

const SweetsList = () => {
  return (
    <StyledMain>
      <p>Order our delicious sweets now!</p>
      <StyledSection>
        <CandyItem />
        <button>Order</button>
      </StyledSection>
    </StyledMain>
  );
};

export default SweetsList;
