import React from "react";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsDiscord } from "react-icons/bs";
const LoginWithSocail = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-8">
      <div className="w-full flex flex-col items-center justify-start gap-4">
        <h1 className="text-black-secondary text-center sm:text-4xl text-3xl font-semibold">
          Welcome to Soleback
        </h1>
        <p className="sm:text-lg lg:w-[60%] w-full text-base text-center text-black-off font-manrope font-medium">
          Shop at your favourite stores. use discount codes and get some
          cashback.
        </p>
      </div>
      {/* login with social media */}
      <div className="w-full flex items-center justify-center gap-4">
        <button className="w-[80px] h-[80px] flex items-center justify-center rounded-full google-icon">
          <FcGoogle className="text-3xl" />
        </button>
        <button className="w-[80px] h-[80px] flex items-center justify-center bg-[#DDEBFD] rounded-full">
          <BsFacebook className="text-3xl text-blue-500" />
        </button>
        <button className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-[#DEE0FC]">
          <BsDiscord className="text-3xl text-[#5865F2]" />
        </button>
      </div>
      <div className="w-full flex items-center justify-center gap-3">
        <span className="h-[2px] sm:w-[200px] w-[120px] bg-[#EBEAED]"></span>
        <p className="sm:text-lg text-base text-black-secondary font-medium">
          or
        </p>
        <span className="h-[2px] sm:w-[200px] w-[120px] bg-[#EBEAED]"></span>
      </div>
      <button className="sm:w-[450px] w-full h-[56px] flex items-center justify-center text-black-secondary text-lg font-semibold bg-transparent border-2 border-[#E3E3E3] rounded-[6px]">
        Login with Email
      </button>
      <div className="w-full flex items-center justify-center gap-2">
        <p className="text-base text-center text-black-off font-medium">
          Don’t have an account?
        </p>
        <p className="text-base text-center text-brand-main font-medium cursor-pointer">
          Sign Up
        </p>
      </div>
    </div>
  );
};

export default LoginWithSocail;
