import { NavLink } from "react-router-dom";
import StyledMainHeader from "./MainHeaderStyles";
import logo from "../../../assets/logo.png";

const MainHeader: React.FC = () => {
  return (
    <StyledMainHeader>
      <img className="logo" alt="" src={logo} />
      <h1 className="header__brand-name">Candy Street</h1>
      <nav>
        <NavLink to="/cart">
          <button>Cart</button>
        </NavLink>
      </nav>
    </StyledMainHeader>
  );
};

export default MainHeader;
