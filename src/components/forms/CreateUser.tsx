import { InputField } from "components/core";
import { useFormik } from "formik";
import { createVenderSchema } from "schema";
import * as Yup from "yup";

const initialValues = createVenderSchema?.reduce(
  (accumulator, currentValue) => {
    accumulator[currentValue?.name] = currentValue.initialValue;
    return accumulator;
  },
  {} as any
);

const validationSchema = createVenderSchema?.reduce(
  (accumulator, currentValue) => {
    accumulator[currentValue?.name] = currentValue.validationSchema;
    return accumulator;
  },
  {} as any
);
const CreateUser = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object(validationSchema),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <section className="flex flex-col w-full">
      <h1 className="text-theme font-semibold text-2xl">Add Vender</h1>
      <div className="py-5">
        <form
          className="grid grid-cols-12 w-full px-4 gap-4 "
          onSubmit={formik.handleSubmit}
        >
          {createVenderSchema?.map((items) => (
            <InputField
              title={items?.label}
              key={items?.key}
              name={items?.name}
              type={items?.type as any}
              value={formik?.values[items?.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              options={items?.option}
              // rows={items?.rows}
              fullWidth
              multiline={items?.multiline}
              error={Boolean(
                formik?.touched[items?.name] && formik?.errors[items?.name]
              )}
              helperText={
                formik?.touched[items?.name] &&
                (formik?.errors[items?.name] as any)
              }
              styleArea="col-span-12 md:col-span-6 !w-full"
              styleField="w-full col-span-12 md:col-span-6"
              image={
                formik?.values?.photoUrl &&
                typeof formik?.values?.photoUrl !== "string"
                  ? URL.createObjectURL(formik?.values?.photoUrl)
                  : formik?.values?.photoUrl
              }
              onFileChange={(e: any) => {
                formik.setFieldValue("photoUrl", e?.target?.files[0]);
              }}
            />
          ))}
        </form>
        <div className="w-full flex py-10">
          <button
            type="submit"
            onClick={() => formik.handleSubmit()}
            className="btn-primary"
          >
            Save
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreateUser;
