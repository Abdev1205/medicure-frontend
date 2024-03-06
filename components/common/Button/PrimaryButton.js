import React from 'react'

const PrimaryButton = ({ text, type = "button", width = "w-[100%]", height = "h-[5.4rem]", disabled = false, bg = "bg-[#FA2444]", color = "text-[#FFFFFF]" }) => {
  let userStyle;
  userStyle = `${width} ${height} ${bg} ${color} ${disabled ? " opacity-50 cursor-not-allowed  " : ""} flex justify-center items-center rounded-md `
  return (
    <button type={type} disabled={disabled} className={userStyle} >
      {text}
    </button>
  )
}

export default PrimaryButton
