import { CreateUser } from "components/forms";
import { DOLayout } from "layouts";
import { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <DOLayout title="Vender | Create" appBarTitle="Vender Create">
      <section className="p-4 md:p-6">
        <CreateUser />
      </section>
    </DOLayout>
  );
};

export default Create;
