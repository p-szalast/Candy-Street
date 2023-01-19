import { useState, useContext } from "react";
import { CandyItemObject } from "../../common/types/common.types";
import { ButtonLittle } from "../../common/styles/components";

import { UserContext } from "../../store/user-context";

import StyledCandyItem from "./CandyItemStyles";

import { CartItemObject } from "../../common/types/common.types";

const CandyItem: React.FC<CandyItemObject> = (props) => {
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
          <ButtonLittle onClick={btnMinusHandler}>-</ButtonLittle>
          <p>{amount}</p>
          <ButtonLittle onClick={btnPlusHandler}>+</ButtonLittle>
        </div>
        {/* <button onClick={addToCartHandler}>Add To Cart</button> */}
      </div>
    </StyledCandyItem>
  );
};

export default CandyItem;
