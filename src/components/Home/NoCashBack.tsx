import React from "react";

const NoCashBack = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10">
      <img
        className="rounded-full h-[200px] w-[200px] object-cover"
        src="/Assets/Home/Error.jpg"
        alt=""
      />
      <h2 className="text-4xl text-center text-black-secondary font-semibold">
        Cashback is not available on this site
      </h2>
      <p className="text-center xl:w-[48%] lg:w-[60%] w-full text-xl text-black-off font-medium font-manrope">
        If you believe that we are supporting this website, please head to
        <span className="text-brand-main font-semibold"> 'Stores'</span> and
        activate cashback manually.
      </p>
      <button
        onClick={() => {}}
        className="sm:w-[350px] w-full h-[56px] flex items-center justify-center text-black-secondary text-lg font-semibold bg-transparent border-2 border-[#E3E3E3] rounded-[8px]"
      >
        View Stores
      </button>
    </div>
  );
};

export default NoCashBack;

