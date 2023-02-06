import styled from "styled-components";
import {
  Container,
  Item,
  Image,
  ButtonLittle,
} from "../../common/styles/componentsStyles";

const StyledCartItem = styled(Item)`
  align-items: center;
  justify-content: space-between;

  @media only screen and ${({ theme }) => theme.devices.mobileXS} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-content: center;
    justify-items: center;

    & .btnDelete {
      grid-row: 1;
      grid-column: 5;
    }
  }

  & .cart-item__title {
    font-size: ${({ theme }) => theme.fontSize.oneAndHalf}
    text-align: left;
    width: 40%;

    @media only screen and ${({ theme }) => theme.devices.mobileXS} {
      grid-column: 2 / span 3;
      text-align: center;
      width: 100%;
      font-size: ${({ theme }) => theme.fontSize.enlarged}
    }
  }

  & .item__price {
    width: ${({ theme }) => theme.spacing.twoEnlarged}
    min-width: 2.5rem;
  }

  & .item__price-total {
    width: 3.5rem;
  }
`;

export const CartImage = styled(Image)`
  height: 4rem;
  width: 4rem;
`;

export const BtnsAddRemoveContainer = styled(Container)`
  padding: 0 ${({ theme }) => theme.spacing.four};
  gap: ${({ theme }) => theme.spacing.half};
  width: 2rem;

  @media only screen and ${({ theme }) => theme.devices.mobileXS} {
    padding: 0 ${({ theme }) => theme.spacing.twoEnlarged};
    gap: ${({ theme }) => theme.spacing.half};
  }
`;

export const ButtonDelete = styled(ButtonLittle)`
  padding: 0;
`;

export default StyledCartItem;
