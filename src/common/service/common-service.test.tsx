import { mockedSweets } from "../test-data";
import { getAvailableCandies } from "./common-service";
import { CandyItemObject } from "../types/common.types";

// import axios from "axios";
// jest.mock("axios");

describe("common-service", () => {
  test("fetches candies", async () => {
    //request to real API
    const candies: CandyItemObject[] = await getAvailableCandies();

    // const data = await (axios.get as jest.Mock).mockResolvedValue(mockedSweets);

    expect(candies).toMatchObject(mockedSweets);
  });
});
