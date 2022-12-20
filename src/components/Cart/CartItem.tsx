import { CartItemObject } from "../../common/types/common.types";
import { useState, useContext } from "react";

import { UserContext } from "../../store/user-context";

import StyledCartItem from "./CartItemStyles";

const CandyItem: React.FC<CartItemObject> = (props) => {
  const [amount, setAmount] = useState(props.amount);
  const ctx = useContext(UserContext);

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

    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });

    //TODO: delete after adding cart page
    console.log(props.name, amount);
  };

  return (
    <StyledCartItem>
      {/* <img alt="" src={props.image} /> */}
      <div className="item__text">
        <h3 className="item__title">{props.name}</h3>
        <p className="item__price">{props.price} zł</p>
      </div>
      <div className="btn-container">
        <div className="btns-add-remove">
          <button type="button" onClick={btnMinusHandler}>
            -
          </button>
          <p>{amount}</p>
          <button type="button" onClick={btnPlusHandler}>
            +
          </button>
        </div>
      </div>
    </StyledCartItem>
  );
};

export default CandyItem;
