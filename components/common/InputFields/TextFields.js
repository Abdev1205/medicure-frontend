import React from 'react'

const TextFields = ({ value, setValue, label, placeholder, required, disabled = false }) => {
  return (
    <div className=" flex flex-col gap-[.5rem] w-[100%] text-[#AEB9E180] ">
      <label htmlFor={label}>
        {label}{" "}
        <span className={` ${required ? "text-red-600" : "hidden"} `}>*</span>
      </label>
      <input
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
        value={value}
        type="text"
        className=" bg-[#F7798D26] text-[#00000080 px-[1rem] py-[.5rem] rounded-md outline-none focus:outline-[#FA2444]"
        placeholder={placeholder}
      />
    </div>
  );
};
export default TextFields
