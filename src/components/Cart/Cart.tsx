import { useContext } from "react";
import { UserContext } from "../../store/user-context";

import CartItem from "./CartItem";

import StyledCart from "./CartStyles";

const Cart = () => {
  const { cartItems } = useContext(UserContext);

  const orderHandler: () => void = () => {
    console.log(cartItems);
  };

  return (
    <StyledCart>
      <h2 className="cart--heading">Cart</h2>
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
          <button className="btn-order" onClick={orderHandler}>
            Order
          </button>
        </div>
      )}
    </StyledCart>
  );
};

export default Cart;
