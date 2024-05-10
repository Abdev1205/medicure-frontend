import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { GoHomeFill } from "react-icons/go";
import { IoAnalytics } from "react-icons/io5";
import { MdOutlinePeople } from "react-icons/md";
import { GiArtificialHive } from "react-icons/gi";
import { FaDisease } from "react-icons/fa";
import Link from "next/link";

const Sections = () => {
  return (
    <div className="bg-[#ffc6ce] mx-6 rounded-l-lg">
      <SidebarIcon
        icon={<GoHomeFill className="text-[#FD0027] w-7 h-7 mr-2" />}
        text={"Dashboard"}
        href={"/dashboard"}
      />
      <SidebarIcon
        className="text-lg"
        icon={<IoAnalytics className="text-[#FD0027] w-6 h-6 mr-2" />}
        text={"Detect Ailment"}
        href={"/mvp"}
      />
      <SidebarIcon
        className="text-lg"
        icon={<MdOutlinePeople className="text-[#FD0027] w-7 h-7 mr-2" />}
        text={"Patient List"}
        href={"/patientlist"}
      />
      <SidebarIcon
        className="text-lg"
        icon={<GiArtificialHive className="text-[#FD0027] w-6 h-6 mr-2" />}
        text={"Models"}
        href={"/models"}
      />
      <SidebarIcon
        className="text-lg"
        icon={<FaDisease className="text-[#FD0027] w-6 h-6 mr-2" />}
        text={"Pandemics"}
        href={"/pandemic"}
      />
    </div>
  );
};

const SidebarIcon = ({ icon, text, href }) => {
  const router = useRouter();
  console.log(router.asPath);
  const isLinkActive = (href) => {
    if (router.pathname === href) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    isLinkActive(router.asPath);
  }, [router]);
  return (
    <Link href={href}>
      <div className="h-12 flex">
        <div
          className={`text-[#dc465c] h-12 flex items-center w-full py-[0.6rem] text-[2.3vh] hover:cursor-pointer ${
            isLinkActive(href) ? " bg-[#feabb7] text-red-600 rounded-l-xl" : ""
          }`}
        >
          <div className="text-[1.25rem] pl-4 pr-8">{icon}</div>
          <div className=" w-full pl-4">{text}</div>
        </div>
        {isLinkActive(href) && (
          <div className="h-full -mr-2  w-[0.4rem] bg-[#ff2c4c]" />
        )}
      </div>
    </Link>
  );
};

export default Sections;
