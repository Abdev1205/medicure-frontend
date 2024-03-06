import React from 'react'

const Label = ({ label, required }) => {
  return (
    <div className='  w-[100%] text-[#00000080] text-[1.12rem] ' >
      <h2 className='flex gap-[.5rem] items-center' >{label}<span className={`   ${required ? "text-red-600" : "hidden"} `}>*</span></h2>
    </div>
  )
}

export default Label
