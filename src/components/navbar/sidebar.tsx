"use client";

import Image from "next/image";
import { FaHouse } from "react-icons/fa6";
import { CiCreditCard1 } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SideBar: React.FC = () => {
  const router = useRouter();
  const [color, setColor] = useState<Boolean>(false);

  const logout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="left-0 absolute pl-6 border-r-2 h-full">
      <div className="flex flex-col gap-8 mt-12 ">
        <Image
          className="pr-4"
          src="/risingdigital.png"
          width={70}
          height={70}
          alt="rising digital"
        />
        <FaHouse className="w-10 h-10 text-gray-500 cursor-pointer" />

        <CiCreditCard1 className="w-10 h-10 text-gray-500 cursor-pointer" />
        <CiUser className="w-10 h-10 text-gray-500 cursor-pointer" />
        <IoIosLogOut
          onMouseEnter={() => setColor(true)}
          onMouseLeave={() => setColor(false)}
          onClick={logout}
          className={
            color
              ? "text-blue-500 w-11 h-11 cursor-pointer"
              : "w-11 h-11 text-gray-500 cursor-pointer"
          }
        />
      </div>
    </div>
  );
};

export default SideBar;
