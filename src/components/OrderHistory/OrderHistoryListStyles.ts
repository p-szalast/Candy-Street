import styled from "styled-components";

import { Container } from "../../common/styles/componentsStyles";

export const StyledOrderHistoryList = styled.div`
  display: block;
  margin: ${({ theme }) => theme.spacing.basic} auto;
  max-width: 60rem;
  text-align: center;
  border-radius: ${({ theme }) => theme.borderRadius.buttons};
`;

export const BtnsContainer = styled(Container)`
  margin: ${({ theme }) => theme.spacing.basic}
    ${({ theme }) => theme.spacing.two} ${({ theme }) => theme.spacing.two}
    ${({ theme }) => theme.spacing.two};
  justify-content: start;
`;
