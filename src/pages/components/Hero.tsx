import React from "react";
import Image from "next/image";
import HeroButton from "./utils/HeroButton";
import Link from "next/link";
import { useRouter } from "next/router";

const Hero = () => {
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
          <div className="flex justify-start items-center pt-4">
            <Link href="/" className="flex items-center text-lg w-full mr-auto">
              <Image src="/logo.svg" alt="logo" width={22} height={22} />
              <h1 className="ml-2 font-semibold">PetsPaw</h1>
            </Link>
          </div>
          <div className="mb-12 pt-28">
            <h1 className="text-4xl font-semibold">Hi!👋</h1>
            <h2 className="text-[#8C8C8C]">Welcome to MacPaw Bootcamp 2023</h2>
          </div>
          <div className="">
            <div className="font-semibold">Lets start using The Cat API</div>
            <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-6 gap-2 justify-center my-8">
              {navButtonData.map((buttonData, index) => (
                <HeroButton key={index} data={buttonData} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
