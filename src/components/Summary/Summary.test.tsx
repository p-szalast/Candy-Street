import { render, screen, waitFor } from "../../test-utils";
import userEvent from "@testing-library/user-event";

import Summary from "./Summary";

import UserContextProvider, {
  defaultUserState,
  UserContext,
  userReducer,
} from "../../store/user-context";

import { postOrder } from "../../common/service/common-service";
import useUserContextProviderValue from "../../store/useUserContextProviderValue";
import { Toaster } from "react-hot-toast";

describe("Summary", () => {
  //beforeall

  test("renders total amount tile", async () => {
    render(<Summary />);

    const totalAmount = screen.getByText(/total amount/i);
    expect(totalAmount).toBeInTheDocument();
  });

  const Wrapper = () => {
    return (
      <UserContext.Provider
        value={useUserContextProviderValue(userReducer, {
          ...defaultUserState,
          cartItems: [],
        })}
      >
        <Summary />
        <Toaster />
      </UserContext.Provider>
    );
  };

  test("shows toast error if nothing is in the cart after clicked confirm button", async () => {
    render(<Wrapper />);

    const confirmButton = screen.getByTestId("confirm-btn");
    userEvent.click(confirmButton);

    //TODO: Address needs to be passed

    await waitFor(() => {
      const emptyCartMsg = screen.getByText(
        "Please add sweets to cart first!",
        {
          exact: false,
        }
      );
      expect(emptyCartMsg).toBeInTheDocument();
    });
  });
});
