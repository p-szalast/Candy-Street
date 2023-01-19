import { StyledCartPage } from "./CartPageStyles";

import Hero from "../../components/Layout/Hero/Hero";
import Cart from "../../components/Cart/CartList";

const CartPage = () => {
  return (
    <StyledCartPage>
      <Hero />
      <Cart />
    </StyledCartPage>
  );
};

export default CartPage;
