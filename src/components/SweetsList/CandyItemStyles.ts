import styled from "styled-components";

const StyledCandyItem = styled.div`
  display: flex;
  padding: 1rem 1rem;
  background: #dadada;
  opacity: 90%;

  & img {
    object-fit: cover;
    height: 10rem;
    width: 10rem;
  }

  & .btn-container .btns-add-remove {
    display: flex;
  }
`;

export default StyledCandyItem;
