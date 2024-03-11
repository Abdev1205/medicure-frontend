import React, { useContext, useEffect } from "react";
import Navbar from "@/components/common/Navbar/Navbar";
import { DataLayer } from "@/context/DataProvider";
import { useRouter } from "next/router";
import axios from "axios";

const Rep = () => {
  const { report, setReport, image } = useContext(DataLayer);
  const router = useRouter();
  console.log(router.query.id);

  useEffect(() => {
    try {
      const getReport = async () => {
        const res = await axios.post(`http://localhost:4000/reports?id=${router.query.id}`);
        setReport(res.data.report);
      }
      getReport();
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className=" w-[100%] h-[100vh]  ">
      <Navbar />
      <div className=" my-6 mx-96 border-[#424242fd] rounded-xl border-2 border-dashed bg-[#ffebef26] h-full">
        <div className="py-6 mx-12 text-2xl text-center border-b-black border-y-2">
          {`Patient Report ${router.query.id} `}
        </div>
        <div className="p-4 px-12 mx-auto border-gray-300 rounded-md text-1xl">
          <div className="flex mb-2">
            <div className="w-1/2 pl-16">
              <strong>Name:</strong> John Doe
            </div>
            <div className="w-1/2 pl-16">
              <strong>Age:</strong> 35
            </div>
          </div>

          <div className="flex pl-16 mb-2">
            <div className="w-1/2">
              <strong>Gender:</strong> Male
            </div>
            <div className="w-1/2 pl-8">
              <strong>Blood Group:</strong> A+
            </div>
          </div>

          <div className="flex pl-16 mb-2">
            <div className="w-1/2">
              <strong>Weight:</strong> 70 kg
            </div>
            <div className="w-1/2 pl-8">
              <strong>Height:</strong> 175 cm
            </div>
          </div>

          <div className="my-12 ">
            <div className="w-1/2">
              <strong>Our Analysis:</strong>
            </div>

            <div>{report}</div>
          </div>

          <div className="my-12 ">
            <div className="w-1/2">
              <strong>Parameters:</strong>
            </div>

            <div>Values</div>
          </div>

          <div className="my-12 ">
            <div className="w-1/2">
              <strong>Image:</strong>
            </div>

            <div>Your input Image</div>
          </div>

          <div className="flex flex-col justify-center h-52">
            <div className="flex-grow"></div>
            <hr className="my-4 border-gray-300 border-t-1" />
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