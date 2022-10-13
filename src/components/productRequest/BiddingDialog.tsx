import { CustomDialog } from "components/core";
import { BiddingForm } from "components/forms";
import { useFormik } from "formik";
import * as Yup from "yup";

type Props = {
  open: boolean;
  onClose: () => void;
};

const BiddingDialog = ({ open, onClose }: Props) => {
  const formik = useFormik({
    initialValues: {
      biddingAmount: "",
      message: "",
    },
    validationSchema: Yup.object({
      biddingAmount: Yup.string()
        .required("Enter a valid amount")
        .trim()
        .matches(/^[0-9]/, "Enter a valid amount"),
      message: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="w-full">
      <CustomDialog open={open} close={onClose}>
        <BiddingForm />
      </CustomDialog>
    </div>
  );
};

export default BiddingDialog;
