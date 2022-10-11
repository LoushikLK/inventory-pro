import {
  AccountBalance,
  AppRegistration,
  Create,
  Dashboard,
  FormatListNumbered,
  Notifications,
  SupervisorAccount,
} from "@mui/icons-material";

const useMenuItems = (): {
  key: string;
  title: string;
  icon: JSX.Element;
  submenus?: {
    key: string;
    route: string;
    title: string;
    icon: JSX.Element;
  }[];
  route?: string;
}[] => {
  let role = "ADMIN";

  if (role === "ADMIN")
    return [
      {
        key: "1",
        title: "Dashboard",
        icon: <Dashboard />,
        route: "/dashboard",
      },
      {
        key: "2",
        title: "Inventory",
        icon: <AccountBalance />,
        submenus: [
          {
            key: "2.1",
            title: "All Product",
            icon: <FormatListNumbered />,
            route: "/inventory/list",
          },
          {
            key: "2.2",
            title: "Add Product",
            icon: <Create />,
            route: "/inventory/create",
          },
        ],
      },
      {
        key: "5i",
        title: "Product Request",
        icon: <SupervisorAccount />,
        route: "/product-request",
      },
      {
        key: "3",
        title: "Purchase Report",
        icon: <AppRegistration />,
        route: `/purchase-report`,
      },
      {
        key: "3.i",
        title: "Sell Report",
        icon: <Notifications />,
        route: `/Sell Report`,
      },
    ];

  return [];
};
export default useMenuItems;
