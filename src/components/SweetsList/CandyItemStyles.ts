import styled from "styled-components";

import { Container } from "../../common/styles/componentsStyles";

const StyledCandyItem = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  background: #fff;
  opacity: 90%;
  border: 0px solid #fff;
  border-radius: 10px;
  gap: 1rem;
  color: black;

  & img {
    object-fit: cover;
    height: 10rem;
    width: 10rem;
    border: 0px solid #fff;
    border-radius: 10px;
  }

  & .item__text {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    text-align: left;
    width: 65%;

    & .item__title {
      font-size: 1.5rem;
    }

    & .item__description {
      font-size: 1rem;
    }

    & .item__price {
      font-weight: bold;
    }
  }
`;

export const BtnsMainAddRemoveContainer = styled(Container)`
  justify-content: space-between;
  gap: 1rem;
`;

export default StyledCandyItem;
