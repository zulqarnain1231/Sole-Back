import React from 'react'
import { FiSearch, FiFilter } from 'react-icons/fi';

const TopBar = () => {
  return (
    <div className="w-full flex items-center justify-between gap-4">
      <div className="w-full h-[50px] flex items-center  justify-start gap-4 px-4 bg-white-off border border-white-secondary rounded-lg">
        <FiSearch className="text-[#84818A80]/50 text-3xl" />
        <input
          type="text"
          placeholder="Quick Search"
          autoComplete="off"
          className="h-full w-full focus:outline-none bg-transparent text-xl font-manrope text-[#84818A80]/50 font-medium"
        />
      </div>
      <button className="w-[200px] h-[50px] flex items-center justify-center gap-3 text-black-secondary text-xl font-medium bg-transparent border-2 border-[#E3E3E3] rounded-[8px]">
        <FiFilter className="text-black-main/70 text-xl" />
        Filters
        <span className="h-[30px] w-[30px] rounded-full bg-brand-main text-black-main text-xl">
          2
        </span>
      </button>
    </div>
  );
}

export default TopBar
