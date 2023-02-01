import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { navKeys } from "../../routes/routes";

import { fetchOrderHistory } from "../../common/service/common-service";
import OrderItem from "./OrderItem";

import {
  Button,
  Container,
  EmptyListMsg,
  PageHeading,
  VFlexBox,
} from "../../common/styles/componentsStyles";
import {
  BtnsContainer,
  StyledOrderHistoryList,
} from "./OrderHistoryListStyles";

import { OrderInterface } from "../../common/types/common.types";
import Loader from "../../common/styles/loader";

const OrderHistoryList = () => {
  const [orders, setOrders] = useState<OrderInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);

      const data = await fetchOrderHistory();

      if (!data) {
        setIsLoading(false);
        return;
      }

      setOrders(data);
      setIsLoading(false);
    };
    fetchOrders();
  }, []);

  const hadnleBackToSweetsList = () => {
    navigate(navKeys.main);
  };

  return (
    <StyledOrderHistoryList>
      <BtnsContainer>
        <Container className="btn-go-to-cart__container">
          <Button onClick={hadnleBackToSweetsList}>Back</Button>
        </Container>
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
      {isLoading && (
        <VFlexBox>
          <p>Loading...</p>
          <Loader className="loader"></Loader>
        </VFlexBox>
      )}
      {orders.length === 0 && !isLoading && (
        <EmptyListMsg>
          No orders. Please make your fisrt order to see history!
        </EmptyListMsg>
      )}
    </StyledOrderHistoryList>
  );
};

export default OrderHistoryList;
