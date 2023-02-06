import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../store/user-context";

import { navKeys } from "../../routes/routes";

import { calcCartTotalAmount } from "../../common/helpers";

import CartItem from "./CartItem";

import {
  Button,
  BtnsContainer,
  PageHeading,
  TotalAmountItem,
  EmptyListMsg,
} from "../../common/styles/componentsStyles";
import { StyledCartList } from "./CartListStyles";

const CartList = () => {
  const { cartItems } = useContext(UserContext);
  const navigate = useNavigate();

  const totalAmount = calcCartTotalAmount(cartItems);

  const hadnleBackToSweetsList = () => {
    navigate(navKeys.main);
  };

  const orderHandler = () => {
    navigate(navKeys.summary);
  };

  return (
    <StyledCartList>
      <PageHeading>Cart</PageHeading>
      {cartItems.length === 0 && (
        <EmptyListMsg>
          Cart is empty. Please add sweets to cart first!
        </EmptyListMsg>
      )}
      {cartItems &&
        cartItems.map((item) => (
          <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            image={item.image}
          ></CartItem>
        ))}
      {cartItems.length !== 0 && (
        <TotalAmountItem>
          <p>Total Amount:</p> <strong>{totalAmount} zł</strong>
        </TotalAmountItem>
      )}

      <BtnsContainer>
        <Button onClick={hadnleBackToSweetsList}>Back</Button>
        {cartItems.length !== 0 && (
          <Button className="call-to-action" onClick={orderHandler}>
            Order
          </Button>
        )}
      </BtnsContainer>
    </StyledCartList>
  );
};

export default CartList;
