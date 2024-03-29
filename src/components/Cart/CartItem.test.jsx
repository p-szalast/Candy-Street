import { render, screen } from "../../test-utils";
import CartItem from "./CartItem";
import userEvent from "@testing-library/user-event";

import { mockedCart } from "../../mocks/test-data";

describe("cart item", () => {
  test("adds to cart", async () => {
    render(
      <CartItem
        id={mockedCart[0].id}
        name={mockedCart[0].name}
        price={mockedCart[0].price}
        amount={mockedCart[0].amount} // amount: 2
      />
    );

    const addBtn = screen.getByText("+");
    await userEvent.click(addBtn);
    await userEvent.click(addBtn);
    await userEvent.click(addBtn);
    const itemAmount = screen.getByText("5");
    expect(itemAmount).toBeInTheDocument();
  });

  test("adds to cart and subtracts", async () => {
    render(
      <CartItem
        id={mockedCart[0].id}
        name={mockedCart[0].name}
        price={mockedCart[0].price}
        amount={mockedCart[0].amount} // amount: 2
      />
    );
    const subBtn = screen.getByText("-");
    await userEvent.click(subBtn);
    const itemAmount = screen.getByText("1");
    expect(itemAmount).toBeInTheDocument();
  });
});
