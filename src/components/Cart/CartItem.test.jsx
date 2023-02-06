import { render, screen } from "../../common/test-utils";
import CartItem from "./CartItem";
import userEvent from "@testing-library/user-event";

describe("cart item", () => {
  test("adds to cart", () => {
    render(<CartItem id="" name="" price={0} amount={1} />);

    const addBtn = screen.getByText("+");
    userEvent.click(addBtn);
    userEvent.click(addBtn);
    userEvent.click(addBtn);
    const itemAmount = screen.getByText("4");
    expect(itemAmount).toBeInTheDocument();
  });

  test("adds to cart and subtracts", () => {
    render(<CartItem id="" name="" price={0} amount={3} />);
    const subBtn = screen.getByText("-");
    userEvent.click(subBtn);
    userEvent.click(subBtn);
    const itemAmount = screen.getByText("1");
    expect(itemAmount).toBeInTheDocument();
  });
});
