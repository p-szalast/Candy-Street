import styled from "styled-components";

import { Container } from "../../common/styles/componentsStyles";

export const StyledCartList = styled.div`
  margin: ${({ theme }) => theme.spacing.basic} auto;
  max-width: 60rem;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.items};
`;

export const BtnsContainer = styled(Container)`
  margin: auto ${({ theme }) => theme.spacing.two};
  justify-content: end;
`;
