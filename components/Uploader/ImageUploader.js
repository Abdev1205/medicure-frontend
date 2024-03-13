import React, { useContext, useState } from 'react'
import Label from '../common/InputFields/Label';
import PrimaryButton from '../common/Button/PrimaryButton';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';
import { DataLayer } from '@/context/DataProvider';
import { ModelUrl, ApiUrl } from '@/utils/ApiUrl';
import Loader from '../loader/Loader';

const ImageUploader = () => {
  const { setImage, setParam } = useContext(DataLayer);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [buttonLoader, setButtonLoader] = useState(false);
  const [loading, setLoading] = useState(false)

  const router = useRouter();

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        let baseImage = e.target.result;
        let imageData = baseImage.substring("data:image/jpeg;base64,".length);
        console.log(imageData);
        setSelectedImage(baseImage);
        setUploadedImage(imageData);
        setImage(selectedImage);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setButtonLoader(true)
    try {
      if (selectedImage === null) {
        return;
      }
      console.log(selectedImage)
      const res = await axios.post(`${ModelUrl}/`, { "image": uploadedImage });
      setParam(res.data);

      const modelData = res.data;
      const imageData = {
        image: selectedImage
      }
      Object.assign(modelData, imageData);
      console.log("res data after object merge ", modelData)
      const analysis = await axios.post(`${ApiUrl}/api/generate`, modelData);
      console.log("Analysis");
      // console.log("data : ", analysis.data.report)
      router.push(`/report/${analysis.data.report._id}`);
      setLoading(false)
    } catch (error) {
      console.log(error);
      setButtonLoader(false)
    }
  }

  return (
    <>
      <div className=' w-[100%] h-[calc(100vh-3.5rem)] flex flex-col items-center justify-center  ' >
        <Loader
          visible={loading}
          onClose={() => setLoading(false)}
        />
        <form className=' w-[40rem] h-[24rem] flex flex-col gap-[1rem] px-[2.5rem] py-[1.5rem] border-[1px]  rounded-md ' onSubmit={(e) => handleSubmit(e)}  >
          <Label label={"Upload your image"} required={true} />
          <label
            htmlFor="dropzone-file"
            className={`flex flex-col items-center justify-center w-full h-[13rem] border-2 border-dashed border-[#ff3e5efd]  t rounded-md bg-[#F7798D26] `}
          >
            <div className="flex flex-col items-center justify-center w-full h-full pt-5 pb-6 hover:cursor-pointer">
              {selectedImage ? (
                <Image
                  src={selectedImage}
                  alt="Selected"
                  width={300}
                  height={300}
                  className="object-contain w-full h-full "
                />
              ) : (
                <div className="flex flex-col items-center">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-bold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
              )}
            </div>
            <input
              id="dropzone-file"
              accept=".gif, .png, .jpg, .jpeg, .webp"
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
          <div className='flex items-center justify-center mt-[1rem] ' >
            <PrimaryButton type="submit" text={"Process Image"} width='w-[10rem]' height='h-[2.4rem]' disabled={!selectedImage} loading={buttonLoader} />
          </div>

        </form>
      </div>
    </>
  )
}

export default ImageUploader