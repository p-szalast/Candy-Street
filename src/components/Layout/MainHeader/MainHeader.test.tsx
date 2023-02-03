import { fireEvent, render, screen } from "../../../common/test-utils";
import MainHeader from "./MainHeader";

describe("MainHeader component", () => {
  test("renders main heading", () => {
    render(<MainHeader />);
    const mainHeading = screen.getByText(/candy street/i);
    expect(mainHeading).toBeInTheDocument();
  });

  test("hiddes main page hero when clicking OrderHistory button", () => {
    //FIXME:
    render(<MainHeader />);
    const orderBtn = screen.getByText("OrderHistory");
    fireEvent.click(orderBtn);
    const mainPageParagraph: HTMLElement | undefined = screen.getByText(
      /Order our delicious sweets now!/i
    );
    expect(mainPageParagraph).not.toBeInTheDocument();
  });
});
