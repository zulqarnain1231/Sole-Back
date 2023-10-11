import React from "react";
import { MdLaptop } from "react-icons/md";
import { Switch } from "@mantine/core";

const Account = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-2 p-4">
      <div className="w-full flex items-center justify-between rounded-md border-2 border-black-greish sm:p-4 p-2">
        <div className="h-full flex items-center justify-start gap-3">
          <MdLaptop className="text-black-main text-2xl" />
          <p className="text-black-main text-2xl font-semibold">
            Auto-activate cashback
          </p>
        </div>
        <Switch
          defaultChecked
          size="lg"
          color="#F2B705"
          classNames={{ track: "cursor-pointer" }}
        />
      </div>
    </div>
  );
};

export default Account;
