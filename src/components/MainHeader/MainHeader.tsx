import StyledMainHeader from "./MainHeaderStyles";
import logo from "../../assets/logo.png";

const MainHeader: React.FC = () => {
  return (
    <StyledMainHeader>
      <img alt="" src={logo} />
      <p>Candy Street</p>
      <button>Cart</button>
    </StyledMainHeader>
  );
};

export default MainHeader;
