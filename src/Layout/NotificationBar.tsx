import React from "react";
import { useLocation } from "react-router-dom";
import { RiNotification3Fill } from "react-icons/ri";
import { Indicator } from "@mantine/core";
import { CgMenuRight } from "react-icons/cg";

type Props = {
  openDrawer: () => void;
};

const NotificationBar: React.FC<Props> = ({ openDrawer }: Props) => {
  const Router = useLocation();
  return (
    <div className="w-full flex items-center justify-between lg:px-10 md:px-6 px-4 py-6 shadow-md">
      <h2 className="text-black-main text-2xl font-medium capitalize">
        {Router.pathname.slice(1, Router.pathname.length)}
      </h2>
      <div className="h-full flex items-center justify-center gap-5">
        <span className="bg-brand-main py-1 px-2 text-black-main text-center text-sm font-semibold rounded-md">
          2.27 zl / 0.0 zl
        </span>
        <Indicator color="red" size={8} processing>
          <RiNotification3Fill className="text-[22px] text-[#B0B7C3]" />
        </Indicator>
      </div>
      <button
        onClick={openDrawer}
        className="h-full md:hidden flex items-center justify-center"
      >
        <CgMenuRight className="text-black-main text-2xl" />
      </button>
    </div>
  );
};

export default NotificationBar;