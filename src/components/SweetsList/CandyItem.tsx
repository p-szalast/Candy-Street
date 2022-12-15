import { CandyItemObject } from "../../common/types/common.types";

import StyledCandyItem from "./CandyItemStyles";

const CandyItem: React.FC<CandyItemObject> = (props) => {
  // const addToCartHandler = (event: MouseEvent) => {};

  return (
    <StyledCandyItem>
      <img alt="" src={props.image} />
      <div className="item__text">
        <h3 className="item__title">{props.name}</h3>
        <p className="item__description">{props.description}</p>
        <p className="item__price">{props.price} zł</p>
      </div>
      <div className="btn-container">
        <div className="btns-add-remove">
          <button>-</button>
          <p>1</p>
          <button>+</button>
        </div>
        <button
        // onClick={addToCartHandler}
        >
          Add To Cart
        </button>
      </div>
    </StyledCandyItem>
  );
};

export default CandyItem;
