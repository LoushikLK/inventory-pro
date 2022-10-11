import dynamic from "next/dynamic";
import { useState } from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const DashboardGraph = () => {
  const [monthlyData, setMonthlyData] = useState({
    series: [
      {
        data: [21, 22, 10, 28, 16, 21, 13, 30],
      },
    ],
    options: {
      chart: {
        height: 400,
        type: "bar",
        events: {},
      },
      colors: ["red", "green", "yellow", "blue", "purple", "cyan"],
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: [
          ["January"],
          ["February"],
          ["March"],
          "April",
          ["May"],
          ["June"],
          ["July"],
          ["August"],
        ],
        labels: {
          style: {
            colors: ["red", "green", "yellow", "blue", "purple", "cyan"],
            fontSize: "12px",
          },
        },
      },
    },
  });

  return (
    <div className="w-full flex items-center ">
      <div className="w-full flex flex-col gap-4  bg-white rounded-md shadow-lg p-4 ">
        <h3 className="font-medium tracking-wide text-lg">Monthly Sales</h3>
        <ReactApexChart
          options={monthlyData?.options as any}
          series={monthlyData?.series}
          type="bar"
          height={350}
        />
      </div>
    </div>
  );
};

export default DashboardGraph;
