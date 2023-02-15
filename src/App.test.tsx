import { act, render, screen, waitFor } from "./test-utils";
import userEvent from "@testing-library/user-event";

import App from "./App";

// beforeEach(() => {
//   cleanup();
// });  //compared to sweetslist ???

describe("App", () => {
  test("renders hero heading", async () => {
    render(<App />);
    const heroHeading = screen.getByText(/Order our delicious sweets now/i);

    await act(() => {
      expect(heroHeading).toBeInTheDocument();
    });
  });

  test("navigates to Cart Page", async () => {
    render(<App />);
    //TODO: sort
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

  // test("saves address after going back from summary", async () => {});
});
