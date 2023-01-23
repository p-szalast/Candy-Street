import { useContext } from "react";
import { UserContext } from "../../store/user-context";

import PersonalDataForm from "./PersonalDataForm";

import Order from "../../models/order";

import { postOrder } from "../../common/service/common-service";

import { StyledSummary } from "./SummaryStyles";
import { Button, Container } from "../../common/styles/componentsStyles";

import { AddressObject } from "../../common/types/common.types";

const Summary = () => {
  const { cartItems, clearCart } = useContext(UserContext);

  const totalAmount = cartItems.reduce(
    (acc, cur) => acc + cur.amount * cur.price,
    0
  );

  const confirmOrderHandler: (enteredAddress: AddressObject) => void = (
    enteredAddress
  ) => {
    const newOrder = new Order(cartItems, enteredAddress);
    postOrder(newOrder);

    //TODO:delete
    console.log(newOrder);

    clearCart();
  };

  return (
    <StyledSummary>
      <PersonalDataForm onConfirmOrder={confirmOrderHandler} />
      {cartItems && <p>Total Amount: {totalAmount} zł</p>}
    </StyledSummary>
  );
};

export default Summary;
