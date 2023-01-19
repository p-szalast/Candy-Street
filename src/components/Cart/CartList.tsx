import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../store/user-context";

import CartItem from "./CartItem";
// import { CartHeading } from "./CartItemStyles";

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
        <div className="btn-order__container">
          <NavLink className="btn btn-go-to-cart__container" to="/">
            <button className="btn btn-back">Back</button>
          </NavLink>
          <button className="btn btn-order" onClick={orderHandler}>
            Order
          </button>
        </div>
      )}
    </StyledCart>
  );
};

export default CartList;
