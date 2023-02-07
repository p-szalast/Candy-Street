import { render, screen } from "../../common/test-utils";
import SweetsList from "./SweetsList";

describe("SweetsList component", () => {
  test("render sweets if request succeed", async () => {
    render(<SweetsList />);
    const sweetItems = await screen.findAllByRole("listitem");
    expect(sweetItems).toHaveLength(1);
  });
});
