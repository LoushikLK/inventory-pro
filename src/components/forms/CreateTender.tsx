import { InputField } from "components/core";
import { useFormik } from "formik";
import { createTenderSchema } from "schema";
import * as Yup from "yup";

const initialValues = createTenderSchema?.reduce(
  (accumulator, currentValue) => {
    accumulator[currentValue?.name] = currentValue.initialValue;
    return accumulator;
  },
  {} as any
);

const validationSchema = createTenderSchema?.reduce(
  (accumulator, currentValue) => {
    accumulator[currentValue?.name] = currentValue.validationSchema;
    return accumulator;
  },
  {} as any
);

const CreateProduct = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="w-full ">
      <div className="w-full bg-white shadow-lg rounded-md max-w-7xl mx-auto my-8 ">
        <h3 className="font-bold tracking-wide text-center text-4xl p-8 text-theme">
          Create Tender
        </h3>
        <form
          className="grid grid-cols-1 w-full px-4 gap-4 "
          onSubmit={formik.handleSubmit}
        >
          {createTenderSchema?.map((items) => (
            <InputField
              title={items?.label}
              key={items?.key}
              name={items?.name}
              type={items?.type as any}
              value={formik?.values[items?.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows={items?.rows}
              fullWidth
              multiline={items?.multiline}
              error={Boolean(
                formik?.touched[items?.name] && formik?.errors[items?.name]
              )}
              helperText={
                formik?.touched[items?.name] &&
                (formik?.errors[items?.name] as any)
              }
              options={[
                {
                  label: "Pump Machines",
                  value: "qqd4qedqwQw455DQDwd4q45w45",
                },
                {
                  label: "Combine Machines",
                  value: "k2fffg4qedqwQw455DQDwd4q45w45",
                },
              ]}
            />
          ))}
          <div className="w-full flex items-center mb-8 justify-center">
            <button className=" btn-primary  " type="submit">
              Create Tender
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
