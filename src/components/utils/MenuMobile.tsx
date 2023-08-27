import React from "react";
import Image from "next/image";
import HeroButton from "./HeroButton";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuMobile = () => {
  const router = useRouter();

  const navButtonData = [
    {
      label: "VOTING",
      imageSrc: "/vote-table.png",
      link: "/voting",
      bg: "bg-[#B4B7FF]",
      active: router.pathname === "/voting",
    },
    {
      label: "BREEDS",
      imageSrc: "/pet-breeds.png",
      link: "/breeds",
      bg: "bg-[#97EAB9]",
      active: router.pathname === "/breeds",
    },
    {
      label: "GALLERY",
      imageSrc: "/image-search.png",
      link: "/gallery",
      bg: "bg-[#FFD280]",
      active: router.pathname === "/gallery",
    },
  ];

  return (
    <header className="lg:w-full sticky top-0 w-screen h-screen sm:px-5 px-5">
      <div className="flex items-top justify-center ">
        <div className="flex-col h-full sm:w-auto w-full">
          <div className="flex justify-between items-center pt-4">
            <Link href="/" className="flex items-center text-lg w-full mr-auto">
              <Image src="/logo.svg" alt="logo" width={22} height={22} />
              <h1 className="ml-2 font-semibold">PetsPaw</h1>
            </Link>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none">
                <rect width="60" height="60" rx="20" fill="white" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M28.5859 29.9996L17.293 18.7067L18.7072 17.2925L30.0001 28.5854L41.293 17.2925L42.7072 18.7067L31.4143 29.9996L42.7072 41.2925L41.293 42.7067L30.0001 31.4138L18.7072 42.7067L17.293 41.2925L28.5859 29.9996Z"
                  fill="#FF868E"
                />
              </svg>
            </div>
          </div>
          
            <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-2 justify-center items-center my-8">
              {navButtonData.map((buttonData, index) => (
                <HeroButton key={index} data={buttonData} />
              ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default MenuMobile;
