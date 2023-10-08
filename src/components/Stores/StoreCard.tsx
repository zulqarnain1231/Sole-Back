import React, { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

type Props = {
  name: string;
  category: string;
  logo: string;
  cashback: number;
  favourite: boolean;
};

const StoreCard: React.FC<Props> = ({
  name,
  cashback,
  category,
  logo,
  favourite,
}: Props) => {
  const [isFavourite, setIsFavourtie] = useState<boolean>(favourite);
  const [showDetail, setShowDetail] = useState<boolean>(false);
  const toggleIsFavourite = () => {
    setIsFavourtie((prevvalue) => !prevvalue);
  };
  const toggleShowDetail = () => {
    setShowDetail((prevvalue) => !prevvalue);
  };
  return (
    <div
      className={`w-full flex flex-col items-center justify-start gap-4 border-2 ${
        showDetail ? "border-brand-main" : "border-white-secondary"
      } rounded-lg`}
    >
      <div className="w-full h-full flex sm:flex-row flex-col sm:items-center items-start sm:justify-between justify-start gap-4 sm:p-4 p-3">
        {" "}
        <div className="w-full h-full flex items-center justify-start gap-5">
          <button onClick={toggleIsFavourite}>
            {isFavourite ? (
              <FaStar className="text-xl text-brand-main cursor-pointer flex-shrink-0" />
            ) : (
              <FaRegStar className="text-xl text-black-off cursor-pointer flex-shrink-0" />
            )}
          </button>

          <img
            className="h-[50px] w-[50px] object-contain pointer-events-none flex-shrink-0"
            src={logo}
            alt=""
          />
          <div className="h-full flex flex-col items-start justify-start gap-2">
            <p className="text-black-main sm:text-2xl text-xl font-semibold">
              {name}
            </p>
            <p className="sm:text-lg text-base text-black-off font-manrope font-medium">
              {category}
            </p>
          </div>
        </div>
        <div className="h-full flex items-center justify-center gap-6">
          <button
            onClick={toggleShowDetail}
            className="h-[46px] w-[100px] flex items-center justify-center border-2 border-white-secondary rounded-[36px] shadow-md text-success text-lg font-medium cursor-pointer"
          >
            Upto {cashback}%
          </button>
          <button className="h-[52px] w-[130px] flex items-center justify-center rounded-xl text-black-main text-lg font-semibold bg-brand-main">
            Activate
          </button>
        </div>
      </div>
      {showDetail && (
        <div className="w-full flex items-center justify-start gap-3 sm:p-4 p-3 bg-brand-main/20">
          <FaCircleCheck className="text-xl text-brand-main flex-shrink-0" />
          <p className="sm:text-lg text-base text-black-main font-semibold">
            {" "}
            <span className="sm:text-xl text-lg text-brand-main">0.5%</span> -
            Online Sale Commission Rate
          </p>
        </div>
      )}
    </div>
  );
};

export default StoreCard;
