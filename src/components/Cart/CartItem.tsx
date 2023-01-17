import { useState, useContext } from "react";
import { CartItemObject } from "../../common/types/common.types";
import StyledCartItem from "./CartItemStyles";

import { UserContext } from "../../store/user-context";

const CandyItem: React.FC<CartItemObject> = (props) => {
  const [amount, setAmount] = useState(props.amount);
  const { addItem } = useContext(UserContext);

  const btnCartMinusHandler = () => {
    setAmount((prevState) => {
      return prevState <= 1 ? prevState : --prevState;
    });

    addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
      image: props.image,
    });

    //TODO: delete after finishing
    console.log(props.name, amount);
  };
  const btnCartPlusHandler = () => {
    setAmount((prevState) => {
      return prevState >= 99 ? prevState : ++prevState;
    });

    //   addItem({
    //     id: props.id,
    //     name: props.name,
    //     price: props.price,
    //     amount: amount,
    //     image: props.image,
    //   });

    //   //TODO: delete after finishing
    //   console.log(props.name, amount);
  };

  return (
    <StyledCartItem>
      <img alt="" src={props.image} />
      <h3 className="cart-item__title">{props.name}</h3>
      <p className="item__price">{props.price} zł</p>
      <p className="cart-item--signs"> x </p>
      <div className="btns-add-remove">
        <button type="button" onClick={btnCartMinusHandler}>
          -
        </button>
        <p>{amount}</p>
        <button type="button" onClick={btnCartPlusHandler}>
          +
        </button>
      </div>
      <p className="cart-item--signs"> = </p>
      <p className="item__price-total">{props.price * props.amount} zł</p>
    </StyledCartItem>
  );
};

export default CandyItem;
