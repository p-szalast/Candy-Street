import { useState, useEffect, useCallback } from "react";
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
  LoadingBox,
} from "../../common/styles/componentsStyles";
import {
  BtnsContainer,
  StyledOrderHistoryList,
} from "./OrderHistoryListStyles";

import { OrderInterface } from "../../common/types/common.types";
import Loader from "../../common/styles/loader";
import toast from "react-hot-toast";

const OrderHistoryList = () => {
  const [orders, setOrders] = useState<OrderInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const fetchOrders = useCallback(async () => {
    setIsLoading(true);
    setError(false);

    try {
      const data = await fetchOrderHistory();
      if (!data) {
        throw new Error("no order data available");
      }
      setOrders(data);
    } catch (e: any) {
      toast.error(`Failed to fetch orders (${e.message})`);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

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
      {isLoading && !error && (
        <LoadingBox>
          <p>Loading...</p>
          <Loader className="loader"></Loader>
        </LoadingBox>
      )}
      {error && !isLoading && (
        <VFlexBox $hasError={error}>
          <div className="error-message">Failed to load orders</div>
        </VFlexBox>
      )}
      {orders.length === 0 && !isLoading && !error && (
        <EmptyListMsg>
          No orders. Please make your fisrt order to see history!
        </EmptyListMsg>
      )}
    </StyledOrderHistoryList>
  );
};

export default OrderHistoryList;
