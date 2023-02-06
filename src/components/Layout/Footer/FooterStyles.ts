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
  text-align: center;
  padding: 0 ${({ theme }) => theme.spacing.basic};
  background-color: ${({ theme }) => theme.colors.background};

  @media only screen and ${({ theme }) => theme.devices.mobileXS} {
    font-size: 0.8rem;
  }
`;

export default StyledFooter;
