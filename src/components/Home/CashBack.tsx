import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidChevronRight } from "react-icons/bi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiSparklingFill } from "react-icons/ri";

const CashBack = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <img
        className="w-[200px] h-[130px] object-fill"
        src="/Assets/Home/Adidas.png"
        alt=""
      />
      <h2 className="text-4xl text-center text-black-secondary font-semibold">
        Adidas
      </h2>
      <p className="text-center text-lg text-black-off font-medium font-manrope">
        Apparel Company
      </p>
      <div className="h-[54px] sm:w-[320px] w-full flex items-center justify-center gap-6 border border-white-secondary rounded-[36px] shadow-md px-3">
        <AiFillDollarCircle className="text-success text-3xl" />
        <p className="text-success text-center text-xl font-semibold">
          Upto 10% Cashback
        </p>
        <IoIosInformationCircleOutline className="text-success text-2xl" />
      </div>
      <button className="h-[60px] sm:w-[450px] w-full flex items-center justify-between bg-brand-main text-black-main rounded-xl px-3">
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
