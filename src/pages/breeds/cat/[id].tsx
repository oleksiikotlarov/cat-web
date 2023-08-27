import React, { Suspense } from "react";
import Hero from "../../../components/Hero";
import Nav from "../../../components/Nav";
import Wrapper from "../../../components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface BreedWeight {
  imperial: string;
  metric: string;
}

interface Breed {
  weight: BreedWeight;
  id: string;
  name: string;
  temperament: string;
  origin: string;
  life_span: string;
}

interface CatData {
  id: string;
  url: string;
  breeds: Breed[];
  width: number;
  height: number;
}

const BreedDetails: React.FC<{ cat: CatData }> = ({ cat }) => {
  return (
    <main>
      <div className="">
        <Wrapper>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}>
            <Nav placeholder="" searchValue="" />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="bg-white rounded-xl mb-4 px-4 py-4">
            <div className="flex justify-start items-center mb-4">
              <Link
                href="/breeds"
                className="bg-[#FBE0DC] p-2 pr-2 py-2 rounded-lg mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <g clipPath="url(#clip0_1_632)">
                    <path
                      d="M4.70999 10.9901L13.3097 19.5896C13.8567 20.1369 14.7437 20.1369 15.2905 19.5896C15.8373 19.0427 15.8373 18.1558 15.2905 17.6091L7.68104 9.99988L15.2902 2.39096C15.8371 1.84391 15.8371 0.957107 15.2902 0.410284C14.7434 -0.136761 13.8565 -0.136761 13.3095 0.410284L4.70977 9.00985C4.43635 9.28339 4.2998 9.64153 4.2998 9.99983C4.2998 10.3583 4.43662 10.7167 4.70999 10.9901Z"
                      fill="#FF868E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_632">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <div className="text-[#FF868E] text-lg font-medium bg-[#FBE0DC] rounded-lg py-1 px-6 group-hover:bg-[#FBE0DC] duration-100">
                <button>BREEDS</button>
              </div>
              <div className="text-white font-medium text-lg  bg-[#FF868E] rounded-lg py-1 px-6 group-hover:bg-[#FBE0DC] duration-100 ml-2">
                <button>{cat.breeds[0].id}</button>
              </div>
            </div>
            <div className="flex flex-col items-center h-full">
              <div className="relative mb-4 aspect-auto object-contain">
                <Image
                  className=" rounded-xl bg-gray-200"
                  src={cat.url}
                  alt=""
                  width={2000}
                  height={2000}
                />
              </div>

              <div className="flex flex-col items-center justify-center border-[#FBE0DC] border-2 rounded-xl my-8">
                <div className=" flex justify-center items-center ">
                  <div className="absolute bg-white rounded-xl flex justify-evenly items-center py-4 px-12 text-3xl font-semibold shadow-sm">
                    {cat.breeds[0].name}
                  </div>
                </div>
                <h2 className="mt-12 text-xl font-semibold text-[#8C8C8C]">
                  Family companion cat
                </h2>
                <div className="grid grid-cols-2 justify-center gap-6 sm:mx-8 mx-6 my-8">
                  <div className="flex flex-col">
                    <h3 className="font-semibold mb-2">Temperament:</h3>
                    <div className="text-[#8C8C8C]">
                      {cat.breeds[0].temperament}
                    </div>
                  </div>
                  <div className="grid grid-rows-3 gap-3">
                    <div className="flex justify-start itmes-center">
                      <h3 className="mr-2 font-semibold">Origin: </h3>
                      <div className="text-[#8C8C8C]">
                        {cat.breeds[0].origin}
                      </div>
                    </div>
                    <div className="flex justify-start itmes-center">
                      <h3 className="mr-2 font-semibold">Weight: </h3>
                      <div className="text-[#8C8C8C]">
                        {cat.breeds[0].weight.metric}
                      </div>
                    </div>
                    <div className="flex justify-start itmes-center">
                      <h3 className="mr-2 font-semibold">Life span: </h3>
                      <div className="text-[#8C8C8C]">
                        {cat.breeds[0].life_span}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Wrapper>
      </div>
    </main>
  );
};

export default BreedDetails;

export async function getStaticPaths() {
  const key = process.env.NEXT_PUBLIC_API_KEY;

  const res = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=100&breed_ids=abys,aege,abob,acur,asho,awir,amau,amis,bali,bamb,beng&api_key=${key}`
  );
  const posts = await res.json();

  const paths = posts.map((cat: any) => ({
    params: { id: cat.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { id } }: any) {
  const key = process.env.NEXT_PUBLIC_API_KEY;

  const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
  const cat = await res.json();

  return { props: { cat } };
}
