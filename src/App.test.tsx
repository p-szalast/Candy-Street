import { act, render, screen, waitFor } from "./test-utils";
import userEvent from "@testing-library/user-event";

import App from "./App";

//Mocking Navigation
const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockUseNavigate,
}));

describe("App", () => {
  test("renders hero heading", async () => {
    // eslint-disable-next-line testing-library/no-unnecessary-act
    render(<App />);
    const heroHeading = screen.getByText(/Order our delicious sweets now/i);

    await act(() => {
      expect(heroHeading).toBeInTheDocument();
    });
  });

  test("Call the funtion to cart page", async () => {
    render(<App />);

    const heroHeading = screen.getByText(/Order our delicious sweets now/i);
    expect(heroHeading).toBeInTheDocument();

    const cartBtn = screen.getByTestId("cartBtn");

    userEvent.click(cartBtn);

    await act(() => {
      expect(mockUseNavigate).toHaveBeenCalled();
      expect(mockUseNavigate).toHaveBeenCalledTimes(1);
      expect(mockUseNavigate).toHaveBeenCalledWith("/cart");
    });
  });
});
