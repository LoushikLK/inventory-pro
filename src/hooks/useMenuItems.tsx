import {
  Add,
  AddBusiness,
  Badge,
  DashboardOutlined,
  DashboardRounded,
  DesignServices,
  Inventory,
  Inventory2Outlined,
  Inventory2Rounded,
  ListAlt,
  ReceiptOutlined,
  ReceiptRounded,
  StorefrontOutlined,
  StorefrontRounded,
  UnarchiveOutlined,
  UnarchiveRounded,
} from "@mui/icons-material";

const useMenuItems = (): {
  key: string;
  title: string;
  icon: JSX.Element;
  activeIcon?: JSX.Element;
  submenus?: {
    key: string;
    route: string;
    title: string;
    icon: JSX.Element;
  }[];
  route?: string;
}[] => {
  let role = "HO";

  if (role === "VENDER")
    return [
      {
        key: "1",
        title: "Dashboard",
        icon: <DashboardOutlined />,
        route: "/dashboard",
        activeIcon: <DashboardRounded />,
      },
      {
        key: "2",
        title: "Inventory",
        icon: <Inventory2Outlined />,
        activeIcon: <Inventory2Rounded />,
        submenus: [
          {
            key: "2.2",
            title: "Add Product",
            icon: <Add />,
            route: "/inventory/create",
          },
          {
            key: "2.1",
            title: "All Products",
            icon: <Inventory />,
            route: "/inventory/list",
          },
        ],
      },
      {
        key: "5i",
        title: "Product Request",
        icon: <UnarchiveOutlined />,
        route: "/product-request",
        activeIcon: <UnarchiveRounded />,
      },
      {
        key: "3.i",
        title: "Sell Report",
        icon: <ReceiptOutlined />,
        route: `/sale-report`,
        activeIcon: <ReceiptRounded />,
      },
    ];
  if (role === "DO")
    return [
      {
        key: "1",
        title: "Dashboard",
        icon: <DashboardOutlined />,
        route: "/dashboard",
        activeIcon: <DashboardRounded />,
      },
      {
        key: "2",
        title: "Inventory",
        icon: <Inventory2Outlined />,
        activeIcon: <Inventory2Rounded />,
        submenus: [
          {
            key: "2.2",
            title: "Add Product",
            icon: <Add />,
            route: "/inventory/create",
          },
          {
            key: "2.1",
            title: "All Products",
            icon: <Inventory />,
            route: "/inventory/list",
          },
        ],
      },
      {
        key: "5i",
        title: "Product Request",
        icon: <UnarchiveOutlined />,
        route: "/product-request",
        activeIcon: <UnarchiveRounded />,
      },
      {
        key: "3.i",
        title: "Sell Report",
        icon: <ReceiptOutlined />,
        route: `/sale-report`,
        activeIcon: <ReceiptRounded />,
      },
      {
        key: "4",
        title: "Vender Management",
        icon: <StorefrontOutlined />,
        route: ``,
        activeIcon: <StorefrontRounded />,
        submenus: [
          {
            key: "4.1",
            title: "Create Vender",
            icon: <AddBusiness />,
            route: "/user/vender/create",
          },
          {
            key: "4.2",
            title: "Manage Vender",
            icon: <ListAlt />,
            route: "/user/vender/list",
          },
        ],
      },
    ];
  if (role === "RO")
    return [
      {
        key: "1",
        title: "Dashboard",
        icon: <DashboardOutlined />,
        route: "/dashboard",
        activeIcon: <DashboardRounded />,
      },
      {
        key: "2",
        title: "Inventory",
        icon: <Inventory2Outlined />,
        activeIcon: <Inventory2Rounded />,
        submenus: [
          {
            key: "2.2",
            title: "Add Product",
            icon: <Add />,
            route: "/inventory/create",
          },
          {
            key: "2.1",
            title: "All Products",
            icon: <Inventory />,
            route: "/inventory/list",
          },
        ],
      },
      {
        key: "5i",
        title: "Product Request",
        icon: <UnarchiveOutlined />,
        route: "/product-request",
        activeIcon: <UnarchiveRounded />,
      },
      {
        key: "3.i",
        title: "Sell Report",
        icon: <ReceiptOutlined />,
        route: `/sale-report`,
        activeIcon: <ReceiptRounded />,
      },
      {
        key: "4",
        title: "DO Management",
        icon: <StorefrontOutlined />,
        route: ``,
        activeIcon: <StorefrontRounded />,
        submenus: [
          {
            key: "4.1",
            title: "Create DO",
            icon: <AddBusiness />,
            route: "/user/do/create",
          },
          {
            key: "4.2",
            title: "Manage DO",
            icon: <ListAlt />,
            route: "/user/do/list",
          },
        ],
      },
    ];
  if (role === "ZO")
    return [
      {
        key: "1",
        title: "Dashboard",
        icon: <DashboardOutlined />,
        route: "/dashboard",
        activeIcon: <DashboardRounded />,
      },
      {
        key: "2",
        title: "Inventory",
        icon: <Inventory2Outlined />,
        activeIcon: <Inventory2Rounded />,
        submenus: [
          {
            key: "2.2",
            title: "Add Product",
            icon: <Add />,
            route: "/inventory/create",
          },
          {
            key: "2.1",
            title: "All Products",
            icon: <Inventory />,
            route: "/inventory/list",
          },
        ],
      },
      {
        key: "5i",
        title: "Product Request",
        icon: <UnarchiveOutlined />,
        route: "/product-request",
        activeIcon: <UnarchiveRounded />,
      },
      {
        key: "3.i",
        title: "Sell Report",
        icon: <ReceiptOutlined />,
        route: `/sale-report`,
        activeIcon: <ReceiptRounded />,
      },
      {
        key: "4",
        title: "RO Management",
        icon: <StorefrontOutlined />,
        route: ``,
        activeIcon: <StorefrontRounded />,
        submenus: [
          {
            key: "4.1",
            title: "Create RO",
            icon: <AddBusiness />,
            route: "/user/ro/create",
          },
          {
            key: "4.2",
            title: "Manage RO",
            icon: <ListAlt />,
            route: "/user/ro/list",
          },
        ],
      },
    ];
  if (role === "HO")
    return [
      {
        key: "1",
        title: "Dashboard",
        icon: <DashboardOutlined />,
        route: "/dashboard",
        activeIcon: <DashboardRounded />,
      },
      {
        key: "2",
        title: "Inventory",
        icon: <Inventory2Outlined />,
        activeIcon: <Inventory2Rounded />,
        submenus: [
          {
            key: "2.2",
            title: "Add Product",
            icon: <Add />,
            route: "/inventory/create",
          },
          {
            key: "2.1",
            title: "All Products",
            icon: <Inventory />,
            route: "/inventory/list",
          },
        ],
      },
      {
        key: "5i",
        title: "Tender Management",
        icon: <UnarchiveOutlined />,

        activeIcon: <UnarchiveRounded />,
        submenus: [
          {
            key: "5idd",
            title: "Create Tender",
            icon: <DesignServices />,
            route: "/tender/create",
          },
          {
            key: "5idddde",
            title: "Manage Tender",
            icon: <Badge />,
            route: "/tender/manage",
          },
        ],
      },

      {
        key: "4zz",
        title: "Vender Management",
        icon: <StorefrontOutlined />,
        route: ``,
        activeIcon: <StorefrontRounded />,
        submenus: [
          {
            key: "4.1z",
            title: "Create Vender",
            icon: <AddBusiness />,
            route: "/user/vender/create",
          },
          {
            key: "4.2z",
            title: "Manage Vender",
            icon: <ListAlt />,
            route: "/user/vender/list",
          },
        ],
      },
      {
        key: "4e",
        title: "DO Management",
        icon: <StorefrontOutlined />,
        route: ``,
        activeIcon: <StorefrontRounded />,
        submenus: [
          {
            key: "4.1r",
            title: "Create DO",
            icon: <AddBusiness />,
            route: "/user/do/create",
          },
          {
            key: "4.2v",
            title: "Manage DO",
            icon: <ListAlt />,
            route: "/user/do/list",
          },
        ],
      },
      {
        key: "4",
        title: "RO Management",
        icon: <StorefrontOutlined />,
        route: ``,
        activeIcon: <StorefrontRounded />,
        submenus: [
          {
            key: "4.1",
            title: "Create RO",
            icon: <AddBusiness />,
            route: "/user/ro/create",
          },
          {
            key: "4.2",
            title: "Manage RO",
            icon: <ListAlt />,
            route: "/user/ro/list",
          },
        ],
      },
      {
        key: "55",
        title: "ZO Management",
        icon: <StorefrontOutlined />,
        route: ``,
        activeIcon: <StorefrontRounded />,
        submenus: [
          {
            key: "4.1",
            title: "Create ZO",
            icon: <AddBusiness />,
            route: "/user/zo/create",
          },
          {
            key: "4.2",
            title: "Manage ZO",
            icon: <ListAlt />,
            route: "/user/zo/list",
          },
        ],
      },
    ];

  return [];
};
export default useMenuItems;
