import React from "react";
import { MedicureAI2 } from "../AssetComponents/MedicureAI";
import { SlLogout } from "react-icons/sl";
import Sections from "./Sections";

const Sidebar = () => {
  return (
    <div className=" bg-[#FFD9DF] border-[#F7798D] border-[1px] w-[43vh] h-full">
      <MedicureAI2 />

      <div className="px-4">
        <div className=" w-full rounded-full h-[0.2vh] bg-[#F7798D]/50" />
      </div>

      <div className="flex px-6 mt-6 mb-16">
        <div className=" bg-blue-500 rounded-full w-14 h-14">
          <img src="" />
        </div>
        <div className=" py-2">
          <div className=" px-4 font-nunito text-xl">Dr. Abhay Mishra</div>
          <div className=" px-4 font-nunito text-black/60 text-md">
            Neurosurgeon
          </div>
        </div>
      </div>

      <div className="h-1/2 ">
        <Sections />
      </div>

      <div className="px-4 flex items-center flex-col">
        <div className=" w-full rounded-full h-[0.2vh] bg-[#F7798D]/50" />
        <button className=" bg-[#fba8b5] text-[#fa2444] mt-8 rounded-full py-3 w-[15rem] text-xl flex justify-center items-center font-semibold"> <SlLogout className="w-5 h-5 mt-[0.1rem] mr-6" /> Logout</button>
      </div>
    </div>
  );
};

export default Sidebar;
