import { render, screen } from "../../test-utils";
import OrderItem from "./OrderItem";
import { mockedOrders } from "../../mocks/test-data";

describe("OrderItem component", () => {
  test("renders all parts of order history item", async () => {
    render(
      <OrderItem
        orderedCandies={mockedOrders[0].orderedCandies}
        address={{
          firstName: mockedOrders[0].address.firstName,
          lastName: mockedOrders[0].address.lastName,
          phoneNumber: mockedOrders[0].address.phoneNumber,
          street: mockedOrders[0].address.street,
          houseNumber: mockedOrders[0].address.houseNumber,
          postCode: mockedOrders[0].address.postCode,
          city: mockedOrders[0].address.city,
        }}
        date={mockedOrders[0].date}
      />
    );

    const orderItemPersonalDataHeading = await screen.findByText(
      /Maciej Skiba - Chałwowa 73, 10-203 Wałbrzych/i
    );

    const orderDay = await screen.findByText(/25/i);
    const orderMonth = await screen.findByText(/11/i);
    const orderYear = await screen.findByText(/2023/i);
    const orderCandiesText = await screen.findByText(
      "4x Classic Chocolate Chip Cookies (20 pieces), 3x Candy Canes (12 pieces)",
      { exact: false }
    );
    const totalAmount = await screen.findByText(/51.5 zł/i);

    const elements = [
      orderItemPersonalDataHeading,
      orderDay,
      orderMonth,
      orderYear,
      orderCandiesText,
      totalAmount,
    ];

    elements.forEach((el) => expect(el).toBeInTheDocument());
  });
});
