import { act, render, screen, waitFor } from "./test-utils";
import userEvent from "@testing-library/user-event";

import App from "./App";

beforeEach(() => {
  //returning to the default page
  window.history.pushState({}, "Home", "/");
});

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
    const heroHeading = screen.getByText(/Order our delicious sweets now/i);
    expect(heroHeading).toBeInTheDocument();

    const cartBtn = screen.getByTestId("cartBtn");
    await userEvent.click(cartBtn);

    await waitFor(() => {
      const cartMessage = screen.getByText(
        "Cart is empty. Please add sweets to cart first!"
      );
      expect(cartMessage).toBeInTheDocument();
    });
  });
});
