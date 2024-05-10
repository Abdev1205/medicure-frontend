import Sidebar from "@/components/common/Sidebar/Sidebar";
import React from "react";
import Modellist from "@/components/common/modelList/Modellist";

const models = () => {
  return (
    <div className="flex w-full h-screen">
      <Sidebar />
      <div className=" flex justify-center items-center bg-[#fff4f5]  flex-grow">
        <Modellist />
      </div>
    </div>
  );
};

export default models;
