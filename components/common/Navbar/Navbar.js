import Image from "next/image"
import { LogoImage } from "@/public/assetsManager"
import Link from "next/link"

const Navbar = () => {

  const navLinksDatav = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "About us",
      href: "/about"
    },
    {
      name: "Services",
      href: "/services"
    },
    {
      name: "Our Doctors",
      href: "/doctors"
    },
    {
      name: "Appointment",
      href: "/appointment"
    },

  ]

  return (
    <>
      {/* ----------------------- Navbar code start from here ---------------------- */}

      <nav className=" bg-white  shadow-md sticky top-0 w-[100%] h-[3.5rem] px-[3rem] flex justify-between items-center  " >

        {/* ------------------------------ navbar header ----------------------------- */}
        <div className=" flex gap-[.5rem] items-center w-[8rem]  " >
          <Image
            src={LogoImage}
            width={100}
            height={100}
            alt="Medicure Ai"
            className=" w-[2rem] "
          />
          <h2 className=" font-averia font-[500] text-[1.2rem]  " >MedicureAi</h2>
        </div>

        { /* ------------------------------ navbar links ------------------------------  */}
        <div className=" flex items-center h-[100%] gap-[1.6rem] " >
          <div className=" flex items-center gap-[1rem] " >
            {
              navLinksDatav.map((data, index) => {
                return (
                  <Link href={data.href} key={index} className=" font-nunito font-medium text-[1.05rem] hover:text-[#FA2444] duration-300  " >
                    {data.name}
                  </Link>
                )
              })
            }
          </div>

          {/* ------------------------------ Action button ----------------------------- */}
          <div className=" flex gap-[1rem] items-center " >
            <button className=" px-[1rem] py-[.2rem] rounded-[.25rem] bg-[#FA2444] text-white  " >Book Appointment</button>
            <div className=" h-[2rem] w-[.13rem] rounded-sm bg-[#FA2444] " />
            <button className=" px-[1rem] py-[.2rem] rounded-[.25rem] border-[1.5px] border-[#FA2444]  " >Login</button>
          </div>

        </div>



      </nav>
    </>
  )
}

export default Navbar
