import {
  Label,
  Input,
  LabelInputContainer,
} from "../../common/styles/componentsStyles";

import { FormContainer } from "../../common/styles/componentsStyles";

import { FormikProps } from "formik";
import { PersonalDataFormInputsObject } from "../../common/types/common.types";

const PersonalDataForm = ({
  formik,
}: {
  formik: FormikProps<PersonalDataFormInputsObject>;
}) => {
  return (
    <form>
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
    </form>
  );
};

export default PersonalDataForm;
