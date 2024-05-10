import React from "react";
import Navbar from "@/components/common/Navbar/Navbar";
import ImageUploader from "@/components/Uploader/ImageUploader";
import Sidebar from "@/components/common/Sidebar/Sidebar";

const Mvp = () => {
  return (
    <div className="flex w-full h-screen  ">
      <Sidebar />
      <div className=" flex justify-center items-center bg-[#fff4f5]  flex-grow">
        <ImageUploader />
      </div>
    </div>
  );
};

export default Mvp;
