import { Cameraswitch, PeopleAlt, Public } from "@mui/icons-material";
import { DashboardCard } from "components/card";

const DashboardStat = () => {
  const dashboardStatData = [
    {
      key: "1",
      icon: (
        <PeopleAlt className="text-7xl bg-blue-200 rounded-full p-4 text-blue-500 " />
      ),
      value: 5000,
      title: "Total Followers",
      change: 102,
    },
    {
      key: "2",
      icon: (
        <Cameraswitch className="text-7xl bg-[#FBAB7E50] rounded-full p-4 text-[#FBAB7E] " />
      ),
      value: 4864,
      title: "Impressions",
      change: -10,
    },
    {
      key: "3",
      icon: (
        <Public className="text-7xl bg-[#FA8BFF50] rounded-full p-4 text-[#FA8BFF] " />
      ),
      value: 55,
      title: "Reach",
      change: 27,
    },
    {
      key: "4",
      icon: (
        <PeopleAlt className="text-7xl bg-green-200 rounded-full p-4 text-green-500 " />
      ),
      value: 15,
      title: "Engagement Rate",
      change: -57,
    },
  ];

  return (
    <div className="w-full flex flex-col py-4  ">
      <h3 className="font-semibold tracking-wide pb-4 text-lg">
        Analytic Overview
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        {dashboardStatData?.map((items) => (
          <DashboardCard
            key={items?.key}
            icon={items?.icon}
            value={items?.value}
            title={items?.title}
            change={items?.change}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardStat;
