import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../store/user-context";

import { navKeys } from "../../routes/routes";

import CartItem from "./CartItem";
import { Button } from "../../common/styles/componentsStyles";
import { BtnsContainer } from "./CartListStyles";

import { StyledCartList } from "./CartListStyles";

const CartList = () => {
  const { cartItems } = useContext(UserContext);

  const totalAmount = cartItems.reduce(
    (acc, cur) => acc + cur.amount * cur.price,
    0
  );

  return (
    <StyledCartList>
      {/* <CartHeading>Cart</CartHeading> */}
      <h3>Cart</h3>
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
      {cartItems && <p>Total Amount: {totalAmount} zł</p>}
      {cartItems.length !== 0 && (
        <BtnsContainer>
          <NavLink to={navKeys.main}>
            <Button>Back</Button>
          </NavLink>
          <NavLink to={navKeys.summary}>
            <Button>Order</Button>
          </NavLink>
        </BtnsContainer>
      )}
    </StyledCartList>
  );
};

export default CartList;
