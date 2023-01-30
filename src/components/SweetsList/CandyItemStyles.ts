import styled from "styled-components";

import { Container, Item } from "../../common/styles/componentsStyles";

const StyledCandyItem = styled(Item)`
  gap: 1rem;
  //FIXME:
  /* z-index: auto; */

  & .item__details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
    width: 65%;

    @media (max-width: 710px) {
      & h2 {
        font-size: 1.2rem;
      }

      & p {
        font-size: 0.8rem;
      }

      & strong {
        font-size: 1.1rem;
      }
    }
  }
`;

export const BtnsMainAddRemoveContainer = styled(Container)`
  justify-content: space-between;
  gap: 1rem;
`;

export default StyledCandyItem;
