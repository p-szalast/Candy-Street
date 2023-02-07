import { mockedSweets } from "../../mocks/test-data";
import { getAvailableCandies } from "./common-service";
import { CandyItemObject } from "../types/common.types";

describe("common-service", () => {
  //TODO: delete
  test("fetches candies", async () => {
    //request to real API
    const candies: CandyItemObject[] = await getAvailableCandies();

    expect(candies).toMatchObject(mockedSweets);
  });
});
