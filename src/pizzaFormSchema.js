import * as yup from "yup";

const pizzaFormSchema = yup.object().shape({
  size: yup.string().required("Size is required"),
  sauce: yup.string().oneOf(["Original Red", "BBQ Sauce"], "Choose a sauce"),
  Pepperoni: yup.boolean(),
  ThreeCheese: yup.boolean(),
  Pinapple: yup.boolean(),
  Sausage: yup.boolean(),

  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(2, "name must be at least 2 characters"),
  special: yup.string().trim(),
});

export default pizzaFormSchema;
