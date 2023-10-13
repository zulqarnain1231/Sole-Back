import React, { useState } from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidChevronRight } from "react-icons/bi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiSparklingFill } from "react-icons/ri";
import { Popover } from "@mantine/core";
import * as Icons from "../../constants/Svg/Icons";

const CashBack = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <img
        className="w-[200px] h-[130px] object-fill pointer-events-none"
        src="/Assets/Home/Adidas.png"
        alt=""
      />
      <h2 className="text-4xl text-center text-black-secondary font-semibold">
        Adidas
      </h2>
      <p className="text-center text-lg text-black-off font-medium font-manrope">
        Apparel Company
      </p>

      <Popover
        position="top"
        withArrow
        arrowSize={20}
        arrowRadius={4}
        shadow="md"
        radius={"lg"}
        opened={isOpen}
      >
        <Popover.Target>
          <div
            onMouseEnter={toggleIsOpen}
            onMouseLeave={toggleIsOpen}
            className="h-[54px] sm:w-[320px] w-full flex items-center justify-center gap-6 cursor-pointer border border-white-secondary rounded-[36px] shadow-md px-3"
          >
            <Icons.Dollar
              fill="none"
              stroke=""
              ClassName="text-success h-[30px] w-[30px]"
            />
            <p className="text-success text-center text-xl font-semibold">
              Upto 10% Cashback
            </p>
            <IoIosInformationCircleOutline className="text-black-off text-2xl" />
          </div>
        </Popover.Target>
        <Popover.Dropdown style={{ pointerEvents: "none" }}>
          <div className="sm:w-[400px] w-full flex flex-col items-center justify-start gap-4 sm:p-4 p-2 font-manrope">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center justify-start gap-4">
                <span className="h-[8px] w-[8px] bg-blue-700 rounded-sm"></span>
                <p className="text-lg text-center text-black-off font-semibold">
                  Online sale commission rate
                </p>
              </div>

              <p className="text-xl text-black-main font-semibold">0.5%</p>
            </div>
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center justify-start gap-4">
                <span className="h-[8px] w-[8px] bg-success rounded-sm"></span>
                <p className="text-lg text-center text-black-off font-semibold">
                  Certain products
                </p>
              </div>

              <p className="text-xl text-black-main font-semibold">1%</p>
            </div>
          </div>
        </Popover.Dropdown>
      </Popover>

      <button className="h-[60px] sm:w-[450px] w-full flex items-center justify-between bg-brand-main hover:bg-gradient-radial text-black-main rounded-xl px-3">
        <span></span>
        <span className="h-full flex items-center justify-center gap-2 text-black-main text-xl font-semibold">
          <RiSparklingFill className="text-black-main text-2xl" />
          Activate Cashback
        </span>
        <BiSolidChevronRight className="text-2xl text-black-main" />
      </button>
    </div>
  );
};

export default CashBack;
