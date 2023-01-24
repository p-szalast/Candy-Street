import styled from "styled-components";

import { Container, Item } from "../../common/styles/componentsStyles";

export const OrderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  > p {
    text-align: end;
    flex-basis: 10rem;
  }
`;

export const OrderDetailsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
`;

const StyledOrderItem = styled(Item)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
`;

export default StyledOrderItem;
