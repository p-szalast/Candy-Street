import { calcCartTotalAmount } from "./helpers";
import { mockedCart } from "./test-data";

describe("helper functions", () => {
  test("calcs total amount", () => {
    expect(calcCartTotalAmount(mockedCart)).toBe(52);
  });
});
