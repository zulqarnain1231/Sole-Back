import React, { useState } from "react";
import { FiSearch, FiFilter, FiChevronDown } from "react-icons/fi";
import { Checkbox, Popover, RangeSlider, Slider } from "@mantine/core";
import { FiChevronUp } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const TopBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleIsOpen = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  const filters = [
    {
      name: "Electronics",
      checked: true,
    },
    {
      name: "Hardware Store",
      checked: false,
    },
    {
      name: "Apparel Company",
      checked: false,
    },
    {
      name: "Perfume Brand",
      checked: false,
    },
    {
      name: "Online Retail",
      checked: false,
    },
    {
      name: "Travel Company",
      checked: false,
    },
  ];
  const marks = [
    { value: 20, label: "20%" },
    { value: 50, label: "50%" },
    { value: 80, label: "80%" },
  ];
  return (
    <div className="w-full flex sm:flex-row flex-col items-center sm:justify-between justify-start gap-4">
      <div className="w-full h-[50px] flex items-center  justify-start gap-4 px-4 bg-white-off border border-white-secondary rounded-lg">
        <FiSearch className="text-[#84818A80]/50 text-3xl" />
        <input
          type="text"
          placeholder="Quick Search"
          autoComplete="off"
          className="h-full w-full focus:outline-none bg-transparent text-xl font-manrope text-[#84818A80]/50 font-medium"
        />
      </div>

      <Popover
        opened={isOpen}
        position="bottom-end"
        shadow="lg"
        radius={"md"}
        zIndex={10}
        classNames={{ dropdown: "!p-0" }}
        offset={12}
      >
        <Popover.Target>
          <button
            onClick={toggleIsOpen}
            className="sm:w-[200px] w-full h-[50px] flex items-center justify-center gap-3 text-black-secondary text-xl font-medium bg-transparent border-2 border-[#E3E3E3] rounded-[8px]"
          >
            <FiFilter className="text-black-main/70 text-xl" />
            Filters
            <span className="h-[30px] w-[30px] rounded-full bg-brand-main text-black-main text-xl">
              2
            </span>
          </button>
        </Popover.Target>
        <Popover.Dropdown>
          <div className="w-[340px] sm:h-[500px] h-auto overflow-auto flex flex-col items-center justify-start gap-5 py-4 px-3 hide-scrollbar">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center justify-start gap-2">
                <h2 className="text-black-main text-2xl font-semibold">
                  Filter
                </h2>
                <span className="flex items-center justify-center bg-brand-main text-white-main text-sm font-semibold h-[20px] w-[20px] rounded-full">
                  2
                </span>
              </div>
              <button
                onClick={toggleIsOpen}
                className="text-brand-main text-base font-medium underline"
              >
                Clear All
              </button>
            </div>
            <span className="w-full h-[2px] bg-black-off/10"></span>
            <div className="w-full flex flex-col items-center justify-start gap-4">
              <div className="w-full flex items-center justify-start gap-2">
                <h2 className="text-black-main text-xl font-semibold">
                  Store Type
                </h2>
                <FiChevronUp className="text-black-main text-lg" />
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-3">
                {filters.map((item: any, index: number) => (
                  <Checkbox
                    key={index}
                    defaultChecked={item.checked}
                    label={item.name}
                    classNames={{
                      input: "checked:bg-brand-main cursor-pointer",
                      label: "text-base text-black-off",
                    }}
                    className="!text-lg text-black-secondary font-semibold font-manrope flex items-center"
                    color="yellow"
                    size="sm"
                  />
                ))}
              </div>
            </div>
            <span className="w-full h-[2px] bg-black-off/10"></span>
            <div className="w-full flex flex-col items-center justify-start gap-4">
              <div className="w-full flex items-center justify-start gap-2">
                <h2 className="text-black-main text-xl font-semibold">
                  Cashback Offer
                </h2>
                <FiChevronDown className="text-black-main text-lg" />
              </div>
              <div className="w-full flex flex-col items-start justify-start gap-3">
                <div className="w-full flex items-center justify-between gap-4">
                  <span className="h-[30px] w-[80px] flex items-center justify-start text-black-main text-sm font-semibold rounded-lg border border-white-main bg-[#E9E9E9] px-3">
                    5%
                  </span>
                  <span className="h-[30px] w-[80px] flex items-center justify-start text-black-main text-sm font-semibold rounded-lg border border-white-main bg-[#E9E9E9] px-3">
                    15%
                  </span>
                </div>
                {/* <Slider
                  color="blue"
                  showLabelOnHover={false}
                  marks={[
                    { value: 20, label: "20%" },
                    { value: 50, label: "50%" },
                    { value: 80, label: "80%" },
                  ]}
                />
                <RangeSlider
                  classNames={{ thumb: "bg-white-main p-4" }}
                  color="yellow"
                  label={null}
                  defaultValue={[20, 60]}
                  thumbSize={20}
                  thumbChildren={[
                    <GoDotFill className="text-lg text-brand-main" key="1" />,
                    <GoDotFill className="text-lg text-brand-main" key="2" />,
                  ]}
                /> */}
                <div className="w-full flex sm:flex-row flex-col items-center sm:justify-between justify-start gap-4">
                  <button
                    onClick={toggleIsOpen}
                    className="sm:w-[130px] w-full h-[46px] flex items-center justify-center text-black-secondary text-base font-semibold bg-transparent border-2 border-[#E3E3E3] rounded-[8px]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={toggleIsOpen}
                    className="sm:w-[130px] w-full h-[46px] flex items-center justify-center text-black-secondary text-base font-semibold bg-brand-main rounded-[8px]"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default TopBar;