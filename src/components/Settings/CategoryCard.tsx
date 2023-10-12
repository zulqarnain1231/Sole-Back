import { Switch } from "@mantine/core";
import React from "react";

type Props = {
  icon?: React.ReactNode;
  name: string;
};

const CategoryCard: React.FC<Props> = ({ icon, name }: Props) => {
  return (
    <div className="w-full flex items-center justify-between rounded-md border-2 border-black-greish sm:p-4 p-2">
      <div className="h-full flex items-center justify-start sm:gap-4 gap-2">
        {icon && icon}
        <p className="text-black-main sm:text-2xl text-lg font-semibold">
          {name}
        </p>
      </div>
      <Switch
        defaultChecked
        size="lg"
        color="#F2B705"
        classNames={{ track: "cursor-pointer" }}
      />
    </div>
  );
};

export default CategoryCard;
