import { useContext, useState } from "react";
import { emptyAddressObject, UserContext } from "../../store/user-context";
import { useNavigate } from "react-router-dom";
import { navKeys } from "../../routes/routes";

import { FormikProps, useFormik } from "formik";
import { personalDataFormYupValidationSchema } from "../../common/helpers";

import PersonalDataForm from "./PersonalDataForm";

import Order from "../../models/order";

import { calcCartTotalAmount } from "../../common/helpers";
import { postOrder } from "../../common/service/common-service";

import toast from "react-hot-toast";

//Styles
import { StyledSummary } from "./SummaryStyles";
import {
  BtnsContainer,
  Button,
  EmptyListMsg,
  TotalAmountItem,
} from "../../common/styles/componentsStyles";

//Types
import {
  AddressObject,
  PersonalDataFormInputsObject,
} from "../../common/types/common.types";

const Summary = () => {
  const { cartItems, clearCart, address, setAddress } = useContext(UserContext);
  const [emptyCartError, setEmptyCartError] = useState<boolean>(false);
  const navigate = useNavigate();

  const confirmOrderHandler: (enteredAddress: AddressObject) => void = async (
    enteredAddress
  ) => {
    if (cartItems.length === 0) {
      toast.error("Please add sweets to cart first!");
      setEmptyCartError(true);
      return;
    }

    try {
      const newOrder = new Order(cartItems, enteredAddress);
      await postOrder(newOrder);

      //clearing
      setEmptyCartError(true);
      navigate(navKeys.main);
      toast.success("Your order has been sent successfully!");
      setAddress(emptyAddressObject);
      clearCart();
    } catch (error) {}
  };

  const formik: FormikProps<PersonalDataFormInputsObject> =
    useFormik<PersonalDataFormInputsObject>({
      initialValues: {
        firstName: address.firstName,
        lastName: address.lastName,
        phoneNumber: address.phoneNumber,
        street: address.street,
        houseNumber: address.houseNumber,
        city: address.city,
        postCode: address.postCode,
      },
      validationSchema: personalDataFormYupValidationSchema,

      onSubmit: (values) => {
        confirmOrderHandler(values);
      },
    });

  const handleBackToCart = () => {
    setAddress(formik.values);
    navigate(navKeys.cart);
  };

  const totalAmount = calcCartTotalAmount(cartItems);

  return (
    <StyledSummary>
      <PersonalDataForm formik={formik} />
      <TotalAmountItem>
        <p>Total Amount:</p> <strong>{totalAmount} zł</strong>
      </TotalAmountItem>
      {emptyCartError && (
        <EmptyListMsg>Please add sweets to cart first!</EmptyListMsg>
      )}
      <BtnsContainer>
        <Button onClick={handleBackToCart}>Back to Cart</Button>
        <Button
          className="call-to-action"
          // disabled={!formik.dirty}
          data-testid="confirm-btn"
          onClick={formik.submitForm}
        >
          Confirm Order
        </Button>
      </BtnsContainer>
    </StyledSummary>
  );
};

export default Summary;
