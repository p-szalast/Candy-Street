import { FormContainer, FormItem } from "./PersonalDataFormStyles";

import { PersonalDataFormInputsObject } from "../../common/types/common.types";

import { FormikProps } from "formik";
import PersonalDataFormInput from "./PersonalDataFormInput";

const PersonalDataForm = ({
  formik,
}: {
  formik: FormikProps<PersonalDataFormInputsObject>;
}) => {
  return (
    <FormItem>
      <FormContainer>
        <PersonalDataFormInput
          fieldName="firstName"
          error={formik.errors.firstName}
          touched={formik.touched.firstName}
          fieldInputProps={formik.getFieldProps("firstName")}
          label="First Name"
        />
        <PersonalDataFormInput
          fieldName="lastName"
          error={formik.errors.lastName}
          touched={formik.touched.lastName}
          fieldInputProps={formik.getFieldProps("lastName")}
          label="Last Name"
        />
        <PersonalDataFormInput
          fieldName="phoneNumber"
          error={formik.errors.phoneNumber}
          touched={formik.touched.phoneNumber}
          fieldInputProps={formik.getFieldProps("phoneNumber")}
          label="Phone Number"
        />
      </FormContainer>
      <FormContainer>
        <PersonalDataFormInput
          fieldName="street"
          error={formik.errors.street}
          touched={formik.touched.street}
          fieldInputProps={formik.getFieldProps("street")}
          label="Street"
        />

        <PersonalDataFormInput
          fieldName="houseNumber"
          error={formik.errors.houseNumber}
          touched={formik.touched.houseNumber}
          fieldInputProps={formik.getFieldProps("houseNumber")}
          label="House Number"
        />

        <PersonalDataFormInput
          fieldName="city"
          error={formik.errors.city}
          touched={formik.touched.city}
          fieldInputProps={formik.getFieldProps("city")}
          label="City"
        />

        <PersonalDataFormInput
          fieldName="postCode"
          error={formik.errors.postCode}
          touched={formik.touched.postCode}
          fieldInputProps={formik.getFieldProps("postCode")}
          label="Postal code"
        />
      </FormContainer>
    </FormItem>
  );
};

export default PersonalDataForm;
