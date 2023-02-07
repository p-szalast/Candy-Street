import { render, screen } from "../../common/test-utils";
import SweetsList from "./SweetsList";

describe("SweetsList component", () => {
  test("render sweets if request succeed", async () => {
    render(<SweetsList />);
    const sweetItems = await screen.findAllByRole("listitem");
    expect(sweetItems).toHaveLength(2);
  });

  test("renders images", async () => {
    render(<SweetsList />);

    const images = await screen.findAllByRole("img");
    expect(images).toHaveLength(2);
  });

  test("renders candy name", async () => {
    render(<SweetsList />);
    const candyItemHeading = await screen.findByText(
      "Christmas Tree Lolipops (10 piesces)",
      { exact: false }
    );
    expect(candyItemHeading).toBeInTheDocument();
  });
});
