import { NavLink } from "react-router-dom";
import StyledMainHeader from "./MainHeaderStyles";
import logo from "../../../assets/logo.png";

const MainHeader: React.FC = () => {
  return (
    <StyledMainHeader>
      <NavLink to="/main">
        <img className="logo" alt="" src={logo} />
      </NavLink>
      <h1 className="header__brand-name">Candy Street</h1>
      <NavLink to="/cart">
        <button>Cart</button>
      </NavLink>
    </StyledMainHeader>
  );
};

export default MainHeader;
