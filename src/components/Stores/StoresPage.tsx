import React from "react";
import TopBar from "./TopBar";
import { FaStar, FaRegStar } from "react-icons/fa";
const StoresPage = () => {
  return (
    <div className="w-full min-h-[calc(100dvh-134px)] flex flex-col items-center justify-start gap-5 bg-white-main shadow-md rounded-lg md:px-4 px-2 py-6">
      <TopBar />
      <div className="w-full flex items-center justify-between gap-4 border border-white-secondary rounded-lg p-4">
        <div className="w-full h-full flex items-center justify-start gap-5">
          <FaStar className="text-xl text-brand-main" />
          <img
            className="h-[40px] w-[60px] object-contain"
            src="/Assets/Stores/Samsung.png"
            alt=""
          />
          <div className="h-full flex flex-col items-start justify-start gap-2">
            <p className="text-black-main text-xl font-medium">
              Samsung Electronics
            </p>
            <p className="text-base text-black-off font-manrope font-medium">
              Electronics corporation
            </p>
          </div>
        </div>
        <div className="h-full flex items-center justify-center gap-6">
          <span className="h-[50px] w-[100px] flex items-center justify-center border-2 border-white-secondary rounded-[36px] shadow-md text-success text-lg font-medium">
            Upto 10%
          </span>
        </div>
      </div>
    </div>
  );
};

export default StoresPage;
