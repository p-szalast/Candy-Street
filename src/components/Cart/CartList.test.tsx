import userEvent from "@testing-library/user-event";
import { render, screen } from "../../test-utils";
import { mockedCart } from "../../mocks/test-data";
import CartList from "./CartList";
import {
  defaultUserState,
  UserContext,
  userReducer,
} from "../../store/user-context";
import useUserContextProviderValue from "../../store/useUserContextProviderValue";

const Wrapper = () => {
  const value = useUserContextProviderValue(userReducer, {
    ...defaultUserState,
    cartItems: mockedCart,
  });

  return (
    <UserContext.Provider value={value}>
      <CartList />
    </UserContext.Provider>
  );
};

describe("cart list", () => {
  test("renders cart heading and total amount", () => {
    render(<CartList />);

    const emptyCartText = screen.getByText(
      /Cart is empty. Please add sweets to cart first!/i
    );

    expect(emptyCartText).toBeInTheDocument();
  });

  test("delete button removes item", async () => {
    render(<Wrapper />);

    const item1Heading = screen.queryByText(
      "Classic Chocolate Chip Cookies (20 pieces)",
      { exact: false }
    );
    const item2Heading = screen.queryByText(
      "Moist Chocolate Muffins (4 pieces)",
      { exact: false }
    );

    expect(item1Heading).toBeInTheDocument();
    expect(item2Heading).toBeInTheDocument();

    const delBtns = screen.getAllByTestId("delete-btn");
    const firstDelBtn = delBtns[0];
    userEvent.click(firstDelBtn);
    expect(item1Heading).not.toBeInTheDocument();

    const secondDelBtn = delBtns[1];
    userEvent.click(secondDelBtn);
    expect(item2Heading).not.toBeInTheDocument();

    const itemImages = screen.queryAllByRole("img");
    const cartItems = screen.queryAllByRole("listitem");
    expect(itemImages).toHaveLength(0);
    expect(cartItems).toHaveLength(0);
  });
});
