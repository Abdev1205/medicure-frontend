import React, { useContext } from "react";
import Navbar from "@/components/common/Navbar/Navbar";
import { DataLayer } from "@/context/DataProvider";
import { useRouter } from "next/router";

const Rep = () => {
  const {report, image} = useContext(DataLayer);
  const router=useRouter();
  console.log(router.query.id);

  return (
    <div className=" w-[100%] h-[100vh]  ">
      <Navbar />
      <div className=" my-6 mx-96 border-[#424242fd] rounded-xl border-2 border-dashed bg-[#ffebef26] h-full">
        <div className="text-2xl text-center py-6 mx-12 border-b-black border-y-2">
          {`Patient Report ${router.query.id} `}
        </div>
        <div className=" border-gray-300 p-4 px-12 rounded-md mx-auto text-1xl">
          <div className="flex mb-2">
            <div className="w-1/2 pl-16">
              <strong>Name:</strong> John Doe
            </div>
            <div className="w-1/2 pl-16">
              <strong>Age:</strong> 35
            </div>
          </div>

          <div className="flex mb-2 pl-16">
            <div className="w-1/2">
              <strong>Gender:</strong> Male
            </div>
            <div className="w-1/2 pl-8">
              <strong>Blood Group:</strong> A+
            </div>
          </div>

          <div className="flex mb-2 pl-16">
            <div className="w-1/2">
              <strong>Weight:</strong> 70 kg
            </div>
            <div className="w-1/2 pl-8">
              <strong>Height:</strong> 175 cm
            </div>
          </div>

          <div className=" my-12">
            <div className="w-1/2">
              <strong>Our Analysis:</strong>
            </div>

            <div>{report}</div>
          </div>

          <div className=" my-12">
            <div className="w-1/2">
              <strong>Parameters:</strong>
            </div>

            <div>Values</div>
          </div>

          <div className=" my-12">
            <div className="w-1/2">
              <strong>Image:</strong>
            </div>

            <div>Your input Image</div>
          </div>

          <div className="flex flex-col h-52 justify-center">
            <div className="flex-grow"></div>
            <hr className="border-t-1 border-gray-300 my-4" />
            <div className="text-center text-gray-600">
              <em>Thank you for choosing our healthcare services.</em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rep;
