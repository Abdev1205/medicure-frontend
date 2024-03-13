import { useEffect } from "react";
import React from 'react'

const Loader = ({ visible, onClose = () => { }, callback = () => { }, data }) => {
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [visible]);
  if (!visible) return null;


  return (
    <div
      id="background"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"

    >
      <div className=" flex flex-col items-center w-[30rem] h-[30rem]    register-fir-bg  rounded-[2rem]   ">
        <div className="container scale-[.3] ">
          <div className="dot dot-1"></div>
          <div className="dot dot-2"></div>
          <div className="dot dot-3"></div>
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  result="blur"
                  stdDeviation="10"
                  in="SourceGraphic"
                />
                <feColorMatrix
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"
                  mode="matrix"
                  in="blur"
                />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Loader
