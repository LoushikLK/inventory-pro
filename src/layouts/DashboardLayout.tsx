import { LOGO } from "assets";
import { Loader } from "components";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import AppBar from "./appbar";
import Drawer from "./drawer";
type Props = {
  title?: string;
  children: JSX.Element | JSX.Element[];
  className?: string;
  appBarTitle?: string;
};
export default function DashboardLayout({
  title = "Welcome To Admin Panel",
  children = <></>,
  className = "bg-gradient-to-r from-slate-50 via-stone-50 to-zinc-50",
  appBarTitle = "Inventory Dashboard",
}: Props) {
  const [isOpen, setIsOpen] = useState(true);

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Inventory App For Product Management."
        />
        <meta itemProp="image" content={LOGO.src} />
        <meta property="og:image" content={LOGO.src} />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Drawer open={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      <main
        className={`min-h-screen ${className} ${
          isOpen
            ? "ml-[calc(100vw-calc(100vw-280px))] "
            : "ml-[calc(100vw-calc(100vw-72px))] "
        }`}
      >
        <AppBar title={appBarTitle || title} />
        <Loader visible={false} />
        {children}
      </main>
    </div>
  );
}
