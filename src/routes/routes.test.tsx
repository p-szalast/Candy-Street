import { render, screen, waitFor } from "../test-utils";
import userEvent from "@testing-library/user-event";

import App from "../App";

//FIXME: could be 1 file in App.test.tsx, but after mocking the navigation test crashes

describe("App routes (integration)", () => {
  test("navigates to Cart Page", async () => {
    render(<App />);
    const heroHeading = screen.getByText(/Order our delicious sweets now/i);
    expect(heroHeading).toBeInTheDocument();

    const cartBtn = screen.getByTestId("cartBtn");
    userEvent.click(cartBtn);

    await waitFor(() => {
      const cartMessage = screen.getByText(
        "Cart is empty. Please add sweets to cart first!"
      );
      expect(cartMessage).toBeInTheDocument();
    });
  });
});
