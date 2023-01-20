import { NavLink } from "react-router-dom";
import { navKeys } from "../../routes/routes";

import { useContext } from "react";
import { UserContext } from "../../store/user-context";

import {
  Label,
  Input,
  LabelInputContainer,
} from "../../common/styles/componentsStyles";

import {
  Container,
  FormContainer,
  Button,
} from "../../common/styles/componentsStyles";

import { useFormik } from "formik";
import { AddressObject } from "../../common/types/common.types";

const PersonalDataForm = (props: {
  onConfirmOrder: (address: AddressObject) => void;
}) => {
  const { setAddress } = useContext(UserContext);

  const formik = useFormik({
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
      props.onConfirmOrder(values);

      // console.log({ cartItems, address: values, date: new Date() });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <FormContainer>
        <LabelInputContainer>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
        </LabelInputContainer>
      </FormContainer>
      <FormContainer>
        <LabelInputContainer>
          <Label htmlFor="street">Street</Label>
          <Input
            id="street"
            name="street"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.street}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="houseNumber">House Number</Label>
          <Input
            id="houseNumber"
            name="houseNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.houseNumber}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
        </LabelInputContainer>
        <LabelInputContainer>
          <Label htmlFor="postCode">Post Code</Label>
          <Input
            id="postCode"
            name="postCode"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.postCode}
          />
        </LabelInputContainer>
      </FormContainer>
      <Container>
        <NavLink to={navKeys.cart}>
          <Button>Back to Cart</Button>
        </NavLink>
        {/* TODO: NavLink + SubmitButton */}

        {/* <NavLink to={navKeys.main}> */}
        <Button type="submit">Confirm Order</Button>
        {/* </NavLink> */}
      </Container>
    </form>
  );
};

export default PersonalDataForm;
