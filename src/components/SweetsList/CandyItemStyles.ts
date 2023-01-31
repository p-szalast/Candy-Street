import styled from "styled-components";

import { Container, Item } from "../../common/styles/componentsStyles";

const StyledCandyItem = styled(Item)`
  gap: 1rem;

  & .item__details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
    width: 65%;

    @media only screen and ${({ theme }) => theme.devices.tabletS} {
      & h2 {
        ${({ theme }) => theme.fontSize.enlarged};
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
