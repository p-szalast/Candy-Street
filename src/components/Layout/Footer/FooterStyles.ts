import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${({ theme }) => theme.heights.footer};
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  background-color: #fff;
`;

export default StyledFooter;
