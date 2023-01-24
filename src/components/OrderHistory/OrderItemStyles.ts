import styled from "styled-components";

import { Item, VFlexBox } from "../../common/styles/componentsStyles";

const StyledOrderItem = styled(Item)`
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  > p {
    /* text-align: end; */
    /* flex-basis: 10rem; */
  }
`;

export const OrderDetailsContainer = styled(VFlexBox)`
  align-items: flex-start;
  text-align: start;
  width: 85%;
`;

export default StyledOrderItem;
