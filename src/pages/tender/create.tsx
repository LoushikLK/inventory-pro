import { CreateTender } from "components/forms";
import { HOLayout } from "layouts";
import { NextPage } from "next";

const CreateProductRequirement: NextPage = () => {
  return (
    <HOLayout title="Tender | Create " appBarTitle="Create Requirement">
      <section className="w-full custom-container">
        <CreateTender />
      </section>
    </HOLayout>
  );
};

export default CreateProductRequirement;
