import React, { useState, useEffect, ChangeEvent } from "react";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import ImageGrid from "./components/utils/ImageGrid";

interface Image {
  url: string;
}

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

interface CatImageData {
  id: string;
  url: string;
  breeds: Breed[];
  width: number;
  height: number;
}

const dislikes: React.FC<{ data: CatImageData[] }> = ({ data }) => {
  const router = useRouter();

  const [searchValue, setSearchValue] = useState("");
  const [filteredBreeds, setFilteredBreeds] = useState(data);

  useEffect(() => {
    const filteredData = data.filter((item) => item.value === -1);

    setFilteredBreeds(filteredData);
  }, [data]);

  const [loading, setLoading] = useState(false);
  return (
    <main>
      <div className="">
        <Wrapper>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}>
            <Nav placeholder={"Search for breeds by name"} />
          </motion.div>

          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="bg-white rounded-xl mb-4 px-4 py-4 ">
            <div className="grid sm:flex sm:justify-stretch grid-rows-3 gap-4 sm:gap-0 items-center mb-4 w-full h-full">
              <div className="flex justify-start items-center mr-2">
                <Link
                  href="/"
                  className="bg-[#FBE0DC] p-2 pr-2 py-2 rounded-lg mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
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
                <div className="text-white text-lg font-medium bg-[#FF868E] rounded-lg py-1 px-6 group-hover:bg-[#FBE0DC] duration-100 active:bg-[#FF868E] active:text-white">
                  <button>DISLIKES</button>
                </div>
              </div>
            </div>
            {!loading ? (
              <ImageGrid data={filteredBreeds} />
            ) : (
              <div className="h-full flex justify-center items-center mt-40">
                <Image
                  src="/spinner.svg"
                  alt="spinner"
                  width={20}
                  height={20}
                />
              </div>
            )}
          </motion.div>
        </Wrapper>
      </div>
    </main>
  );
};

export default dislikes;

export async function getServerSideProps() {
  const key = process.env.NEXT_PUBLIC_API_KEY;

  try {
    const res = await fetch(
      `https://api.thecatapi.com/v1/votes?sub_id=swordcreeper88&api_key=${key}`
    );
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }
}
