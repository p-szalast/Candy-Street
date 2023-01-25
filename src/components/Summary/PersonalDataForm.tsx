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
        <VFlexBox
          className={
            formik.touched.firstName && formik.errors.firstName
              ? "error-message"
              : ""
          }
        >
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            type="text"
            {...formik.getFieldProps("firstName")}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div className="error-message">{formik.errors.firstName}</div>
          )}
        </VFlexBox>
        <VFlexBox
          className={
            formik.touched.lastName && formik.errors.lastName
              ? "error-message"
              : ""
          }
        >
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
        <VFlexBox
          className={
            formik.touched.phoneNumber && formik.errors.phoneNumber
              ? "error-message"
              : ""
          }
        >
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
        <VFlexBox
          className={
            formik.touched.street && formik.errors.street ? "error-message" : ""
          }
        >
          <Label htmlFor="street">Street</Label>
          <Input id="street" type="text" {...formik.getFieldProps("street")} />
          {formik.touched.street && formik.errors.street && (
            <div>{formik.errors.street}</div>
          )}
        </VFlexBox>
        <VFlexBox
          className={
            formik.touched.houseNumber && formik.errors.houseNumber
              ? "error-message"
              : ""
          }
        >
          <Label htmlFor="houseNumber">House Number</Label>
          <Input
            id="houseNumber"
            type="text"
            {...formik.getFieldProps("houseNumber")}
          />
          {formik.touched.houseNumber && formik.errors.houseNumber && (
            <div>{formik.errors.houseNumber}</div>
          )}
        </VFlexBox>
        <VFlexBox
          className={
            formik.touched.city && formik.errors.city ? "error-message" : ""
          }
        >
          <Label htmlFor="city">City</Label>
          <Input id="city" type="text" {...formik.getFieldProps("city")} />
          {formik.touched.city && formik.errors.city && (
            <div>{formik.errors.city}</div>
          )}
        </VFlexBox>
        <VFlexBox
          className={
            formik.touched.postCode && formik.errors.postCode
              ? "error-message"
              : ""
          }
        >
          <Label htmlFor="postCode">Post Code</Label>
          <Input
            id="postCode"
            type="text"
            {...formik.getFieldProps("postCode")}
          />
          {formik.touched.postCode && formik.errors.postCode && (
            <div>{formik.errors.postCode}</div>
          )}
        </VFlexBox>
      </FormContainer>
    </FormItem>
  );
};

export default PersonalDataForm;
