import * as yup from "yup";

const pizzaFormSchema = yup.object().shape({
  size: yup.string().required("Size is required"),
  sauce: yup.string().oneOf(["Original Red", "BBQ Sauce"], "Choose a sauce"),
  Pepperoni: yup.boolean(),
  ThreeCheese: yup.boolean(),
  Pinapple: yup.boolean(),

  name: yup
    .string()
    .trim()
    .required("Name is required")
    .min(3, "Name must be 3 characters long"),
});

export default pizzaFormSchema;
