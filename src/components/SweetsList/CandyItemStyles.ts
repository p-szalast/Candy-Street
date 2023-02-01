import styled from "styled-components";

import { Container, Item } from "../../common/styles/componentsStyles";

const StyledCandyItem = styled(Item)<{ $inCart?: boolean }>`
  gap: ${({ theme }) => theme.spacing.basic};

  & .item__details {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.half};
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
        font-size: ${({ theme }) => theme.fontSize.enlarged};
      }
    }
  }

  @media only screen and ${({ theme }) => theme.devices.mobileXS} {
    display: grid;
    grid-template-columns: auto auto;
    justify-items: center;

    & .item__details {
      grid-row: span 2;
      grid-column: 2;
      width: 100%;
    }
  }
`;

export const BtnsMainAddRemoveContainer = styled(Container)`
  justify-content: space-around;
  padding-right: ${({ theme }) => theme.spacing.basic};
  gap: ${({ theme }) => theme.spacing.basic};
  width: 5rem;

  @media only screen and ${({ theme }) => theme.devices.mobileXS} {
    padding: 0;
  }
`;

export default StyledCandyItem;
