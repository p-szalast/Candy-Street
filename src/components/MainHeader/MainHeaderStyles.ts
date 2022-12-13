import styled from "styled-components";

const StyledMainHeader = styled.header`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  background-color: #fff;
  font-size: 3.5rem;
  font-family: "Rubik Puddles", cursive;
  word-spacing: 0.5rem;

  & img {
    height: 3rem;
  }
`;

export default StyledMainHeader;
