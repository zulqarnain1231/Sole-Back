import React from "react";

type Props = {
  state: boolean;
  setState: () => void;
};

const ToggleMenu: React.FC<Props> = ({ state, setState }: Props) => {
  return (
    <div className="w-full flex items-center justify-start gap-10 p-4 border-b-2 border-b-black-greish">
      <button
        onClick={setState}
        className={`h-full flex items-center justify-center relative after:absolute after:left-0 after:-bottom-4 after:w-full after:h-0 after:bg-brand-main hover:after:h-[3px] hover:after:duration-200  ${
          state ? "text-brand-main after:h-[3px]" : "text-black-off"
        } text-xl font-semibold`}
      >
        Account
      </button>
      <button
        onClick={setState}
        className={`h-full flex items-center justify-center relative after:absolute after:left-0 after:-bottom-4 after:w-full after:h-0 after:bg-brand-main hover:after:h-[3px] hover:after:duration-200  ${
          state ? "text-black-off" : "text-brand-main after:h-[3px]"
        } text-xl font-semibold`}
      >
        Categories
      </button>
    </div>
  );
};

export default ToggleMenu;
