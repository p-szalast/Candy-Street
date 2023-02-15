import { mockedSweets } from "../../mocks/test-data";
import {
  getAvailableCandies,
  postOrder,
  setLocalStorageSortType,
  getLocalStorageSortType,
} from "./common-service";
import { CandyItemObject, SortTypes } from "../types/common.types";
import { newOrder } from "../../mocks/test-data";

describe("common-service - http", () => {
  test("fetches candies", async () => {
    const candies: CandyItemObject[] = await getAvailableCandies();
    expect(candies).toMatchObject(mockedSweets);
  });

  test("sends post requests", async () => {
    const resp = await postOrder(newOrder);
    expect(resp).toMatchObject({ ...newOrder, id: "99" });
  });
});

describe("common-service - local storage", () => {
  test("local storage functions work correctly", () => {
    //Saving current value
    const currentItem: string | null = localStorage.getItem("sortType");

    //Test (case 1)
    const testSortType1: SortTypes = SortTypes.BY_PRICE_DSC;
    setLocalStorageSortType(testSortType1);
    const receivedItem1 = getLocalStorageSortType();
    expect(testSortType1).toEqual(receivedItem1);

    //Test (case 2)
    const testSortType2: SortTypes = SortTypes.ALFABETICAL_DSC;
    setLocalStorageSortType(testSortType2);
    const receivedItem2 = getLocalStorageSortType();
    expect(testSortType2).toEqual(receivedItem2);

    //Restoring current value
    localStorage.setItem("sortType", currentItem || SortTypes.ALFABETICAL_ASC);
  });
});
