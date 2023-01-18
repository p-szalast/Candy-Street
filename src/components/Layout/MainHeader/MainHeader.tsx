import { NavLink } from "react-router-dom";
import StyledMainHeader from "./MainHeaderStyles";
import logo from "../../../assets/logo.png";

const MainHeader: React.FC = () => {
  return (
    <StyledMainHeader>
      <NavLink to="/">
        <img className="logo" alt="" src={logo} />
      </NavLink>
      <h1 className="header__brand-name">Candy Street</h1>
      <div className="nav">
        <NavLink to="/cart">
          <p>Order History</p>
        </NavLink>
        <NavLink to="/cart">
          <button>Cart</button>
        </NavLink>
      </div>
    </StyledMainHeader>
  );
};

export default MainHeader;
