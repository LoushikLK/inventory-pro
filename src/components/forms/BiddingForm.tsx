import { InputField } from "components/core";
import { useFormik } from "formik";
import { biddingSchema } from "schema";
import * as Yup from "yup";

const initialValues = biddingSchema?.reduce((accumulator, currentValue) => {
  accumulator[currentValue?.name] = currentValue.initialValue;
  return accumulator;
}, {} as any);

const validationSchema = biddingSchema?.reduce((accumulator, currentValue) => {
  accumulator[currentValue?.name] = currentValue.validationSchema;
  return accumulator;
}, {} as any);

const BiddingForm = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="w-full">
      <h3 className="font-medium tracking-wide text-xl p-4 border-b text-center">
        Make Your Bidding
      </h3>
      <form className="flex flex-col gap-4 p-4" onSubmit={formik.handleSubmit}>
        {biddingSchema?.map((items) => (
          <InputField
            fullWidth
            type="number"
            name="biddingAmount"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values?.biddingAmount}
            error={Boolean(
              formik?.touched?.biddingAmount && formik?.errors?.biddingAmount
            )}
            multiline={items?.multiline}
            rows={items?.rows}
            helperText={
              formik?.touched?.biddingAmount &&
              (formik?.errors?.biddingAmount as any)
            }
            title={items?.label}
          />
        ))}

        <div className="w-full flex items-center justify-center">
          <button className="btn-primary" type="submit">
            Create Bidding
          </button>
        </div>
      </form>
    </div>
  );
};

export default BiddingForm;
