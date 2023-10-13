import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import { MdLaptop, MdMarkUnreadChatAlt } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { HiOutlineExternalLink, HiOutlineLogout } from "react-icons/hi";
import ReactFlagsSelect from "react-flags-select";
import * as Icons from "../../constants/Svg/Icons";

const Account = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-5 px-4 py-8">
      <CategoryCard
        name="Auto-activate cashback"
        icon={
          <Icons.Monitor
            fill="none"
            stroke=""
            ClassName="text-black-main h-[24px] w-[24px] flex-shrink-0 mt-1"
          />
        }
      />
      <CategoryCard
        name="Push notification on activation"
        icon={
          <Icons.Notification
            fill="none"
            stroke=""
            ClassName="text-black-main h-[24px] w-[24px] flex-shrink-0 mt-1"
          />
        }
      />
      <div className="w-full flex items-start justify-start sm:gap-4 gap-2  rounded-md border-2 border-black-greish sm:p-4 p-2">
        <Icons.Language
          fill="none"
          stroke=""
          ClassName="text-black-main h-[24px] w-[24px] flex-shrink-0 sm:inline-block hidden mt-1"
        />
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <p className="text-black-main sm:text-2xl text-xl font-semibold">
            Country/language
          </p>
          <p className="xl:w-[50%] lg:w-[70%] md:w-[90%] w-full text-black-off sm:text-lg text-base font-medium font-manrope">
            Choose the language you’d like to use with Soleback. Your language
            is currently set to: English (US)
          </p>
          <ReactFlagsSelect
            className="w-full h-[60px] font-jakarta font-semibold rounded-[20px]"
            selectButtonClassName="h-full rounded-[20px] focus:outline-none focus:border-brand-main border-2"
            fullWidth
            selectedSize={20}
            optionsSize={20}
            selected={selectedCountry}
            onSelect={(code) => setSelectedCountry(code)}
          />
        </div>
      </div>
      <div className="w-full flex items-start justify-start sm:gap-4 gap-2  rounded-md border-2 border-black-greish sm:p-4 p-2">
        <BsFillPersonFill className="text-black-main text-2xl flex-shrink-0 sm:inline-block hidden mt-1" />
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <p className="text-black-main sm:text-2xl text-xl font-semibold">
            Account Management
          </p>
          <p className="text-black-off sm:text-lg text-base font-medium font-manrope">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from
          </p>
          <button className="h-[56px] sm:w-[240px] w-full flex items-center justify-center gap-3 text-brand-main sm:text-xl text-lg font-semibold border-2 border-black-greish rounded-lg">
            Manage Account
            <HiOutlineExternalLink className="text-brand-main text-2xl flex-shrink-0" />
          </button>
        </div>
      </div>
      <div className="w-full flex sm:flex-row flex-col items-center sm:justify-between justify-start gap-4">
        <button className="h-[56px] sm:w-[180px] w-full flex items-center justify-center gap-3 text-[#FC3400] sm:text-xl text-lg font-semibold border-2 border-black-greish rounded-lg">
          <Icons.Logout
            stroke=""
            fill="none"
            ClassName="text-[#FC3400] h-[28px] w-[28px] flex-shrink-0"
          />
          Logout
        </button>
        <div className="flex sm:w-auto w-full sm:flex-row flex-col items-center sm:justify-center justify-start gap-4">
          <button className="sm:w-[150px] w-full h-[56px] flex items-center justify-center text-black-secondary sm:text-xl text-lg font-semibold bg-transparent border-2 border-[#E3E3E3] rounded-[8px]">
            Discard
          </button>
          <button className="sm:w-[150px] w-full h-[56px] flex items-center justify-center text-black-secondary sm:text-xl text-lg font-semibold bg-brand-main hover:bg-gradient-radial rounded-[8px]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
