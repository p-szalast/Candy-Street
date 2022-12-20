import { useContext } from "react";
import { UserContext } from "../../store/user-context";

import StyledCart from "./CartStyles";

import CartItem from "./CartItem";

const Cart = () => {
  const ctx = useContext(UserContext);

  console.log(ctx.cartItems);

  return (
    <StyledCart>
      <p>Cart</p>
      {ctx.cartItems &&
        ctx.cartItems.map((item) => (
          <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            // image={item.image}
          ></CartItem>
        ))}

      <div className="btn-order__container">
        <button className="btn-order">Order</button>
      </div>
    </StyledCart>
  );
};

export default Cart;
