import {
  DashboardGraph,
  DashboardStat,
  RecentExportTable,
} from "components/dashboard";
import { CommonLayout } from "layouts";
import { NextPage } from "next";

const Dashboard: NextPage = () => {
  return (
    <CommonLayout title="Dashboard">
      <section className="w-full custom-container ">
        <DashboardStat />
        <DashboardGraph />
        <RecentExportTable />
      </section>
    </CommonLayout>
  );
};

export default Dashboard;
