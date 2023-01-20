import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { navKeys } from "../../routes/routes";

import { fetchOrderHistory } from "../../common/service/common-service";
import OrderItem from "./OrderItem";

import { Button } from "../../common/styles/componentsStyles";
import { StyledOrderHistoryList } from "./OrderHistoryListStyles";

import { OrderInterface } from "../../common/types/common.types";

const OrderHistoryList = () => {
  const [orders, setOrders] = useState<OrderInterface[] | null>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await fetchOrderHistory();
      setOrders(data);
    };
    fetchOrders();
  }, []);

  //guard clause
  if (!orders)
    return <p>No orders. Please make your fisrt order to see history!</p>;

  return (
    <StyledOrderHistoryList>
      {orders &&
        orders.map((item) => (
          <OrderItem
            orderedCandies={item.orderedCandies}
            address={item.address}
            date={item.date}
            // TODO:
            // key={item.date}
            key={Math.random.toString()}
          />
        ))}
      <NavLink className="btn-go-to-cart__container" to={navKeys.main}>
        <Button>Back to Sweets List</Button>
      </NavLink>
    </StyledOrderHistoryList>
  );
};

export default OrderHistoryList;
