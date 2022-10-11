import DashboardLayout from "./DashboardLayout";

type Props = {
  title?: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
  appBarTitle?: string;
};
const ZOLayout = ({
  children,
  title = "Inventory Dashboard",
  className,
  appBarTitle,
}: Props) => {
  return (
    <DashboardLayout
      title={title}
      appBarTitle={appBarTitle}
      className={className}
    >
      {children}
    </DashboardLayout>
  );
};

export default ZOLayout;
