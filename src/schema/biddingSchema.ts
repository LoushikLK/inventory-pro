import * as Yup from "yup";

const biddingSchema = [
  {
    key: "1",
    name: "biddingAmount",
    label: "Enter Bidding Amount",
    initialValue: "",
    type: "number",
    validationSchema: Yup.string()
      .required("Enter a valid amount")
      .trim()
      .matches(/^[0-9]/, "Enter a valid amount"),
    multiline: false,
  },

  {
    key: "3",
    name: "message",
    label: "Message",
    initialValue: "",
    type: "text",
    validationSchema: Yup.string(),
    multiline: true,
    rows: 5,
  },
];

export default biddingSchema;
