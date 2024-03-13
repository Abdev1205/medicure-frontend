import React, { useContext, useEffect, useState } from "react";
import Navbar from "@/components/common/Navbar/Navbar";
import { DataLayer } from "@/context/DataProvider";
import { useRouter } from "next/router";
import axios from "axios";
import { ApiUrl } from "@/utils/ApiUrl";
import Image from "next/image";

const Rep = () => {
  const { image, param } = useContext(DataLayer);
  const [report, setReport] = useState({});
  const [parameter, SetParameter] = useState([]);
  const router = useRouter();
  console.log(router.query.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (router.query.id) {
          const res = await axios.get(`${ApiUrl}/api/reports?id=${router.query.id}`);
          console.log(res?.data)
          setReport(res?.data?.report);
          const paramerterData = Object.entries(res?.data?.report.parameters).map(([key, value]) => ({ key, value }));
          SetParameter(paramerterData)
        }
      } catch (error) {
        console.error('Error fetching report:', error);
      }
    };

    fetchData();
  }, [router.query.id]);

  return (
    <div className=" w-[100%] mb-[3rem]  ">
      <Navbar />
      <div className=" my-6 mx-96 border-[#424242fd] rounded-xl border-2 border-dashed bg-[#ffebef26] ">
        <div className="py-6 mx-12 text-2xl text-center border-b-black border-y-2">
          {`Patient Report ${router.query.id} `}
        </div>
        <div className="p-4 px-12 mx-auto border-gray-300 rounded-md text-1xl">
          <div className="flex justify-between w-[100%] mb-2">
            <div className="w-1/2 ">
              <strong>Name:</strong> John Doe
            </div>
            <div className="w-1/2 ">
              <strong>Age:</strong> 35
            </div>
          </div>

          <div className="flex justify-between mb-2">
            <div className="w-1/2">
              <strong>Gender:</strong> Male
            </div>
            <div className="w-1/2 ">
              <strong>Blood Group:</strong> A+
            </div>
          </div>

          <div className="flex justify-between mb-2">
            <div className="w-1/2">
              <strong>Weight:</strong> 70 kg
            </div>
            <div className="float-right w-1/2 ">
              <strong>Height:</strong> 175 cm
            </div>
          </div>

          <div className="my-12 ">
            <div className="w-1/2">
              <strong>Our Analysis:</strong>
            </div>

            <div>{report?.analysis}</div>
          </div>

          <div className="my-12 ">

            <strong>Parameters:</strong>
            <table className="table-auto w-[100%] border-collapse border border-slate-500 rounded-md  border-spacing-2 mt-[1rem] " >
              <tbody>
                {parameter && parameter.map((data, index) => {
                  return (
                    <tr key={index} className="list-none border rounded-md border-slate-700 "  >
                      <td className="border border-slate-700 rounded-md px-[1rem] py-[.2rem] " >
                        {data.key}
                      </td>
                      <td className="border border-slate-700 px-[1rem] py-[.2rem] rounded-md " >{data.value}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>


          </div>

          <div className="">
            <div className="w-1/2">
              <strong>Image:</strong>
              {
                router.query.id ? (
                  <Image
                    src={report.img}
                    width={300}
                    height={300}
                    alt="Image uploaded image"
                    className=" w-[15rem] mt-[1rem] "
                  />
                ) : null
              }

            </div>
          </div>

          <div className="flex flex-col justify-center mt-[2rem] ">
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