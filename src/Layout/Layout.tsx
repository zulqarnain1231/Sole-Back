import React from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar";
import { RiNotification3Fill } from "react-icons/ri";
import { Indicator } from "@mantine/core";
import NotificationBar from "./NotificationBar";

interface Props {
  children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }: Props) => {
  const Router = useLocation();
  //   const showSidebar = Router.pathname.includes("/dashboard");
  return (
    <React.Fragment>
      <div
        className={`w-full h-full md:h-screen md:grid md:grid-cols-[100px,calc(100%-100px)] flex flex-col gap-6 md:gap-0
        `}
      >
        <SideBar />
        <main className="w-full h-full flex flex-col items-center justify-start gap-4 ">
          <NotificationBar />
          {children}
        </main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
