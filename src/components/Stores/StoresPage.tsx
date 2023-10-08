import React from "react";
import TopBar from "./TopBar";
import StoreCard from "./StoreCard";

const StoresPage = () => {
  const stores = [
    {
      name: "Samsung Electronics",
      logo: "/Assets/Stores/Samsung.png",
      category: "Electronics corporation",
      cashback: 10,
      favourite: true,
    },
    {
      name: "Booking.com",
      logo: "/Assets/Stores/Booking.png",
      category: "Travel Company",
      cashback: 5,
      favourite: true,
    },
    {
      name: "H&M",
      logo: "/Assets/Home/HM.png",
      category: "Clothing",
      cashback: 5,
      favourite: false,
    },
    {
      name: "Adidas",
      logo: "/Assets/Home/Adidas.png",
      category: "Apparel Company",
      cashback: 5,
      favourite: false,
    },
  ];
  return (
    <div className="w-full h-[calc(100dvh-134px)] flex flex-col items-center justify-start gap-5 bg-white-main shadow-md rounded-lg md:px-4 px-2 py-6 overflow-auto hide-scrollbar">
      <TopBar />
      {stores.map((item: any, index: number) => (
        <StoreCard
          key={index}
          name={item.name}
          logo={item.logo}
          cashback={item.cashback}
          category={item.category}
          favourite={item.favourite}
        />
      ))}
    </div>
  );
};

export default StoresPage;
