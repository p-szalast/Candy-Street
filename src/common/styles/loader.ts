import styled from "styled-components";

const Loader = styled.span`
  margin-top: ${({ theme }) => theme.spacing.half};
  width: 48px;
  height: 48px;
  display: inline-block;
  position: relative;
  border: 4px solid ${({ theme }) => theme.colors.background};
  box-sizing: border-box;
  animation: fill 2s linear infinite alternate;
  color: ${({ theme }) => theme.colors.primaryDarker};
  border-radius: 0 0 4px 4px;

  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border: 4px solid ${({ theme }) => theme.colors.background};
    width: 20px;
    height: 25px;
    border-radius: 0 4px 4px 0;
  }

  @keyframes fill {
    0% {
      box-shadow: 0 0 inset;
    }
    100% {
      box-shadow: 0 -48px inset;
    }
  }
`;

export default Loader;
