import React from "react";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { addFavoriteImage, voteImage } from "@/utils/util";
import { useRouter } from "next/router";

interface CatImageData {
  id: string;
  url: string;
  width: number;
  height: number;
}

const voting: React.FC<{ data: CatImageData[] }> = ({ data }) => {
  const router = useRouter()
  return (
    <main>
      <div className="">
        <Wrapper>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -50 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}>
            <Nav />
          </motion.div>
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            className="bg-white rounded-xl mb-4 px-4 py-4">
            <div className="flex justify-start items-center mb-4">
              <Link
                href="/"
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
              <div className="text-white font-medium text-lg  bg-[#FF868E] rounded-lg py-1 px-6 group-hover:bg-[#FBE0DC] duration-100 active:bg-[#FF868E] active:text-white">
                <button>VOTING</button>
              </div>
            </div>
            <div className="relative mb-12">
              <Image
                className="rounded-xl aspect-[16/9] object-cover"
                src={data[0].url}
                alt=""
                width={2000}
                height={2000}
              />
              <div className=" flex justify-center items-center ">
                <div className="absolute bg-white rounded-xl flex justify-evenly items-center">
                  <button className="bg-[#97EAB9] group hover:bg-opacity-30 duration-300 p-4 m-1 rounded-l-lg" onClick={() => {
                      voteImage(data[0].id, "swordcreeper88", "1");
                      router.push('/voting')
                    }}>
                    <svg
                      className="fill-white group-hover:fill-[#97EAB9]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 30 30"
                      fill="none">
                      <g clipPath="url(#clip0_1_1614)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM9.2 16.6L9.8 17.4C12.4 20.8667 17.6 20.8667 20.2 17.4L20.8 16.6L22.4 17.8L21.8 18.6C18.4 23.1333 11.6 23.1333 8.2 18.6L7.6 17.8L9.2 16.6Z"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1614">
                          <rect width="30" height="30" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button
                    className="bg-[#FF868E] p-4 group hover:bg-opacity-30 duration-300 "
                    onClick={() => {
                      addFavoriteImage(data[0].id, "swordcreeper88");
                      router.push('/voting')
                    }}>
                    <svg
                      className="fill-white group-hover:fill-[#FF868E]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 30 30">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.07107 4C4.71811 4 2 6.71811 2 10.0711C2 11.6812 2.63963 13.2254 3.77817 14.364L15 25.5858L26.2218 14.364C27.3604 13.2254 28 11.6812 28 10.0711C28 6.71811 25.2819 4 21.9289 4C20.3188 4 18.7746 4.63963 17.636 5.77817L15.7071 7.70711C15.3166 8.09763 14.6834 8.09763 14.2929 7.70711L12.364 5.77818C11.2254 4.63963 9.68121 4 8.07107 4ZM0 10.0711C0 5.61354 3.61354 2 8.07107 2C10.2116 2 12.2646 2.85034 13.7782 4.36396L15 5.58579L16.2218 4.36396C17.7354 2.85034 19.7884 2 21.9289 2C26.3865 2 30 5.61354 30 10.0711C30 12.2116 29.1497 14.2646 27.636 15.7782L15.7071 27.7071C15.3166 28.0976 14.6834 28.0976 14.2929 27.7071L2.36396 15.7782C0.850339 14.2646 0 12.2116 0 10.0711Z"
                      />
                    </svg>
                  </button>
                  <button className="bg-[#FFD280] p-4 m-1 rounded-r-lg group hover:bg-opacity-30 duration-300 " onClick={() => {
                      voteImage(data[0].id, "swordcreeper88", "-1");
                      router.push('/voting')
                    }}>
                    <svg
                      className="fill-white group-hover:fill-[#FFD280]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 30 30">
                      <g clipPath="url(#clip0_1_1620)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15ZM15 2C7.8203 2 2 7.8203 2 15C2 22.1797 7.8203 28 15 28C22.1797 28 28 22.1797 28 15C28 7.8203 22.1797 2 15 2ZM10 12H8V10H10V12ZM22 12H20V10H22V12ZM7.6 20.2L8.2 19.4C11.6 14.8667 18.4 14.8667 21.8 19.4L22.4 20.2L20.8 21.4L20.2 20.6C17.6 17.1333 12.4 17.1333 9.8 20.6L9.2 21.4L7.6 20.2Z"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_1620">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex justify-between items-center bg-[#F8F8F7] rounded-xl py-5 px-6 text-md">
                <div className="flex items-center">
                  <div className="bg-white rounded-md py-2 px-4 mr-4">
                    22:22
                  </div>
                  <p>Image ID: fQSunHvl8 was added to Favourites</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  viewBox="0 0 20 18"
                  fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M5.38071 1.33333C3.14541 1.33333 1.33333 3.14541 1.33333 5.38071C1.33333 6.45414 1.75975 7.48361 2.51878 8.24264L10 15.7239L17.4812 8.24264C18.2402 7.48361 18.6667 6.45414 18.6667 5.38071C18.6667 3.14541 16.8546 1.33333 14.6193 1.33333C13.5459 1.33333 12.5164 1.75975 11.7574 2.51878L10.4714 3.80474C10.2111 4.06509 9.78895 4.06509 9.5286 3.80474L8.24264 2.51878C7.48361 1.75975 6.45414 1.33333 5.38071 1.33333ZM0 5.38071C0 2.40903 2.40903 0 5.38071 0C6.80777 0 8.17637 0.566895 9.18545 1.57597L10 2.39052L10.8146 1.57597C11.8236 0.566894 13.1922 0 14.6193 0C17.591 0 20 2.40903 20 5.38071C20 6.80777 19.4331 8.17637 18.424 9.18545L10.4714 17.1381C10.2111 17.3984 9.78895 17.3984 9.5286 17.1381L1.57597 9.18545C0.566893 8.17637 0 6.80777 0 5.38071Z"
                    fill="#FF868E"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center bg-[#F8F8F7] rounded-xl py-5 px-6 text-md">
                <div className="flex items-center">
                  <div className="bg-white rounded-md py-2 px-4 mr-4">
                    22:22
                  </div>
                  <p>Image ID: fQSunHvl8 was added to Favourites</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM6.66667 8H5.33333V6.66667H6.66667V8ZM14.6667 8H13.3333V6.66667H14.6667V8ZM6.13333 11.0667L6.53333 11.6C8.26667 13.9111 11.7333 13.9111 13.4667 11.6L13.8667 11.0667L14.9333 11.8667L14.5333 12.4C12.2667 15.4222 7.73333 15.4222 5.46667 12.4L5.06667 11.8667L6.13333 11.0667Z"
                    fill="#97EAB9"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center bg-[#F8F8F7] rounded-xl py-5 px-6 text-md">
                <div className="flex items-center">
                  <div className="bg-white rounded-md py-2 px-4 mr-4">
                    22:22
                  </div>
                  <p>Image ID: fQSunHvl8 was added to Favourites</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 1.33333C5.21353 1.33333 1.33333 5.21353 1.33333 10C1.33333 14.7865 5.21353 18.6667 10 18.6667C14.7865 18.6667 18.6667 14.7865 18.6667 10C18.6667 5.21353 14.7865 1.33333 10 1.33333ZM6.66667 8H5.33333V6.66667H6.66667V8ZM14.6667 8H13.3333V6.66667H14.6667V8ZM5.06667 13.4667L5.46667 12.9333C7.73333 9.91111 12.2667 9.91111 14.5333 12.9333L14.9333 13.4667L13.8667 14.2667L13.4667 13.7333C11.7333 11.4222 8.26667 11.4222 6.53333 13.7333L6.13333 14.2667L5.06667 13.4667Z"
                    fill="#FFD280"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center bg-[#F8F8F7] rounded-xl py-5 px-6 text-md">
                <div className="flex items-center">
                  <div className="bg-white rounded-md py-2 px-4 mr-4">
                    22:22
                  </div>
                  <p>Image ID: fQSunHvl8 was added to Favourites</p>
                </div>
              </div>
            </div>
          </motion.div>
        </Wrapper>
      </div>
    </main>
  );
};

export default voting;

export async function getServerSideProps() {
  try {
    const res = await fetch(`https://api.thecatapi.com/v1/images/search`);
    const data = await res.json();
    return { props: { data } };
  } catch (error) {
    console.log(error);
  }
}
