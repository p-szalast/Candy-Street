import { act, cleanup, render, screen, waitFor } from "../../test-utils";
import userEvent from "@testing-library/user-event";

import Summary from "./Summary";

import {
  defaultUserState,
  UserContext,
  userReducer,
} from "../../store/user-context";

import useUserContextProviderValue from "../../store/useUserContextProviderValue";
import { mockedAddress, mockedCart } from "../../mocks/test-data";

const Wrapper = () => {
  return (
    <UserContext.Provider
      value={useUserContextProviderValue(userReducer, defaultUserState)}
    >
      <Summary />
    </UserContext.Provider>
  );
};

const WrapperWithCart = () => {
  return (
    <UserContext.Provider
      value={useUserContextProviderValue(userReducer, {
        ...defaultUserState,
        cartItems: mockedCart,
      })}
    >
      <Summary />
    </UserContext.Provider>
  );
};

const user = userEvent.setup();

describe("Summary", () => {
  beforeEach(() => {
    cleanup();
  });

  test("renders total amount tile", async () => {
    render(<Wrapper />);

    //dummy function to avoid console.errors
    await act(async () => {
      await Promise.resolve();
    });

    const totalAmount = screen.getByText(/total amount/i);
    expect(totalAmount).toBeInTheDocument();
  });

  test("Shows required error messages", async () => {
    render(<Wrapper />);

    const firstName = screen.getByLabelText("First Name");
    const lastName = screen.getByLabelText("Last Name");

    firstName.focus();
    await user.click(lastName);

    const requiredMsg = await screen.findAllByText("Required", {
      exact: false,
    });

    expect(requiredMsg).toHaveLength(1);
  });

  test("shows no errors when form fileld correctly", async () => {
    render(<WrapperWithCart />);

    await act(async () => {
      await Promise.resolve();
    });

    const firstName = screen.getByLabelText("First Name");
    const lastName = screen.getByLabelText("Last Name");
    const phoneNumber = screen.getByLabelText("Phone Number");
    const street = screen.getByLabelText("Street");
    const houseNumber = screen.getByLabelText("House Number");
    const city = screen.getByLabelText("City");
    const postCode = screen.getByLabelText("Post Code");

    await user.type(firstName, "Mariusz");
    await user.type(lastName, "Gębala");
    await user.type(phoneNumber, "667552938");
    await user.type(street, "Morwowa");
    await user.type(houseNumber, "19");
    await user.type(city, "Mrągowo");
    await user.type(postCode, "20-161");
    const confirmButton = screen.getByTestId("confirm-btn");
    await user.click(confirmButton);

    const requiredMsg = screen.queryByText("Required", {
      exact: false,
    });
    const errorMsgMust = screen.queryByText("must", {
      exact: false,
    });
    const errorMsgWrong = screen.queryByText("wrong", {
      exact: false,
    });
    expect(requiredMsg).not.toBeInTheDocument();
    expect(errorMsgMust).not.toBeInTheDocument();
    expect(errorMsgWrong).not.toBeInTheDocument();
  });

  const WrapperWithAddress = () => {
    return (
      <UserContext.Provider
        value={useUserContextProviderValue(userReducer, {
          ...defaultUserState,
          cartItems: [],
          address: mockedAddress,
        })}
      >
        <Summary />
      </UserContext.Provider>
    );
  };

  test("shows toast error if nothing is in the cart after clicked confirm button", async () => {
    render(<WrapperWithAddress />);

    await act(async () => {
      await Promise.resolve();
    });

    const confirmButton = screen.getByTestId("confirm-btn");
    await userEvent.click(confirmButton);

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
