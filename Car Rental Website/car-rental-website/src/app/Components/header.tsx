'use client';
import Image from "next/image";
import logo from "../images/Logo.png";
import profile from "../images/Profil.png";
import { IoHeart } from "react-icons/io5";
import { BiSolidBell } from "react-icons/bi";
import { RiSettings3Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import filter from "../images/filter.png";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

export default function Header() {
  // Function to toggle visibility of elements
  const open = () => {
    const toggleElements = document.querySelectorAll('.toggle');
    toggleElements.forEach((element) => {
      if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
        element.classList.add('flex');
      } else {
        element.classList.add('hidden');
        element.classList.remove('flex');
      }
    });
  };

  return (
    <div className="w-[100vw] lg:h-[124px] h-[150px] flex items-center justify-between lg:flex-row flex-col-reverse mb-[10px]">
      <div className="flex lg:items-center lg:justify-between h-[100%] lg:flex-row flex-col">
        <div className="lg:w-[148px] w-[108px] lg:h-[44px] h-[28px] lg:ml-[60px] ml-[8px] justify-start flex items-center lg:justify-center lg:mt-[0px] mt-[10px] lg:mb-[0px] mb-[10px]">
          <Link href={'/'}><Image src={logo} alt="logo" /></Link>
        </div>
        <div className="h-[44px] lg:w-[492px] w-[90vw] lg:ml-[64px] flex items-center border-[#C3D4E966] border-[1px] rounded-[70px]">
          <div className="w-[24px] h-[24px] text-[22px] ml-[10px]"><CiSearch /></div>
          <div className="lg:w-[149px] w-[65vw] h-[20px] text-[12px] lg:ml-[15px] ml-[10px]"><input type="text" placeholder="Search something here" className="outline-[0px]" /></div>
          <div className="w-[24px] h-[24px] lg:ml-[250px]"><Image src={filter} alt="" /></div>
        </div>
      </div>
      <div className="lg:w-[236px] w-[85vw] h-[100%] lg:justify-around justify-between flex
       items-center gap-[20px] lg:mr-[30px] lg:ml-[0px] ml-[100px] mr-[100px] lg:mt-[0px] mt-[20px]">
        <div className="hidden lg:flex gap-[20px] toggle">
          <div className="lg:w-[44px] w-[24px] lg:h-[44px] h-[24px] rounded-full border-[#C3D4E966] border-[1px] flex items-center justify-center">
            <IoHeart className="lg:text-[24px] text-[18px] text-[#596780]" />
          </div>
          <div className="lg:w-[44px] w-[24px] lg:h-[44px] h-[24px] rounded-full border-[#C3D4E966] border-[1px] flex items-center justify-center relative">
            <BiSolidBell className="lg:text-[24px] text-[18px] text-[#596780]" />
            <div className="lg:w-[10px] w-[5px] lg:h-[10px] h-[5px] bg-red-500 rounded-full absolute top-[2px] right-[2px]" />
          </div>
          <div className="lg:w-[44px] w-[24px] lg:h-[44px] h-[24px] rounded-full border-[#C3D4E966] border-[1px] flex items-center justify-center">
            <RiSettings3Fill className="lg:text-[24px] text-[18px] text-[#596780]" />
          </div>
        </div>
        <div className="lg:hidden block w-[24px] h-[24px] rounded-full
         border-[#C3D4E966] border-[1px] flex items-center justify-center">
          <HiMenu onClick={open} />
        </div>
        <div className="lg:w-[44px] w-[24px] lg:h-[44px] h-[24px] rounded-full">
          <Link href={'/Dashboard'}><Image src={profile} alt="" /></Link>
        </div>
      </div>
    </div>
  );
}
