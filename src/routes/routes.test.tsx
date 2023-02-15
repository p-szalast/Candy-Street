import { act, render, screen } from "../test-utils";
import userEvent from "@testing-library/user-event";

import App from "../App";

//Mocking Navigation
const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockUseNavigate,
}));

describe("App (routes)", () => {
  test("Call the funtion to cart page", async () => {
    render(<App />);

    const heroHeading = screen.getByText(/Order our delicious sweets now/i);
    expect(heroHeading).toBeInTheDocument();

    const cartBtn = screen.getByTestId("cartBtn");

    await userEvent.click(cartBtn);

    expect(mockUseNavigate).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledTimes(1);
    expect(mockUseNavigate).toHaveBeenCalledWith("/cart");
  });
});
