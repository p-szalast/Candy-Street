import { useContext } from "react";
import { UserContext } from "../../store/user-context";

import StyledCart from "./CartStyles";

import CartItem from "./CartItem";

const Cart = () => {
  const { cartItems } = useContext(UserContext);

  return (
    <StyledCart>
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
        <div className="btn-order__container">
          <button className="btn-order">Order</button>
        </div>
      )}
    </StyledCart>
  );
};

export default Cart;
