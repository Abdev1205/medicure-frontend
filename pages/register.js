import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import MedicureAI from "@/components/common/AssetComponents/MedicureAI";
import { ApiUrl } from "@/utils/ApiUrl";
import { toast } from "react-toastify";
import { DataLayer } from "@/context/DataProvider";
import { useRouter } from "next/router";
import axios from "axios";

const register = () => {
  const router = useRouter();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const data = {
    name: name,
    email: email,
    password: pass,
  };

  const handleUserReg = async (e) => {
    e.preventDefault();
    try {
      if (name && email && pass ) {
        const data = {
          name: name,
          email: email,
          password: pass,
        };
        const res = await axios.post(`${ApiUrl}/api/register`, data);

        console.log(res,"ABhay");

        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        router.push("/login");
      } else {
        setvalid(false);
        toast.error("fill all required details correctly", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };
  return (
    <div className=" w-full h-screen flex flex-row-reverse bg-[#FFF4F5]">
      <div className=" w-[60vh] bg-[#FFD9DF] rounded-l-3xl">
        <MedicureAI />

        <div className=" py-24">
          <div className=" w-[100%] h-full flex justify-center items-center   ">
            <div className=" flex flex-col w-[30rem]  rounded-md px-[2.5rem] ">
              <form
                onSubmit={(e) => handleUserReg(e)}
                className=" flex flex-col gap-[1rem]   "
              >                <div className=" flex flex-col gap-[.5rem] ">
                  <label htmlFor="email" className=" text-[#FA2444]">
                    Name <span className="text-red-600 ">&#42;</span>
                  </label>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    className=" bg-red-200 placeholder:text-red-300 px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] "
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="Enter your Name "
                  />
                </div>
                <div className=" flex flex-col gap-[.5rem] ">
                  <label htmlFor="email" className=" text-[#FA2444]">
                    Email <span className="text-red-600 ">&#42;</span>
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    className=" bg-red-200 placeholder:text-red-300 px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] "
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="Enter your Email "
                  />
                </div>
                <div className=" flex flex-col gap-[.5rem] ">
                  <label htmlFor="password" className=" text-red-600  ">
                    Password <span className="text-red-600 ">&#42;</span>
                  </label>
                  <input
                    onChange={(e) => setPass(e.target.value)}
                    className=" bg-red-200 placeholder:text-red-300 text-[#AEB9E180] px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#6c71ff5c] "
                    type="password"
                    id="password"
                    name="password"
                    value={pass}
                    placeholder="Enter your password "
                  />
                </div>
                <button
                  className={` bg-[#FA2444] active:scale-95 duration-300   ${
                    email && pass ? "opacity-100" : "opacity-50"
                  } text-white px-[.5rem] py-[.5rem] rounded-md mt-[1rem] `}
                >
                  Register
                </button>

                <div className=" flex justify-center items-center gap-[.3rem] mt-[4rem] ">
                  <div className=" w-[40%] h-[1px]  bg-[#FA2444] " />
                  <span className=" text-[#FA2444] ">Or</span>
                  <div className=" w-[40%] h-[1px] bg-[#FA2444] " />
                </div>
              </form>

              <div className=" flex justify-center gap-[.4rem] mt-[.6rem] ">
                <p className="text-[#FA2444]">have an account?</p>
                <Link
                  className=" text-[#ff6262] underline underline-offset-1 "
                  href="/login"
                >
                  login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
