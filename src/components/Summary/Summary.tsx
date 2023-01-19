import { useContext } from "react";

import { UserContext } from "../../store/user-context";

import PersonalDataForm from "./PersonalDataForm";

import { StyledSummary } from "./SummaryStyles";

import { Button, Container } from "../../common/styles/componentsStyles";

const Summary = () => {
  const { cartItems, address } = useContext(UserContext);

  const totalAmount = cartItems.reduce(
    (acc, cur) => acc + cur.amount * cur.price,
    0
  );

  const confirmOrderHandler: () => void = () => {
    //TODO:
    console.log(cartItems, address);
  };

  return (
    <StyledSummary>
      <PersonalDataForm />
      <div>
        <p>Total amount:</p>
        <p>{totalAmount} zł</p>
      </div>
    </StyledSummary>
  );
};

export default Summary;
