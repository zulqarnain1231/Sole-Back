import React, { useState } from "react";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  return (
    <React.Fragment>
      <div
        className={`w-full h-full md:h-screen md:grid md:grid-cols-[100px,calc(100%-100px)] flex flex-col gap-6 md:gap-0
        `}
      >
        <SideBar open={isOpen} toggleIsOpen={toggleDrawer} />
        <main className="w-full h-full flex flex-col items-center justify-start gap-4 bg-white-off">
          <NotificationBar openDrawer={toggleDrawer} />
          <div className="w-full h-full lg:px-10 md:px-6 px-4 py-6">
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Layout;
