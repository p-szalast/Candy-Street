import styled from "styled-components";

const FooterElement = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
`;

const Footer = () => {
  return (
    <FooterElement>
      © 2022 | Przemysław Szalast for Capgemini React Academy | All Rights
      Reserved.
    </FooterElement>
  );
};

export default Footer;
