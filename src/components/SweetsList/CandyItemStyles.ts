import styled from "styled-components";

import { Container, Item, Image } from "../../common/styles/componentsStyles";

const StyledCandyItem = styled(Item)`
  gap: 1rem;

  & .item__details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
    width: 65%;
  }
`;

export const BtnsMainAddRemoveContainer = styled(Container)`
  justify-content: space-between;
  gap: 1rem;
`;

export default StyledCandyItem;
