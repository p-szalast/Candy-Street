import { CandyItemObject } from "../../common/types/common.types";

import StyledCandyItem from "./CandyItemStyles";
// import classicChocolateChipCookies from "../../assets/classic-chocolate-chip-cookies.jpg";

const CandyItem: React.FC<CandyItemObject> = (props) => {
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
        <button>Add To Cart</button>
      </div>
    </StyledCandyItem>
  );
};

export default CandyItem;
