import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RiNotification3Fill } from "react-icons/ri";
import { Indicator } from "@mantine/core";
import { CgMenuRight } from "react-icons/cg";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { Popover } from "@mantine/core";

type Props = {
  openDrawer: () => void;
};

const NotificationBar: React.FC<Props> = ({ openDrawer }: Props) => {
  const Router = useLocation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const popoverRef = useRef<any>(null);
  const toggleIsOpen = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  // function to detect the click outside the popover component and close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <div className="w-full flex items-center justify-between lg:px-10 md:px-6 px-4 py-6 shadow-md">
      <h2 className="text-black-main sm:text-3xl text-2xl font-medium capitalize">
        {Router.pathname.slice(1, Router.pathname.length)}
      </h2>
      <div className="h-full flex items-center justify-center gap-5">
        <span className="bg-brand-main py-1 px-2 text-black-main text-center text-sm font-semibold rounded-md">
          2.27 zl / 0.0 zl
        </span>
        <Popover
          position="bottom"
          withArrow
          arrowSize={15}
          arrowRadius={4}
          shadow="lg"
          radius={"md"}
          opened={isOpen}
        >
          <Popover.Target>
            <Indicator color="red" size={8} processing>
              <RiNotification3Fill
                onClick={toggleIsOpen}
                className="text-[22px] text-[#B0B7C3] cursor-pointer"
              />
            </Indicator>
          </Popover.Target>
          <Popover.Dropdown ref={popoverRef}>
            <div className="sm:w-[400px] w-full flex flex-col items-start justify-start gap-2 py-2 font-manrope">
              <div className="w-full flex items-center justify-between">
                <div className="flex items-center justify-start gap-2">
                  <h2 className="sm:text-2xl text-lg text-black-main font-semibold">
                    Notifications
                  </h2>
                  <span className="h-[24px] w-[60px] flex items-center justify-center rounded-xl bg-brand-main text-white-main text-xs font-semibold">
                    2 New
                  </span>
                </div>
                <div className="flex items-center justify-start gap-2">
                  <LiaCheckDoubleSolid className="text-xl text-brand-main" />
                  <p className="text-brand-main text-center text-base font-medium">
                    Mark as read
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center justify-between gap-2 border border-white-secondary bg-white-off rounded p-3">
                <div className="w-full h-full flex flex-col items-start justify-start gap-2">
                  <p className="text-black-main text-left text-xl font-medium">
                    Your cashback from the Nike Store is ready to withdraw
                  </p>
                  <p className="text-black-main/50 text-sm font-medium">
                    Today 10:13 AM
                  </p>
                </div>
                <div className="w-[100px] h-[80px] flex items-center justify-center rounded-full border border-white-secondary">
                  <img
                    className="object-contain h-[40px] w-[50px]"
                    src="/Assets/Home/Adidas.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-between gap-2 border border-white-secondary bg-white-off rounded p-3">
                <div className="w-full h-full flex flex-col items-start justify-start gap-3">
                  <div className="w-full flex flex-col items-start justify-start">
                    <p className="text-black-main text-left text-xl font-medium">
                      Your got cashback from Aliexpress
                    </p>
                    <p className="text-black-main/50 text-sm font-medium">
                      May 13, 2023 at 09:10 AM
                    </p>
                  </div>
                  <button className="text-brand-main text-base font-medium underline">
                    View details
                  </button>
                </div>
                <div className="w-[100px] h-[80px] flex items-center justify-center rounded-full border border-white-secondary">
                  <img
                    className="object-fill h-[50px] w-[60px]"
                    src="/Assets/Home/AliExpress.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="w-full flex items-center justify-between gap-2 p-3">
                <div className="w-full h-full flex flex-col items-start justify-start gap-3">
                  <div className="w-full flex flex-col items-start justify-start">
                    <p className="text-black-main text-left text-xl font-medium">
                      Your got cashback from H&M
                    </p>
                    <p className="text-black-main/50 text-sm font-medium">
                      May 13, 2023 at 09:10 AM
                    </p>
                  </div>
                  <button className="text-brand-main text-base font-medium underline">
                    View details
                  </button>
                </div>
                <div className="w-[100px] h-[80px] flex items-center justify-center rounded-full border border-white-secondary">
                  <img
                    className="object-contain h-[40px] w-[50px]"
                    src="/Assets/Home/HM.png"
                    alt=""
                  />
                </div>
              </div>
              <button className="text-brand-main text-lg font-normal">
                View all notifications
              </button>
            </div>
          </Popover.Dropdown>
        </Popover>
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
