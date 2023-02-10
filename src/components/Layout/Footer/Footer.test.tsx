import { render, screen } from "../../../test-utils";
import Footer from "./Footer";

test("renders footer text", () => {
  render(<Footer />);
  const heroHeading = screen.getByText(
    /© 2023 | Przemysław Szalast for Capgemini React Academy | All Rights Reserved./i
  );
  expect(heroHeading).toBeInTheDocument();
});
