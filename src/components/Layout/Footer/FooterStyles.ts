import styled from "styled-components";

import * as theme from "../../../common/styles/theme";

const StyledFooter = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: ${theme.FOOTER_HEIGHT};
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  background-color: #fff;
  min-width: 1000px;
`;

export default StyledFooter;
