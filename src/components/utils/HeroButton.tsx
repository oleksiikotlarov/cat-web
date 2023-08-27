import React from "react";
import Image from "next/image";
import Link from "next/link";

interface HeroButtonProps {
  data: {
    label: string;
    imageSrc: string;
    link: string;
    bg: string;
    active: boolean;
  };
}

const HeroButton: React.FC<HeroButtonProps> = ({ data }) => {
  return (
    <Link
      className={`${
        data.active
          ? ""
          : ""
      }`}
      href={data.link}>
      <div className="group flex-col ">
        <div className={`${data.bg} border-4 p-3 rounded-3xl sm:flex hidden sm:w-auto w-full ${
            data.active
              ? "border-[#FBE0DC] border-opacity-100"
              : "border-opacity-60 border-white group-hover:border-white duration-300 group-hover:scale-105"
          }`}>
        <Image
          className="w-40 h-48 object-contain "
          src={data.imageSrc}
          alt={data.imageSrc}
          width={500}
          height={500}
        />
        </div>
        <div
          className={`flex justify-center  font-medium  rounded-lg mt-4 py-2 ${
            data.active
              ? "text-white bg-[#FF868E]"
              : "text-[#FF868E] bg-white group-hover:bg-[#FBE0DC] duration-100 "
          }`}>
          <button>{data.label}</button>
        </div>
      </div>
    </Link>
  );
};

export default HeroButton;
