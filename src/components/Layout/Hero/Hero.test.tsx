import { render, screen } from "../../../common/test-utils";
import Hero from "./Hero";

test("renders hero", () => {
  render(<Hero />);

  const heroHeading = screen.getByText(/Order our delicious sweets now/i);
  expect(heroHeading).toBeInTheDocument();
});
