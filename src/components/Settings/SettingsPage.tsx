import React, { useState } from "react";
import ToggleMenu from "./ToggleMenu";
import Account from "./Account";
import Categories from "./Categories";

const SettingsPage = () => {
  const [isAccount, setIsAccount] = useState<boolean>(true);
  const toggleIsAccount = () => {
    setIsAccount((prev) => !prev);
  };
  return (
    <div className="w-full flex flex-col items-center justify-start bg-white-main shadow-md rounded-lg overflow-auto hide-scrollbar">
      <ToggleMenu state={isAccount} setState={toggleIsAccount} />
      {isAccount ? <Account /> : <Categories />}
    </div>
  );
};

export default SettingsPage;
