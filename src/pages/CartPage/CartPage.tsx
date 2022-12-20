import { StyledCartPage } from "./CartPageStyles";

import Hero from "../../components/Hero/Hero";
import Cart from "../../components/Cart/Cart";

const CartPage = () => {
  return (
    <StyledCartPage>
      <Hero />
      <Cart />
    </StyledCartPage>
  );
};

export default CartPage;
