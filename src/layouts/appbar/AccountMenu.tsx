import {
  AccountCircle,
  GridViewRounded,
  Logout,
  Password,
  Person,
  Upgrade,
} from "@mui/icons-material";
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";

type Props = {};

export default function AccountMenu({}: Props) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleLogout = async () => {};

  return (
    <div>
      <button
        className="flex items-center gap-2"
        onClick={(event: MouseEvent<HTMLElement>) =>
          setAnchorEl(event.currentTarget)
        }
      >
        <Avatar className="border" src={""}>
          {"A"}
        </Avatar>
        <div className="hidden text-left lg:block">
          <h4 className="text-sm">{"Admin"}</h4>
          <p className="text-xs text-gray-600">{"admin@gmail.com"}</p>
        </div>
      </button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        onClick={() => setAnchorEl(null)}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <div>
          <MenuItem onClick={() => router.push("/")}>
            <ListItemIcon>
              <GridViewRounded className="h-5 w-5" />
            </ListItemIcon>
            {"Merchant Dashboard"}
          </MenuItem>
          <Divider />
        </div>
        <div>
          <MenuItem onClick={() => router.push("/")}>
            <ListItemIcon>
              <Person className="h-5 w-5" />
            </ListItemIcon>
            Profile
          </MenuItem>
          <Divider />
        </div>

        <div>
          <MenuItem onClick={() => router.push("/")}>
            <ListItemIcon>
              <AccountCircle className="h-5 w-5" />
            </ListItemIcon>
            {"Student"}
          </MenuItem>

          <Divider />
        </div>
        <div>
          <MenuItem onClick={() => router.push("/")}>
            <ListItemIcon>
              <Upgrade className="h-5 w-5" />
            </ListItemIcon>
            {"Upgrade Membership"}
          </MenuItem>

          <Divider />
        </div>
        <div>
          <MenuItem onClick={() => router.push("/")}>
            <ListItemIcon>
              <Password className="h-5 w-5" />
            </ListItemIcon>
            {"Change Password"}
          </MenuItem>

          <Divider />
        </div>

        <div>
          <MenuItem onClick={() => router.push("/")}>
            <ListItemIcon>
              <Password className="h-5 w-5" />
            </ListItemIcon>
            {"Change Password"}
          </MenuItem>

          <Divider />
        </div>

        <MenuItem onClick={() => handleLogout()}>
          <ListItemIcon>
            <Logout fontSize="small" color="error" />
          </ListItemIcon>
          {"Logout"}
        </MenuItem>
      </Menu>
    </div>
  );
}
