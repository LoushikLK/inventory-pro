import { CustomDialog, InputField } from "components/core";
import { useState } from "react";

type Props = {
  open: boolean;
  id: string;
  closeFn: () => void;
};

const options = [
  {
    label: "Available",
    value: "available",
  },
  {
    label: "Repairing",
    value: "repairing",
  },
  {
    label: "Not Available",
    value: "unavailable",
  },
];

const ChangeStatus = ({ open, id, closeFn }: Props) => {
  const [availability, setAvailability] = useState("available");

  return (
    <div className="w-full">
      <CustomDialog open={open} close={closeFn}>
        <div className="w-full">
          <h3 className="w-full font-medium p-4 border-b tracking-wide text-xl text-center">
            Change Availability Status
          </h3>
          <div className="flex flex-col gap-4 p-4 ">
            <InputField
              type={"select"}
              options={options}
              fullWidth
              title="Availability Type"
              value={availability}
              onChange={(e) => setAvailability(e?.target?.value)}
            />
            {availability === "repairing" && (
              <InputField type="date" fullWidth title="Repairing End Date" />
            )}

            <div className="w-full flex items-center justify-center">
              <button className="btn-primary">Change</button>
            </div>
          </div>
        </div>
      </CustomDialog>
    </div>
  );
};

export default ChangeStatus;
