import { useContext } from "react";
import { emptyAddressObject, UserContext } from "../../store/user-context";
import { useNavigate } from "react-router-dom";
import { navKeys } from "../../routes/routes";

import { FormikProps, useFormik } from "formik";
import { personalDataFormYupValidationSchema } from "../../common/helpers";

import PersonalDataForm from "./PersonalDataForm";

import Order from "../../models/order";

import { calcCartTotalAmount } from "../../common/helpers";
import { postOrder } from "../../common/service/common-service";

//Styles
import { StyledSummary } from "./SummaryStyles";
import {
  BtnsContainer,
  Button,
  TotalAmountItem,
} from "../../common/styles/componentsStyles";

//Types
import {
  AddressObject,
  PersonalDataFormInputsObject,
} from "../../common/types/common.types";

const Summary = () => {
  const { cartItems, clearCart, address, setAddress } = useContext(UserContext);
  const navigate = useNavigate();

  const confirmOrderHandler: (enteredAddress: AddressObject) => void = (
    enteredAddress
  ) => {
    const newOrder = new Order(cartItems, enteredAddress);
    postOrder(newOrder);

    //TODO:delete
    console.log(newOrder);

    clearCart();
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
        setAddress(emptyAddressObject);
        confirmOrderHandler(values);
        navigate(navKeys.main);
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
      <BtnsContainer>
        <Button onClick={handleBackToCart}>Back to Cart</Button>
        <Button disabled={!formik.dirty} onClick={formik.submitForm}>
          Confirm Order
        </Button>
      </BtnsContainer>
    </StyledSummary>
  );
};

export default Summary;
