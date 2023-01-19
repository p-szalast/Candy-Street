import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../store/user-context";

import CartItem from "./CartItem";
import { Button } from "../../common/styles/componentsStyles";
import { BtnsContainer } from "./CartListStyles";

import { StyledCart } from "./CartListStyles";

const CartList = () => {
  const { cartItems } = useContext(UserContext);

  const orderHandler: () => void = () => {
    //TODO:
    console.log(cartItems);
  };

  return (
    <StyledCart>
      {/* <CartHeading>Cart</CartHeading> */}
      {cartItems.length === 0 && (
        <p className="empty-cart-msg">
          Cart is empty. Please add sweets to cart first!
        </p>
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
        <BtnsContainer>
          <NavLink to="/">
            <Button>Back</Button>
          </NavLink>
          <Button onClick={orderHandler}>Order</Button>
        </BtnsContainer>
      )}
    </StyledCart>
  );
};

export default CartList;
