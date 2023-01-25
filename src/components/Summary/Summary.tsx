import { useContext } from "react";
import { UserContext } from "../../store/user-context";

import PersonalDataForm from "./PersonalDataForm";

import Order from "../../models/order";

import { calcCartTotalAmount } from "../../common/helpers";

import { postOrder } from "../../common/service/common-service";

import { StyledSummary } from "./SummaryStyles";
import {
  BtnsContainer,
  Button,
  TotalAmountItem,
} from "../../common/styles/componentsStyles";

import {
  AddressObject,
  PersonalDataFormInputsObject,
} from "../../common/types/common.types";
import { NavLink, useNavigate } from "react-router-dom";
import { navKeys } from "../../routes/routes";
import { FormikProps, useFormik } from "formik";

const Summary = () => {
  const { cartItems, clearCart, setAddress } = useContext(UserContext);
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
        firstName: "",
        lastName: "",
        phoneNumber: "",
        street: "",
        houseNumber: "",
        city: "",
        postCode: "",
      },

      //TODO: move Buttons to Summary.tsx
      onSubmit: (values) => {
        setAddress(values);
        confirmOrderHandler(values);
        navigate(navKeys.main);
      },
    });

  const totalAmount = calcCartTotalAmount(cartItems);

  return (
    <StyledSummary>
      <PersonalDataForm formik={formik} />
      <TotalAmountItem>
        <p>Total Amount:</p> <strong>{totalAmount} zł</strong>
      </TotalAmountItem>
      <BtnsContainer>
        <NavLink to={navKeys.cart}>
          <Button>Back to Cart</Button>
        </NavLink>
        <Button onClick={formik.submitForm}>Confirm Order</Button>
      </BtnsContainer>
    </StyledSummary>
  );
};

export default Summary;
