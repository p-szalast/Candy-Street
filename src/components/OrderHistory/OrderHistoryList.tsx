import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navKeys } from "../../routes/routes";

import { fetchOrderHistory } from "../../common/service/common-service";
import OrderItem from "./OrderItem";

import { Button, PageHeading } from "../../common/styles/componentsStyles";
import {
  BtnsContainer,
  StyledOrderHistoryList,
} from "./OrderHistoryListStyles";

import { OrderInterface } from "../../common/types/common.types";

const OrderHistoryList = () => {
  const [orders, setOrders] = useState<OrderInterface[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await fetchOrderHistory();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <StyledOrderHistoryList>
      <BtnsContainer>
        <NavLink className="btn-go-to-cart__container" to={navKeys.main}>
          <Button>Back</Button>
        </NavLink>
      </BtnsContainer>
      <PageHeading>Order History</PageHeading>
      {orders &&
        orders.map((item) => (
          <OrderItem
            orderedCandies={item.orderedCandies}
            address={item.address}
            date={item.date}
            key={item.date}
          />
        ))}
      {!orders ||
        (orders.length === 0 && (
          <p>No orders. Please make your fisrt order to see history!</p>
        ))}
    </StyledOrderHistoryList>
  );
};

export default OrderHistoryList;
