import { FormContainer, FormItem } from "./PersonalDataFormStyles";

import { FormInputsObject } from "../../common/types/common.types";

import { FormikProps } from "formik";
import FormInput from "./FormInput";

const PersonalDataForm = ({
  formik,
}: {
  formik: FormikProps<FormInputsObject>;
}) => {
  return (
    <FormItem>
      <FormContainer>
        <FormInput
          fieldName="firstName"
          error={formik.errors.firstName}
          touched={formik.touched.firstName}
          fieldInputProps={formik.getFieldProps("firstName")}
          label="First Name"
        />
        <FormInput
          fieldName="lastName"
          error={formik.errors.lastName}
          touched={formik.touched.lastName}
          fieldInputProps={formik.getFieldProps("lastName")}
          label="Last Name"
        />
        <FormInput
          fieldName="phoneNumber"
          error={formik.errors.phoneNumber}
          touched={formik.touched.phoneNumber}
          fieldInputProps={formik.getFieldProps("phoneNumber")}
          label="Phone Number"
        />
      </FormContainer>
      <FormContainer>
        <FormInput
          fieldName="street"
          error={formik.errors.street}
          touched={formik.touched.street}
          fieldInputProps={formik.getFieldProps("street")}
          label="Street"
        />

        <FormInput
          fieldName="houseNumber"
          error={formik.errors.houseNumber}
          touched={formik.touched.houseNumber}
          fieldInputProps={formik.getFieldProps("houseNumber")}
          label="House Number"
        />

        <FormInput
          fieldName="city"
          error={formik.errors.city}
          touched={formik.touched.city}
          fieldInputProps={formik.getFieldProps("city")}
          label="City"
        />

        <FormInput
          fieldName="postCode"
          error={formik.errors.postCode}
          touched={formik.touched.postCode}
          fieldInputProps={formik.getFieldProps("postCode")}
          label="Post Code"
        />
      </FormContainer>
    </FormItem>
  );
};

export default PersonalDataForm;
