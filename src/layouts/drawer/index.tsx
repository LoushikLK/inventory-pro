import {
  ChevronLeft,
  ExitToApp,
  ExpandLess,
  ExpandMore,
  Menu,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import { useMenuItems } from "hooks";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import { CustomDrawer, CustomDrawerHeader } from "./custom";

type DrawerType = {
  onToggle?: () => void;
  open?: boolean;
};

const Drawer = ({ open, onToggle }: DrawerType) => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      router.push("/");
    } catch (error) {}
  };
  const [selectedSubMenu, setSelectedSubMenu] = useState("");
  const user = {
    displayName: "Admin User",
  };

  const menuItems = useMenuItems();

  return (
    <div>
      <CustomDrawer
        variant="permanent"
        open={open}
        className="layout-scrollbar"
      >
        <CustomDrawerHeader>
          <div className="flex h-16 px-6 w-full items-center justify-center gap-4">
            <img
              src={"/favicon.png"}
              alt="Brand Logo"
              className={`${
                open ? "w-30 object-contain inline-block h-10" : "hidden"
              }`}
            />
            <IconButton onClick={onToggle}>
              {open ? <ChevronLeft /> : <Menu />}
            </IconButton>
          </div>
        </CustomDrawerHeader>
        <Divider />
        {/* Render Menu Items */}
        <List sx={{ mt: "1px" }} className="layout-scrollbar">
          {menuItems?.map((item: any) => (
            <Fragment key={item.key}>
              <Tooltip
                title={item.title}
                followCursor
                arrow
                placement="top-end"
              >
                <ListItemButton
                  onClick={() => {
                    if (item?.route) return router?.push(item?.route);
                    item?.submenus &&
                      setSelectedSubMenu((prev) =>
                        prev === item.key ? "" : item.key
                      );
                  }}
                  selected={
                    item?.submenus
                      ? selectedSubMenu === item?.key
                      : router?.pathname === item.route
                  }
                  className={
                    router.asPath === item.route
                      ? "!rounded-r-[25px] !bg-theme !text-white"
                      : ""
                  }
                >
                  {item?.route === router?.asPath ||
                  selectedSubMenu === router?.asPath ? (
                    <ListItemIcon
                      className={
                        router.asPath === item.route ? " !text-white" : ""
                      }
                    >
                      {item.activeIcon}
                    </ListItemIcon>
                  ) : (
                    <ListItemIcon>{item.icon}</ListItemIcon>
                  )}
                  <ListItemText primary={item.title} />
                  {item?.submenus &&
                    (selectedSubMenu === item?.key ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    ))}
                </ListItemButton>
              </Tooltip>
              {item?.submenus && (
                <Collapse
                  in={selectedSubMenu === item?.key}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item?.submenus.map((submenu: any) => (
                      <ListItemButton
                        onClick={() => router.push(submenu.route)}
                        sx={{ pl: 4 }}
                        selected={router.pathname === submenu.route}
                        key={submenu?.key}
                        className={
                          router.asPath === submenu.route
                            ? "!rounded-r-[25px] !bg-theme !text-white"
                            : ""
                        }
                      >
                        <ListItemIcon
                          className={
                            router.asPath === submenu.route
                              ? " !text-white"
                              : ""
                          }
                        >
                          {submenu?.icon}
                        </ListItemIcon>

                        <ListItemText
                          primary={submenu?.title}
                          sx={{ whiteSpace: "break-spaces" }}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
              <Divider />
            </Fragment>
          ))}

          <Box hidden={open}>
            <Tooltip
              title={"Click Here To Logout"}
              followCursor
              arrow
              placement="top-end"
            >
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <ExitToApp />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItemButton>
            </Tooltip>
          </Box>
        </List>
        <Box hidden={!open} sx={{ textAlign: "center" }}>
          <Typography>Hi {user?.displayName},</Typography>
          <Typography variant="caption">Click here to logout</Typography>
          <div className="py-5">
            <Button
              variant="contained"
              onClick={handleLogout}
              startIcon={<ExitToApp />}
              color="error"
              className="bg-red-500 !rounded-full "
            >
              Logout
            </Button>
          </div>
        </Box>
      </CustomDrawer>
    </div>
  );
};

export default Drawer;
