import * as Yup from "yup";

const productSchema = [
  {
    key: "1",
    name: "name",
    label: "Product Name",
    initialValue: "",
    type: "text",
    validationSchema: Yup.string()
      .required("Product name is required.")
      .min(3, "Product name must be at least 3 characters long."),
    multiline: false,
  },
  {
    key: "1ii",
    name: "quantity",
    label: "Product Stock",
    initialValue: "",
    type: "number",
    validationSchema: Yup.string()
      .required("Product stock is required.")
      .min(0, "Product stock must be at least 1."),
    multiline: false,
  },
  {
    key: "2",
    name: "description",
    label: "Product Description",
    initialValue: "",
    type: "text",
    validationSchema: Yup.string()
      .required("Product description is required")
      .min(20, "Product description must be at least 20 characters long"),
    multiline: true,
    rows: 5,
  },
  {
    key: "3",
    name: "photoUrl",
    label: "Product Image",
    initialValue: "",
    type: "file",
    validationSchema: Yup.string()
      .required("Product image is required")
      .nullable(),
    multiline: true,
  },
];

export default productSchema;
