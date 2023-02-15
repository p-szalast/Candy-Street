import { render, screen } from "../../test-utils";
import OrderHistoryList from "./OrderHistoryList";

describe("OrderHistoryList component", () => {
  test("render orders if request succeed", async () => {
    render(<OrderHistoryList />);
    const orderItems = await screen.findAllByRole("listitem");
    expect(orderItems).toHaveLength(1);
  });

  test("orders contain proper text content", async () => {
    render(<OrderHistoryList />);
    const name = await screen.findByText(/Maciej Skiba/i);
    expect(name).toBeInTheDocument();
  });
});
