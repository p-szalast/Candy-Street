import { render, screen } from "../../../common/test-utils";
import MainHeader from "./MainHeader";

describe("MainHeader component", () => {
  test("renders main heading", () => {
    render(<MainHeader />);
    const mainHeading = screen.getByText(/candy street/i);
    expect(mainHeading).toBeInTheDocument();
  });

  test("renders buttons", () => {
    render(<MainHeader />);
    const navBtns = screen.getAllByRole("button");
    expect(navBtns).not.toHaveLength(0);
  });
});
