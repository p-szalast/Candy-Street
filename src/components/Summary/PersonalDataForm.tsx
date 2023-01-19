import { NavLink } from "react-router-dom";
import { navKeys } from "../../routes/routes";

import { useContext } from "react";

import { UserContext } from "../../store/user-context";

import { PersonalDataFormInputs } from "../../common/types/common.types";

import { Container, Button } from "../../common/styles/componentsStyles";

import { useFormik } from "formik";
// import { useForm, SubmitHandler } from "react-hook-form";

const PersonalDataForm = () => {
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
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Container>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.lastName}
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
      </Container>
      <Container>
        <label htmlFor="street">Street</label>
        <input
          id="street"
          name="street"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.street}
        />

        <label htmlFor="houseNumber">House Number</label>
        <input
          id="houseNumber"
          name="houseNumber"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.houseNumber}
        />

        <label htmlFor="city">City</label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.city}
        />

        <label htmlFor="postCode">Post Code</label>
        <input
          id="postCode"
          name="postCode"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.postCode}
        />
      </Container>
      <Container>
        <NavLink to={navKeys.cart}>
          <Button>Back to Cart</Button>
        </NavLink>
        <Button type="submit">Confirm Order</Button>
      </Container>
    </form>
  );
};

//   const { cartItems, address } = useContext(UserContext);
//TODO: delete
//React Hook Form
// const {
//   register,
//   handleSubmit,
//   watch,
//   formState: { errors },
// } = useForm<PersonalDataFormInputs>();
// const onSubmit: SubmitHandler<PersonalDataFormInputs> = (data) =>
//   console.log(data);
// console.log(watch("firstName"));
// return (
//   <form onSubmit={handleSubmit(onSubmit)}>
//     <input
//       label="First Name"
//       defaultValue="testName"
//       {...register("firstName")}
//     />
//     <input {...register("lastName", { required: true })} />
//     {errors.lastName && <span></span>}
//   </form>
// );

export default PersonalDataForm;
