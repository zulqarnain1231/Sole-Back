import React, { useState } from "react";
import { RiMenu4Fill, RiHome6Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { VscLayoutSidebarLeft } from "react-icons/vsc";
import { Link, useLocation } from "react-router-dom";
import { Drawer } from "@mantine/core";

type Props = {
  open: boolean;
  toggleIsOpen: () => void;
};

const SideBar: React.FC<Props> = ({ open, toggleIsOpen }: Props) => {
  const Router = useLocation();

  const menu = [
    {
      route: "/home",
      icon: (
        <RiHome6Fill
          className={`md:text-3xl text-2xl ${
            Router.pathname == "/home"
              ? "text-brand-main"
              : "text-black-off group-hover:text-brand-main group-hover:duration-200"
          } `}
        />
      ),
    },
    {
      route: "/stores",
      icon: (
        <FaStore
          className={`md:text-3xl text-2xl ${
            Router.pathname == "/stores"
              ? "text-brand-main"
              : "text-black-off group-hover:text-brand-main group-hover:duration-200"
          } `}
        />
      ),
    },
    {
      route: "/settings",
      icon: (
        <IoSettingsSharp
          className={`md:text-3xl text-2xl ${
            Router.pathname == "/settings"
              ? "text-brand-main"
              : "text-black-off group-hover:text-brand-main group-hover:duration-200"
          } `}
        />
      ),
    },
  ];
  return (
    <>
      <div className="w-full h-full md:flex hidden flex-col items-center justify-start gap-16 p-4 bg-black-main">
        <RiMenu4Fill className="text-black-off text-5xl cursor-pointer" />
        <div className="w-full flex flex-col items-center justify-start gap-4">
          {menu.map((item: any, index: number) => (
            <Link
              key={index}
              to={item.route}
              className={`h-[56px] w-[56px] flex items-center justify-center relative rounded-md ${
                Router.pathname == item.route
                  ? "bg-brand-main/30 after:-left-5"
                  : "bg-transparent hover:bg-brand-main/30 hover:duration-200   after:-left-5  hover:after:duration-200 after:opacity-0 hover:after:opacity-100"
              } after:absolute after:h-full after:bg-brand-main after:w-[4px] after:rounded-t-sm after:rounded-b-sm  group`}
            >
              {item.icon}
            </Link>
          ))}
          <span className="h-[1px] w-full bg-black-off"></span>
          <span className="h-[56px] w-[56px] flex items-center justify-center relative bg-transparent rounded-md  hover:bg-brand-main/30 hover:duration-200   after:-left-5  hover:after:duration-200 after:opacity-0 hover:after:opacity-100 after:absolute after:h-full after:bg-brand-main after:w-[4px] after:rounded-t-sm after:rounded-b-sm  group cursor-pointer">
            <VscLayoutSidebarLeft
              className="text-3xl 
                text-black-off group-hover:text-brand-main group-hover:duration-200"
            />
          </span>
        </div>
      </div>
      {/* for mobile view */}
      <Drawer
        opened={open}
        withCloseButton={false}
        onClose={toggleIsOpen}
        padding={0}
        classNames={{
          inner: "w-[80px] p-0",
          body: "w-full h-full",
        }}
      >
        <div className="w-full h-full flex flex-col items-center justify-start gap-10 p-4 bg-black-main">
          <RiMenu4Fill className="text-black-off text-4xl cursor-pointer" />
          <div className="w-full flex flex-col items-center justify-start gap-4">
            {menu.map((item: any, index: number) => (
              <Link
                key={index}
                to={item.route}
                onClick={toggleIsOpen}
                className={`h-[46px] w-[46px] flex items-center justify-center relative rounded-md ${
                  Router.pathname == item.route
                    ? " after:-left-4 bg-brand-main/30"
                    : "hover:bg-brand-main/30 hover:duration-200 bg-transparent  after:-left-5  hover:after:duration-200 after:opacity-0 hover:after:opacity-100"
                } after:absolute after:h-full after:bg-brand-main after:w-[3px] after:rounded-t-sm after:rounded-b-sm  group`}
              >
                {item.icon}
              </Link>
            ))}
            <span className="h-[1px] w-full bg-black-off"></span>
            <span
              onClick={toggleIsOpen}
              className="h-[46px] w-[46px] flex items-center justify-center relative bg-transparent rounded-md  hover:bg-brand-main/30 hover:duration-200   after:-left-5  hover:after:duration-200 after:opacity-0 hover:after:opacity-100 after:absolute after:h-full after:bg-brand-main after:w-[4px] after:rounded-t-sm after:rounded-b-sm  group cursor-pointer"
            >
              <VscLayoutSidebarLeft
                className="md:text-3xl text-2xl 
                text-black-off group-hover:text-brand-main group-hover:duration-200"
              />
            </span>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SideBar;
