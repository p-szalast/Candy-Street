import { useState, useContext } from "react";
import { UserContext } from "../../store/user-context";

import { Delete } from "../../assets/icons";

import StyledCartItem, {
  BtnsAddRemoveContainer,
  ButtonDelete,
  CartImage,
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
    });
  };

  const btnDeleteHandler = () => {
    removeItem(props.id);
  };

  return (
    <StyledCartItem>
      <CartImage alt="" src={props.image} />
      <h3 className="cart-item__title">{props.name}</h3>
      <p className="item__price">{props.price} zł</p>
      <strong> x </strong>
      <BtnsAddRemoveContainer>
        <ButtonLittle onClick={btnCartMinusHandler}>-</ButtonLittle>
        <p>{amount}</p>
        <ButtonLittle onClick={btnCartPlusHandler}>+</ButtonLittle>
      </BtnsAddRemoveContainer>
      <strong> = </strong>
      <strong className="item__price-total">{props.price * amount} zł</strong>
      <ButtonDelete onClick={btnDeleteHandler}>
        <Delete />
      </ButtonDelete>
    </StyledCartItem>
  );
};

export default CandyItem;
