import StyledMainHeader from "./MainHeaderStyles";

const MainHeader: React.FC = () => {
  return (
    <StyledMainHeader>
      <p>Logo</p>
      <p>Candy Street</p>
      <button>Cart</button>
    </StyledMainHeader>
  );
};

export default MainHeader;
