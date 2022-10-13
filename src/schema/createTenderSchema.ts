import * as Yup from "yup";

const tenderSchema = [
  {
    key: "1",
    name: "name",
    label: "Tender Name",
    initialValue: "",
    type: "text",
    validationSchema: Yup.string()
      .required("Tender name is required.")
      .min(3, "Tender name must be at least 3 characters long."),
    multiline: false,
  },
  {
    key: "1ii",
    name: "productName",
    label: "Product Name",
    initialValue: "",
    type: "select",
    validationSchema: Yup.string().required("Product is required."),
    multiline: false,
  },
  {
    key: "1iix",
    name: "quantity",
    label: "Require Amount",
    initialValue: "",
    type: "number",
    validationSchema: Yup.string()
      .required("Tender stock is required.")
      .min(0, "Tender stock must be at least 1."),
    multiline: false,
  },
  {
    key: "2",
    name: "description",
    label: "Tender Description",
    initialValue: "",
    type: "text",
    validationSchema: Yup.string()
      .required("Tender description is required")
      .min(20, "Tender description must be at least 20 characters long"),
    multiline: true,
    rows: 5,
  },
];

export default tenderSchema;
