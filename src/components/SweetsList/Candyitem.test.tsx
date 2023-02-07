import { render, screen } from "../../common/test-utils";
import CandyItem from "./CandyItem";
import userEvent from "@testing-library/user-event";

import { mockedSweets } from "../../mocks/test-data";

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

  test("renders image, name, description and price", async () => {
    render(
      <CandyItem
        id={mockedSweets[1].id}
        name={mockedSweets[1].name}
        price={mockedSweets[1].price}
        image={mockedSweets[1].image}
        description={mockedSweets[1].description}
      />
    );

    const candyImage = await screen.findByRole("img");
    const candyName = await screen.findByText(
      "Christmas Tree Lolipops (10 piesces)",
      { exact: false }
    );
    const candyDescription = await screen.findByText(
      "Great for Holiday Gifts. Perfect for tucking in a holiday candy dish or stocking! Mixed fruit flavor. Individually wrapped. Fat-free.",
      { exact: false }
    );
    const candyPrice = await screen.findByText("4.5 zł");
    expect(candyImage).toBeInTheDocument();
    expect(candyName).toBeInTheDocument();
    expect(candyDescription).toBeInTheDocument();
    expect(candyPrice).toBeInTheDocument();
  });
});
