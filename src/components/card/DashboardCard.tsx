import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

type Props = {
  icon: JSX.Element;
  value: string | number;
  title: string;
  change: number | undefined;
};

const DashboardCard = ({ icon, value, title, change }: Props) => {
  return (
    <div className="w-full rounded-sm px-4 py-8 shadow-lg border select-none bg-white border-gray-100 flex flex-col gap-4 items-center ">
      {icon}
      <h3 className="font-bold tracking-wide text-5xl">{value}</h3>
      <small className="font-medium  tracking-wide text-gray-500">
        {title}
      </small>
      {change && change > 0 ? (
        <span className="flex items-center">
          <ArrowDropUp className="text-green-500" />
          <small className="font-medium tracking-wide text-green-500">
            {change}%
          </small>
        </span>
      ) : (
        <span className="flex items-center">
          <ArrowDropDown className="text-red-500" />
          <small className="font-medium tracking-wide text-red-500">
            {change}%
          </small>
        </span>
      )}
    </div>
  );
};

export default DashboardCard;
