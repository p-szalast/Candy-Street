import { Label, Input, VFlexBox } from "../../common/styles/componentsStyles";

import { FormContainer, FormItem } from "./PersonalDataFormStyles";

import { FormikProps } from "formik";
import { PersonalDataFormInputsObject } from "../../common/types/common.types";

const PersonalDataForm = ({
  formik,
}: {
  formik: FormikProps<PersonalDataFormInputsObject>;
}) => {
  return (
    <FormItem>
      <FormContainer>
        <VFlexBox>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
        </VFlexBox>
        <VFlexBox>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </VFlexBox>
        <VFlexBox>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            name="phoneNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
          />
        </VFlexBox>
      </FormContainer>
      <FormContainer>
        <VFlexBox>
          <Label htmlFor="street">Street</Label>
          <Input
            id="street"
            name="street"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.street}
          />
        </VFlexBox>
        <VFlexBox>
          <Label htmlFor="houseNumber">House Number</Label>
          <Input
            id="houseNumber"
            name="houseNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.houseNumber}
          />
        </VFlexBox>
        <VFlexBox>
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
        </VFlexBox>
        <VFlexBox>
          <Label htmlFor="postCode">Post Code</Label>
          <Input
            id="postCode"
            name="postCode"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.postCode}
          />
        </VFlexBox>
      </FormContainer>
    </FormItem>
  );
};

export default PersonalDataForm;
