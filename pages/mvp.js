import React from 'react'
import Navbar from '@/components/common/Navbar/Navbar'
import ImageUploader from '@/components/Uploader/ImageUploader'

const Mvp = () => {
  return (
    <div className=' w-[100%] h-[100vh]  ' >
      <Navbar />
      <ImageUploader />
    </div>
  )
}

export default Mvp
