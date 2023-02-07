import { render, screen } from "../common/test-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App", () => {
  test("hiddes main page hero when clicking OrderHistory button", () => {
    render(<App />);
    const orderBtn = screen.getByText("OrderHistory");
    const mainPageParagraph: HTMLElement | undefined = screen.getByText(
      /Order our delicious sweets now!/i
    );
    userEvent.click(orderBtn);
    expect(mainPageParagraph).not.toBeInTheDocument();
  });
});
