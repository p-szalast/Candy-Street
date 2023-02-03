import { render, screen } from "../../common/test-utils";
import axios from "axios";
import SweetsList from "./SweetsList";
import { mockedSweets } from "../../common/test-data";

//setting up axios
// jest.mock("axios");

describe("SweetsList component", () => {
  test("render sweets if request succeed", async () => {
    // const resp = {
    //   data: mockedSweets,
    // };
    // (axios.get as jest.Mock).mockResolvedValueOnce(resp);
    render(<SweetsList />);
    const sweetItems = await screen.findAllByRole("listitem");
    expect(sweetItems).toHaveLength(1);
  });
});
