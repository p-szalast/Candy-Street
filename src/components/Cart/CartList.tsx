import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../store/user-context";

import { navKeys } from "../../routes/routes";

import { calcCartTotalAmount } from "../../common/helpers";

import CartItem from "./CartItem";

import {
  Button,
  BtnsContainer,
  PageHeading,
  TotalAmountItem,
} from "../../common/styles/componentsStyles";
import { StyledCartList } from "./CartListStyles";

const CartList = () => {
  const { cartItems } = useContext(UserContext);

  const totalAmount = calcCartTotalAmount(cartItems);

  return (
    <StyledCartList>
      <PageHeading>Cart</PageHeading>
      {cartItems.length === 0 && (
        <p>Cart is empty. Please add sweets to cart first!</p>
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
        <NavLink to={navKeys.main}>
          <Button>Back</Button>
        </NavLink>
        {cartItems.length !== 0 && (
          <NavLink to={navKeys.summary}>
            <Button>Order</Button>
          </NavLink>
        )}
      </BtnsContainer>
    </StyledCartList>
  );
};

export default CartList;
