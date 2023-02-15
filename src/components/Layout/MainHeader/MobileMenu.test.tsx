import { render, screen } from "../../../test-utils";
import MobileMenu from "./MobileMenu";

describe("MobileMenu component", () => {
  test("renders buttons", () => {
    render(<MobileMenu toggleMenu={() => {}} menuVisible={true} />);

    const menuButtons: HTMLElement[] = screen.getAllByRole("button");
    expect(menuButtons).toHaveLength(3);

    const sweetsListBtn = screen.getByText(/sweets list/i);
    expect(sweetsListBtn).toBeInTheDocument();
  });
});
