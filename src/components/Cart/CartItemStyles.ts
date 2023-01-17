import styled from "styled-components";

const StyledCartItem = styled.div`
  //TODO: all file

  display: flex;
  margin: 1rem;

  padding: 1rem 1rem;
  background: #fff;
  opacity: 90%;
  border: 0px solid #fff;
  border-radius: 10px;
  gap: 1rem;
  color: black;

  & img {
    object-fit: cover;
    height: 5rem;
    width: 5rem;
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

  & .btn-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }

  & .btn-container .btns-add-remove {
    display: flex;
    justify-content: space-between;
  }
`;

export default StyledCartItem;
