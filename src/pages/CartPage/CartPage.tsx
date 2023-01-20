import { StyledPage } from "../../common/styles/componentsStyles";

import Hero from "../../components/Layout/Hero/Hero";
import Cart from "../../components/Cart/CartList";

const CartPage = () => {
  return (
    <StyledPage>
      <Hero />
      <Cart />
    </StyledPage>
  );
};

export default CartPage;
