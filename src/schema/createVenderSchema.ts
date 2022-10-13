import * as Yup from "yup";

const venderSchema = [
  {
    key: 1,
    name: "name",
    label: "Name",
    initialValue: "",
    type: "text",
    validationSchema: Yup.string()
      .required("Vender Name is required.")
      .min(3, "Vender name must be at least 3 characters long."),
    multiline: false,
  },
  {
    key: 2,
    name: "email",
    label: "Email",
    initialValues: "",
    type: "text",
    validationSchema: Yup.string()
      .email("Field should contain a valid e-mail")
      .required("E-mail is required"),
    multiline: false,
  },
  {
    key: 3,
    name: "phone",
    label: "Phone",
    initialValues: "",
    type: "number",
    validationSchema: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(8)
      .required("A phone number is required"),
  },
  {
    key: 4,
    name: "state",
    label: "State",
    initialValues: "",
    type: "select",
    validationSchema: Yup.string().required("Please Select a State"),
    option: [
      {
        label: "Odisha",
        value: "odisha",
      },
      {
        label: "Karnataka",
        value: "karnataka",
      },
    ],
  },
  {
    key: 5,
    name: "district",
    label: "District",
    initialValues: "",
    type: "select",
    validationSchema: Yup.string().required("Please Select a District"),
    option: [
      {
        label: "Rayagada",
        value: "rayagada",
      },
    ],
  },
  {
    key: 6,
    name: "region",
    label: "Region",
    initialValues: "",
    type: "text",
    validationSchema: Yup.string()
      .required("Please Enter Your Region")
      .min(5, "Tender description must be at least 5 characters long"),
  },
  {
    key: 7,
    name: "addpost",
    label: "Add Post",
    initialValues: "",
    type: "text",
    validationSchema: Yup.string()
      .required("Please Enter Your Post")
      .min(5, "Post must be at least 5 characters long"),
  },
  // {
  //   key: "8",
  //   name: "photoUrl",
  //   label: "Vender Image",
  //   initialValue: "",
  //   type: "file",
  //   validationSchema: Yup.string()
  //     .required("Product image is required")
  //     .nullable(),
  //   // multiline: true,
  // },
];
export default venderSchema;
