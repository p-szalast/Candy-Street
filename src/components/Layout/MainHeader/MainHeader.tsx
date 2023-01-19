import { NavLink } from "react-router-dom";
import { StyledMainHeader, MainHeadingBrandName } from "./MainHeaderStyles";
import logo from "../../../assets/logo.png";

const MainHeader: React.FC = () => {
  return (
    <StyledMainHeader>
      <NavLink to="/">
        <img className="logo" alt="" src={logo} />
      </NavLink>
      <MainHeadingBrandName>Candy Street</MainHeadingBrandName>
      <div className="nav">
        <NavLink to="/history">
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
