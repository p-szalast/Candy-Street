import { OrderInterface } from "../../common/types/common.types";

import StyledOrderItem from "./OrderItemStyles";

const OrderItem = (props: OrderInterface) => {
  return (
    <StyledOrderItem>
      {/* TODO:  Item Content*/}
      <h3>
        {props.address.firstName} {props.address.lastName}
      </h3>
    </StyledOrderItem>
  );
};

export default OrderItem;
