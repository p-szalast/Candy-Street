import { CandyItemObject } from "../../common/types/common.types";
import { useState, useContext } from "react";

import StyledCandyItem from "./CandyItemStyles";

const CandyItem: React.FC<CandyItemObject> = (props) => {
  const [amount, setAmount] = useState(1);

  const btnMinusHandler = () => {
    setAmount((prevState) => {
      return prevState <= 1 ? prevState : --prevState;
    });
  };
  const btnPlusHandler = () => {
    setAmount((prevState) => {
      return prevState >= 99 ? prevState : ++prevState;
    });
  };

  const addToCartHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(props.name, amount);
  };

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
          <button type="button" onClick={btnMinusHandler}>
            -
          </button>
          <p>{amount}</p>
          {/* <input value="1" /> */}
          <button type="button" onClick={btnPlusHandler}>
            +
          </button>
        </div>
        <button onClick={addToCartHandler}>Add To Cart</button>
      </div>
    </StyledCandyItem>
  );
};

export default CandyItem;
