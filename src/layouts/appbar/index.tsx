import { CardGiftcard, Mail, ViewCarousel } from "@mui/icons-material";
import { Badge } from "@mui/material";
import Link from "next/link";
import AccountMenu from "./AccountMenu";

type Props = {
  title?: string;
};

export default function AppBar({ title = "Welcome Back!" }: Props) {
  const notifications = [];

  return (
    <div className="sticky top-0  z-[1000] bg-white ">
      <header className="h-16  shadow-lg border-b">
        <div className="flex h-16 items-center justify-between px-4  ">
          <h1 className="hidden text-xl lg:block">{title}</h1>
          <div className="flex items-center gap-6">
            <Link href={`/`}>
              <a className="cursor-pointer rounded-lg bg-red-100 p-2">
                <CardGiftcard className="h-6 w-6 text-red-500" />
              </a>
            </Link>

            <Badge badgeContent={notifications?.length || 0} color="warning">
              <div className="cursor-pointer rounded-lg bg-amber-100 p-2">
                <Mail className="h-6 w-6 text-amber-700" />
              </div>
            </Badge>

            <Link href={`/e`}>
              <a className="cursor-pointer rounded-lg bg-blue-100 p-2">
                <ViewCarousel className="h-6 w-6 text-blue-700" />
              </a>
            </Link>

            <AccountMenu />
          </div>
        </div>
      </header>
    </div>
  );
}
