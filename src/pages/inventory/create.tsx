import { CreateProduct } from "components/forms";
import { CommonLayout } from "layouts";

const Create = () => {
  return (
    <CommonLayout title="Inventory | Create" appBarTitle="Product Create">
      <section className="w-full custom-container ">
        <CreateProduct />
      </section>
    </CommonLayout>
  );
};

export default Create;
