import React, { useState } from "react";
import CategoryCard from "./CategoryCard";
import { MdLaptop, MdMarkUnreadChatAlt } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { HiOutlineExternalLink, HiOutlineLogout } from "react-icons/hi";
import ReactFlagsSelect from "react-flags-select";

const Account = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-5 px-4 py-8">
      <CategoryCard
        name="Auto-activate cashback"
        icon={<MdLaptop className="text-black-main text-2xl flex-shrink-0" />}
      />
      <CategoryCard
        name="Push notification on activation"
        icon={
          <MdMarkUnreadChatAlt className="text-black-main text-2xl flex-shrink-0" />
        }
      />
      <div className="w-full flex items-start justify-start gap-4  rounded-md border-2 border-black-greish sm:p-4 p-2">
        <IoLanguage className="text-black-main text-2xl flex-shrink-0" />
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <p className="text-black-main text-2xl font-semibold">
            Country/language
          </p>
          <p className="xl:w-[50%] lg:w-[70%] md:w-[90%] w-full text-black-off text-lg font-medium font-manrope">
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
      <div className="w-full flex items-start justify-start gap-4  rounded-md border-2 border-black-greish sm:p-4 p-2">
        <BsFillPersonFill className="text-black-main text-2xl flex-shrink-0" />
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <p className="text-black-main text-2xl font-semibold">
            Account Management
          </p>
          <p className="text-black-off text-lg font-medium font-manrope">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from
          </p>
          <button className="h-[56px] sm:w-[240px] w-full flex items-center justify-center gap-3 text-brand-main sm:text-xl text-lg font-semibold border-2 border-black-greish rounded-lg">
            Manage Account
            <HiOutlineExternalLink className="text-brand-main text-2xl flex-shrink-0" />
          </button>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <button className="h-[56px] sm:w-[180px] w-full flex items-center justify-center gap-3 text-[#FC3400] sm:text-xl text-lg font-semibold border-2 border-black-greish rounded-lg">
          <HiOutlineLogout className="text-[#FC3400] text-2xl flex-shrink-0" />
          Logout
        </button>
        <div className="flex items-center justify-center gap-4">
          <button className="sm:w-[150px] w-full h-[56px] flex items-center justify-center text-black-secondary sm:text-xl text-lg font-semibold bg-transparent border-2 border-[#E3E3E3] rounded-[8px]">
            Discard
          </button>
          <button className="sm:w-[150px] w-full h-[56px] flex items-center justify-center text-black-secondary sm:text-xl text-lg font-semibold bg-brand-main rounded-[8px]">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
