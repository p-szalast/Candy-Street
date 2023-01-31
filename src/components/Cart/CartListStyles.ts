import styled from "styled-components";

import { Container } from "../../common/styles/componentsStyles";

export const StyledCartList = styled.div`
  margin: 1rem auto;
  max-width: 60rem;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.items};
`;

export const BtnsContainer = styled(Container)`
  margin: auto 2rem;
  justify-content: end;
`;
