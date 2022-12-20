import StyledMainHeader from "./MainHeaderStyles";
import logo from "../../../assets/logo.png";

const MainHeader: React.FC = () => {
  return (
    <StyledMainHeader>
      <img className="logo" alt="" src={logo} />
      <h1 className="header__brand-name">Candy Street</h1>
      <button>Cart</button>
    </StyledMainHeader>
  );
};

export default MainHeader;
