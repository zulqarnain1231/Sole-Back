import React, { useState } from "react";
import CashBack from "./CashBack";
import NoCashBack from "./NoCashBack";

const Home = () => {
  const [cashBack, setCashBack] = useState<boolean>(true);
  return (
    <div className="w-full min-h-[calc(100dvh-134px)] flex flex-col items-center justify-center bg-white-main shadow-md rounded-lg px-2">
      {cashBack ? <CashBack /> : <NoCashBack />}
    </div>
  );
};

export default Home;
