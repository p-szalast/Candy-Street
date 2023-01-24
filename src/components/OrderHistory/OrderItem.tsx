import { OrderInterface } from "../../common/types/common.types";

import StyledOrderItem, {
  OrderContainer,
  OrderDetailsContainer,
} from "./OrderItemStyles";

const OrderItem = (props: OrderInterface) => {
  //Formatting date
  let formattedDate;
  if (typeof props.date === "string") {
    const date: Date = new Date(props.date);
    formattedDate = date.toLocaleDateString();
  }

  //Formatting candy items text
  const orderedContent: string[] = props.orderedCandies.map(
    (item) => `${item.amount}x ${item.name}`
  );
  const orderedContentJoined: string = orderedContent.join(", ");

  //Calculating TotalAmount
  const totalAmount = props.orderedCandies.reduce(
    (acc, cur) => acc + cur.amount * cur.price,
    0
  );

  return (
    <StyledOrderItem>
      <OrderContainer>
        <OrderDetailsContainer>
          <h3> {formattedDate}</h3>
          <h4>{`${props.address.firstName} ${props.address.lastName} - ${props.address.street} ${props.address.houseNumber}, ${props.address.postCode} ${props.address.city}`}</h4>
          <p>{orderedContentJoined}</p>
        </OrderDetailsContainer>
        <p>{totalAmount} zł</p>
      </OrderContainer>
    </StyledOrderItem>
  );
};

export default OrderItem;
