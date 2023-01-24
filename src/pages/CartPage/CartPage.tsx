import { StyledPage } from "../../common/styles/componentsStyles";

import Hero from "../../components/Layout/Hero/Hero";
import CartList from "../../components/Cart/CartList";

const CartPage = () => {
  return (
    <StyledPage>
      <Hero />
      <CartList />
    </StyledPage>
  );
};

export default CartPage;
