import userEvent from "@testing-library/user-event";
import { SortTypes } from "../../common/types/common.types";
import { cleanup, render, screen } from "../../test-utils";
import SweetsList from "./SweetsList";

beforeEach(() => {
  cleanup();
});

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

  test("sets sort type", async () => {
    render(<SweetsList />);

    const mockedType = SortTypes.ALFABETICAL_DSC as string;

    const sortSelect = screen.getByTestId("sortSelect");
    const options = screen.getAllByTestId("sortOption");

    userEvent.selectOptions(sortSelect, mockedType);

    expect(options[0] as HTMLOptionElement).toBeTruthy();
  });
});
