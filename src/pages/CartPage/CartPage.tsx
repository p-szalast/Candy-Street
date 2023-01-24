import { StyledPage } from "../../common/styles/componentsStyles";

import Hero from "../../components/Layout/Hero/Hero";
import CartList from "../../components/Cart/CartList";

const CartPage = () => {
  return (
    <div style={{ height: "100vh" }}>
      <StyledPage>
        <Hero />
        <CartList />
      </StyledPage>
    </div>
  );
};

export default CartPage;
