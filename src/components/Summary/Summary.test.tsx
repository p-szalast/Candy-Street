import { render, screen } from "../../common/test-utils";
import userEvent from "@testing-library/user-event";

import Summary from "./Summary";

import { postOrder } from "../../common/service/common-service";

describe("Summary", () => {
  test("renders total amount tile", async () => {
    render(<Summary />);

    const totalAmount = screen.getByText(/total amount/i);
    expect(totalAmount).toBeInTheDocument();
  });

  test("sends post request after clicked confirm button", () => {
    //FIXME: getByRole, aria-label
    const confirmButton = screen.getByText("Confirm Order", { exact: false });
    userEvent.click(confirmButton);
    expect(postOrder).toHaveBeenCalled();
  });
});
