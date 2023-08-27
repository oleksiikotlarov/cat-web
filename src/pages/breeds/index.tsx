import React, { useState, useEffect, ChangeEvent } from "react";
import Nav from "./../components/Nav";
import Wrapper from "./../components/Wrapper";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Dropdown from "../components/utils/DropDown";
import { useRouter } from "next/router";
import ImageGrid from "../components/utils/ImageGrid";
import { breedsData, limits } from "../utils/data";

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

const breeds: React.FC<{ data: CatImageData[] }> = ({ data }) => {
  const router = useRouter();

  const [selectedBreed, setSelectedBreed] = useState({
    name: "All breeds",
    value: "abys,aege,abob,acur,asho,awir,amau,amis,bali,bamb,beng",
  });
  const [selectedLimit, setSelectedLimit] = useState({
    name: "Limit 15",
    value: "15",
  });

  const [searchValue, setSearchValue] = useState("");
  const [filteredBreeds, setFilteredBreeds] = useState(data);

  const [toggleOrder, setToggleOrder] = useState(false);

  const handelOrder = (order: string) => {
    setToggleOrder(true);

    if (order === "asc") {
      const sortedData = [...displayData].sort((a, b) =>
        a.breeds[0]?.name.localeCompare(b.breeds[0]?.name)
      );
      setFilteredBreeds(sortedData);
    } else {
      const sortedData = [...displayData].sort((a, b) =>
        b.breeds[0]?.name.localeCompare(a.breeds[0]?.name)
      );
      setFilteredBreeds(sortedData);
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);

    const filtered = data.filter((catData) =>
      catData.breeds.some((breed) =>
        breed.name.toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredBreeds(filtered);
  };

  const [loading, setLoading] = useState(false);

  const handleLimit = (limit: string) => {
    const path = router.pathname;
    const query = router.query;
    query.limit = limit;
    router.push({
      pathname: path,
      query: query,
    });
  };

  const handleBreed = (breed: string) => {
    const path = router.pathname;
    const query = router.query;
    query.breed = breed;
    router.push({
      pathname: path,
      query: query,
    });
  };

  useEffect(() => {
    if (loading) {
      console.log("limit");
      setToggleOrder(false);
      setFilteredBreeds(data);
      handleLimit(selectedLimit.value);
      setLoading(false);
    }
  }, [selectedLimit]);

  useEffect(() => {
    if (loading) {
      console.log("breed");
      setToggleOrder(false);
      setFilteredBreeds(data);
      handleBreed(selectedBreed.value);
      setLoading(false);
    }
  }, [selectedBreed]);

  let displayData: CatImageData[];
  if (toggleOrder) {
    displayData = filteredBreeds;
  } else if (searchValue !== "") {
    displayData = filteredBreeds;
  } else {
    displayData = data;
  }

  return (
    <main>
      <div className="">
        <Wrapper>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}>
            <Nav
              placeholder={"Search for breeds by name"}
              searchValue={searchValue}
              handleSearchChange={handleSearchChange}
            />
          </motion.div>

          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="bg-white rounded-xl mb-4 px-4 py-4">
            <div className="grid sm:flex sm:justify-stretch grid-rows-3 gap-4 sm:gap-0 items-center mb-4 w-full">
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
                  <button>BREEDS</button>
                </div>
              </div>
              <div className="w-full">
                <Dropdown
                  dropdownOptions={breedsData}
                  selectedOption={selectedBreed}
                  setSelectedOption={setSelectedBreed}
                  optionalClass={""}
                  setLoading={setLoading}
                />
              </div>
              <div className="flex w-full justify-stretch ">
                <div className="w-full">
                <Dropdown
                  dropdownOptions={limits}
                  selectedOption={selectedLimit}
                  setSelectedOption={setSelectedLimit}
                  optionalClass={""}
                  setLoading={setLoading}
                /></div>
                <div className="flex justify-center">
                  <button
                    className="bg-[#F8F8F7] text-[#8C8C8C] px-3 rounded-lg mx-1"
                    onClick={() => {
                      handelOrder("asc");
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M4 0.195262C4.26035 -0.0650874 4.68246 -0.0650874 4.94281 0.195262L8.94281 4.19526L8 5.13807L5.13807 2.27614V20H3.80474V2.27614L0.942809 5.13807L0 4.19526L4 0.195262ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 9.93411e-09 15.1381 9.93411e-09C13.2971 9.93411e-09 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z"
                        fill="#8C8C8C"
                      />
                    </svg>
                  </button>
                  <button
                    className="bg-[#F8F8F7] text-[#8C8C8C] px-3 rounded-lg mx-1"
                    onClick={() => {
                      handelOrder("desc");
                    }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="20"
                      viewBox="0 0 19 20"
                      fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.80474 17.7239V0H5.13807V17.7239L8 14.8619L8.94281 15.8047L4.94281 19.8047C4.81778 19.9298 4.64822 20 4.4714 20C4.29459 20 4.12502 19.9298 4 19.8047L0 15.8047L0.942809 14.8619L3.80474 17.7239ZM15.1381 1.33333C14.0335 1.33333 13.1381 2.22876 13.1381 3.33333V5.33333H17.1381V3.33333C17.1381 2.22876 16.2426 1.33333 15.1381 1.33333ZM17.1381 6.66667V9.33333H18.4714V3.33333C18.4714 1.49238 16.979 0 15.1381 0C13.2971 0 11.8047 1.49238 11.8047 3.33333V9.33333H13.1381V6.66667H17.1381ZM11.8047 10.6667H15.8047C17.2775 10.6667 18.4714 11.8606 18.4714 13.3333C18.4714 14.1298 18.1222 14.8447 17.5686 15.3333C18.1222 15.822 18.4714 16.5369 18.4714 17.3333C18.4714 18.8061 17.2775 20 15.8047 20H11.8047V10.6667ZM15.8047 14.6667C16.5411 14.6667 17.1381 14.0697 17.1381 13.3333C17.1381 12.597 16.5411 12 15.8047 12H13.1381V14.6667H15.8047ZM13.1381 16H15.8047C16.5411 16 17.1381 16.597 17.1381 17.3333C17.1381 18.0697 16.5411 18.6667 15.8047 18.6667H13.1381V16Z"
                        fill="#8C8C8C"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {!loading ? (
              <ImageGrid data={displayData} />
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

export default breeds;

export async function getServerSideProps({ query }: any) {
  const key = process.env.NEXT_PUBLIC_API_KEY;

  const limit = query.limit || "15";
  const breed =
    query.breed || "abys,aege,abob,acur,asho,awir,amau,amis,bali,bamb,beng";

  try {
    const res = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${limit}&breed_ids=${breed}&api_key=${key}`
    );
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }
}
