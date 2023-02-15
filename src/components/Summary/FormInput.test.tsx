import { render, screen } from "../../test-utils";
import FormInput from "./FormInput";
import { useFormik } from "formik";

const Wrapper = () => {
  const formik = useFormik({
    initialValues: { testName: "" },
    onSubmit: () => {},
  });

  return (
    <FormInput
      fieldName="testName"
      error={""}
      touched={false}
      label="testLabel"
      fieldInputProps={formik.getFieldProps("testName")}
    />
  );
};

test("form input component renders label and input", () => {
  render(<Wrapper />);

  const labelText = screen.getByText(/testLabel/i);
  expect(labelText).toBeInTheDocument();
});
