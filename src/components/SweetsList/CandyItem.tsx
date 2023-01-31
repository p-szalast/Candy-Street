import { useState, useContext } from "react";
import {
  CandyItemObject,
  CartItemObject,
} from "../../common/types/common.types";
import { ButtonLittle, Image } from "../../common/styles/componentsStyles";

import { UserContext } from "../../store/user-context";

import StyledCandyItem, { BtnsMainAddRemoveContainer } from "./CandyItemStyles";

import toast from "react-hot-toast";
import { MAX_ORDER_ITEM_AMOUNT } from "../../common/config";

const CandyItem = (props: CandyItemObject) => {
  const { cartItems, addItem, removeItem } = useContext(UserContext);

  //checking if item is already in cart
  const itemAlreadyInCart: CartItemObject | undefined = cartItems.find(
    (item) => item.id === props.id
  );

  const existingItemAmount: number = itemAlreadyInCart
    ? itemAlreadyInCart.amount
    : 0;

  const [amount, setAmount] = useState(existingItemAmount);

  const btnMinusHandler = () => {
    setAmount((prevState) => {
      return prevState <= 0 ? prevState : --prevState;
    });

    //guard clause
    if (amount > 1) {
      addItem({
        id: props.id,
        name: props.name,
        price: props.price,
        amount: -1,
        image: props.image,
      });
    } else if (amount <= 1) {
      removeItem(props.id);
    }
  };
  const btnPlusHandler = () => {
    setAmount((prevState) => {
      return prevState >= MAX_ORDER_ITEM_AMOUNT ? prevState : ++prevState;
    });

    //guard clause
    if (amount >= MAX_ORDER_ITEM_AMOUNT) return;

    addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: 1,
      image: props.image,
    });

    toast("Item added");
  };

  return (
    <StyledCandyItem>
      <Image alt="" src={props.image} />
      <div className="item__details">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <strong>{props.price} zł</strong>
      </div>
      <BtnsMainAddRemoveContainer>
        <ButtonLittle onClick={btnMinusHandler}>-</ButtonLittle>
        <p>{amount}</p>
        <ButtonLittle onClick={btnPlusHandler}>+</ButtonLittle>
      </BtnsMainAddRemoveContainer>
    </StyledCandyItem>
  );
};

export default CandyItem;
