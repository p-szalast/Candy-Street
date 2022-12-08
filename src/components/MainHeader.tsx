import styled from "styled-components";

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;

  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1rem;

  /* border: 1px solid #000; */
`;

const MainHeader: React.FC = () => {
  return (
    <Header>
      <p>Logo</p>
      <p>Candy Street</p>
      <button>Cart</button>
    </Header>
  );
};

export default MainHeader;
