import { act, render, screen, waitFor } from "../../test-utils";
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
      value={useUserContextProviderValue(userReducer, {
        ...defaultUserState,
        // cartItems: [],
      })}
    >
      <Summary />
    </UserContext.Provider>
  );
};

describe("Summary", () => {
  test("renders total amount tile", async () => {
    //FIXME: (passes with errors)
    // render(<Wrapper />);
    // // await waitFor(() => {
    // const totalAmount = screen.getByText(/total amount/i);
    // expect(totalAmount).toBeInTheDocument();
    // // });
  });

  test("Shows required error messages", async () => {
    render(<Wrapper />);
    const confirmButton = screen.getByTestId("confirm-btn");
    userEvent.click(confirmButton);

    const requiredMsg = await screen.findAllByText("Required", {
      exact: false,
    });

    expect(requiredMsg).toHaveLength(7);
  });

  test("shows no errors when form fileld correctly", async () => {
    //FIXME: (passes with errors)
    // const WrapperWithCart = () => {
    //   return (
    //     <UserContext.Provider
    //       value={useUserContextProviderValue(userReducer, {
    //         ...defaultUserState,
    //         cartItems: mockedCart,
    //       })}
    //     >
    //       <Summary />
    //     </UserContext.Provider>
    //   );
    // };
    // render(<WrapperWithCart />);
    //   const firstName = await screen.findByLabelText("First Name");
    //   const lastName = await screen.findByLabelText("Last Name");
    //   const phoneNumber = await screen.findByLabelText("Phone Number");
    //   const street = await screen.findByLabelText("Street");
    //   const houseNumber = await screen.findByLabelText("House Number");
    //   const city = await screen.findByLabelText("City");
    //   const postCode = await screen.findByLabelText("Post Code");
    //   userEvent.type(firstName, "Mariusz");
    //   userEvent.type(lastName, "Gębala");
    //   userEvent.type(phoneNumber, "667552938");
    //   userEvent.type(street, "Morwowa");
    //   userEvent.type(houseNumber, "19");
    //   userEvent.type(city, "Mrągowo");
    //   userEvent.type(postCode, "20-161");
    //   const confirmButton = screen.getByTestId("confirm-btn");
    //   userEvent.click(confirmButton);
    // });
    //     // await waitFor(() => {
    //     const requiredMsg = screen.queryByText("Required", {
    //       exact: false,
    //     });
    //     const errorMsgMust = screen.queryByText("must", {
    //       exact: false,
    //     });
    //     const errorMsgWrong = screen.queryByText("wrong", {
    //       exact: false,
    //     });
    //     expect(requiredMsg).not.toBeInTheDocument();
    //     expect(errorMsgMust).not.toBeInTheDocument();
    //     expect(errorMsgWrong).not.toBeInTheDocument();
    //     // });
  });

  //   //   //////////////////////////////////

  //   //   // const spy = jest.spyOn(Summary.prototype, "confirmOrderHandler");

  //   //   // // console.log(confirmButton);
  //   //   // // confirmButton.setAttribute("onClick", mockedPostOrder);

  //   //   // expect(spy).toHaveBeenCalled();

  //   //   // const spyOn = jest.spyOn(confirmButton, "onClick");

  //   //   // await waitFor(() => {
  //   //   //   const toast = screen.getByText("Your order has been sent successfully!", {
  //   //   //     exact: false,
  //   //   //   });

  //   //   // const mainPageElement = screen.getByText("sort", {
  //   //   //   exact: false,
  //   //   // });
  //   //   //   expect(toast).toBeInTheDocument();
  //   //   // });

  //   //   // expect(spyOn).toHaveBeedCalledWith({
  //   //   //   cartItems: mockedCart,
  //   //   //   address: {
  //   //   //     firstName: "Mariusz",
  //   //   //     lastName: "Gębala",
  //   //   //     phoneNumber: "667552938",
  //   //   //     street: "Morwowa",
  //   //   //     houseNumber: "19",
  //   //   //     postCode: "Mrągowo",
  //   //   //     city: "20-161",
  //   //   //   },

  //   //   // });

  test("shows toast error if nothing is in the cart after clicked confirm button", async () => {
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
    render(<WrapperWithAddress />);

    const confirmButton = screen.getByTestId("confirm-btn");
    userEvent.click(confirmButton);

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
