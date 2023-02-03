import { render, screen, fireEvent } from "../../common/test-utils";
import CandyItem from "./CandyItem";

test("adds to cart", () => {
  render(<CandyItem id={""} name={""} price={0} image={""} description={""} />);
  const addBtn = screen.getByText("+");
  fireEvent.click(addBtn);
  fireEvent.click(addBtn);
  const itemAmount = screen.getByText("2");
  expect(itemAmount).toBeInTheDocument();
});
