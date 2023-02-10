import userEvent from "@testing-library/user-event";
import { act, render, screen } from "../../test-utils";
import { mockedCart } from "../../mocks/test-data";
import CartItem from "./CartItem";
import CartList from "./CartList";
import {
  defaultUserState,
  UserContext,
  userReducer,
} from "../../store/user-context";
import useUserContextProviderValue from "../../store/useUserContextProviderValue";

describe("cart list", () => {
  test("renders cart heading and total amount", () => {
    render(<CartList />);

    const emptyCartText = screen.getByText(
      /Cart is empty. Please add sweets to cart first!/i
    );

    expect(emptyCartText).toBeInTheDocument();
  });

  const Wrapper = () => {
    const value = useUserContextProviderValue(userReducer, {
      ...defaultUserState,
      cartItems: mockedCart,
    });

    // mock = () => items.filter (....)

    // value = {cartitems: MockedCart, removeItem: mock}

    return (
      <UserContext.Provider value={value}>
        <CartList />
      </UserContext.Provider>
    );
  };

  //FIXME:
  test("delete button removes item", async () => {
    render(<Wrapper />);

    const item1Heading = screen.queryByText(
      "Classic Chocolate Chip Cookies (20 pieces)",
      { exact: false }
    );
    expect(item1Heading).toBeInTheDocument();

    const item2Heading = screen.queryByText(
      "Moist Chocolate Muffins (4 pieces)",
      { exact: false }
    );

    expect(item2Heading).toBeInTheDocument();

    const delBtns = screen.getAllByTestId("delete-btn");
    const firstDelBtn = delBtns[0];
    const secondDelBtn = delBtns[1];

    await userEvent.click(firstDelBtn);
    expect(item1Heading).not.toBeInTheDocument();

    userEvent.click(secondDelBtn);
    expect(item2Heading).not.toBeInTheDocument();

    const cartItems = screen.queryAllByRole("listitem");
    expect(cartItems).toHaveLength(0);

    const itemImages = screen.queryAllByRole("img");
    expect(itemImages).toHaveLength(0);
  });
});
