import { render, screen } from "../../common/test-utils";
import CandyItem from "./CandyItem";
import userEvent from "@testing-library/user-event";

describe("candy item", () => {
  test("adds to cart", () => {
    render(
      <CandyItem id={""} name={""} price={0} image={""} description={""} />
    );
    const addBtn = screen.getByText("+");
    userEvent.click(addBtn);
    userEvent.click(addBtn);
    const itemAmount = screen.getByText("2");
    expect(itemAmount).toBeInTheDocument();
  });

  test("adds to cart and subtracts", () => {
    render(
      <CandyItem id={""} name={""} price={0} image={""} description={""} />
    );
    const addBtn = screen.getByText("+");
    const subBtn = screen.getByText("-");
    userEvent.click(addBtn);
    userEvent.click(addBtn);
    userEvent.click(subBtn);
    const itemAmount = screen.getByText("1");
    expect(itemAmount).toBeInTheDocument();
  });
});
