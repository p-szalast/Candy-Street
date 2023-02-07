import { render, screen } from "../../common/test-utils";
import CartList from "./CartList";

describe("cart list", () => {
  test("renders cart heading and total amount", () => {
    render(<CartList />);

    const emptyCartText = screen.getByText(
      /Cart is empty. Please add sweets to cart first!/i
    );

    expect(emptyCartText).toBeInTheDocument();
  });
});
