import { useState, useContext } from "react";
import { UserContext } from "../../store/user-context";

import { Delete } from "../../assets/icons";

import StyledCartItem, {
  BtnsAddRemoveContainer,
  ButtonDelete,
} from "./CartItemStyles";
import { ButtonLittle } from "../../common/styles/componentsStyles";

import { CartItemObject } from "../../common/types/common.types";

const CandyItem = (props: CartItemObject) => {
  const [amount, setAmount] = useState(props.amount);
  const { addItem, removeItem } = useContext(UserContext);

  const btnCartMinusHandler = () => {
    setAmount((prevState) => {
      return prevState <= 1 ? prevState : --prevState;
    });

    //guard clause
    if (amount <= 1) return;

    addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: -1,
      image: props.image,
    });
  };
  const btnCartPlusHandler = () => {
    setAmount((prevState) => {
      return prevState >= 99 ? prevState : ++prevState;
    });

    //guard clause
    if (amount >= 99) return;

    addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
      image: props.image,
    });
  };

  const btnDeleteHandler = () => {
    removeItem(props.id);
  };

  return (
    <StyledCartItem>
      <img alt="" src={props.image} />
      <h3 className="cart-item__title">{props.name}</h3>
      <p className="item__price">{props.price} zł</p>
      <p className="cart-item--signs"> x </p>
      <BtnsAddRemoveContainer>
        <ButtonLittle onClick={btnCartMinusHandler}>-</ButtonLittle>
        <p>{amount}</p>
        <ButtonLittle onClick={btnCartPlusHandler}>+</ButtonLittle>
      </BtnsAddRemoveContainer>
      <p className="cart-item--signs"> = </p>
      <p className="item__price-total">{props.price * amount} zł</p>
      <ButtonDelete onClick={btnDeleteHandler}>
        <Delete />
      </ButtonDelete>
    </StyledCartItem>
  );
};

export default CandyItem;
