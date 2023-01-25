import { Label, Input, VFlexBox } from "../../common/styles/componentsStyles";
import { FormContainer, FormItem } from "./PersonalDataFormStyles";

import { PersonalDataFormInputsObject } from "../../common/types/common.types";

import { FormikProps } from "formik";

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
            type="text"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div>{formik.errors.firstName}</div>
          )}
        </VFlexBox>
        <VFlexBox>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            type="text"
            {...formik.getFieldProps("lastName")}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div>{formik.errors.lastName}</div>
          )}
        </VFlexBox>
        <VFlexBox>
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            id="phoneNumber"
            type="text"
            {...formik.getFieldProps("phoneNumber")}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber && (
            <div>{formik.errors.phoneNumber}</div>
          )}
        </VFlexBox>
      </FormContainer>
      <FormContainer>
        <VFlexBox>
          <Label htmlFor="street">Street</Label>
          <Input id="street" type="text" {...formik.getFieldProps("street")} />
        </VFlexBox>
        <VFlexBox>
          <Label htmlFor="houseNumber">House Number</Label>
          <Input
            id="houseNumber"
            type="text"
            {...formik.getFieldProps("houseNumber")}
          />
        </VFlexBox>
        <VFlexBox>
          <Label htmlFor="city">City</Label>
          <Input id="city" type="text" {...formik.getFieldProps("city")} />
        </VFlexBox>
        <VFlexBox>
          <Label htmlFor="postCode">Post Code</Label>
          <Input
            id="postCode"
            type="text"
            {...formik.getFieldProps("postCode")}
          />
        </VFlexBox>
      </FormContainer>
    </FormItem>
  );
};

export default PersonalDataForm;
