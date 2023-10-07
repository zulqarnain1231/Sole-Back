import React from "react";
import { RiMenu4Fill, RiHome6Fill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
  const Router = useLocation();
  const menu = [
    {
      route: "/home",
      icon: (
        <RiHome6Fill
          className={`text-3xl ${
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
          className={`text-3xl ${
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
          className={`text-3xl ${
            Router.pathname == "/settings"
              ? "text-brand-main"
              : "text-black-off group-hover:text-brand-main group-hover:duration-200"
          } `}
        />
      ),
    },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-16 p-4 bg-black-main">
      <RiMenu4Fill className="text-black-off text-5xl cursor-pointer" />
      <div className="w-full flex flex-col items-center justify-start gap-4">
        {menu.map((item: any, index: number) => (
          <Link
            key={index}
            to={item.route}
            className={`h-[56px] w-[56px] flex items-center justify-center relative bg-transparent rounded-md ${
              Router.pathname == item.route
                ? "bg-brand-main/30 after:-left-5"
                : "hover:bg-brand-main/30 hover:duration-200   after:-left-5  hover:after:duration-200 after:opacity-0 hover:after:opacity-100"
            } after:absolute after:h-full after:bg-brand-main after:w-[4px] after:rounded-t-sm after:rounded-b-sm  group`}
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
