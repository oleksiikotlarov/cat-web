import React, { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import MenuMobile from "./utils/MenuMobile";

interface NavProps {
  placeholder: string;
  searchValue: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Nav: React.FC<NavProps> = ({
  placeholder,
  searchValue,
  handleSearchChange,
}) => {
  const router = useRouter();

  const [mobileMenu, setMobileMenu] = useState(false);
  const isInputDisabled = router.pathname === "/likes" || router.pathname === "/favourites" || router.pathname === "/dislikes" || router.pathname === "/voting" 
  return (
    <nav className="flex sm:flex-row flex-col justify-between w-full sticky top-0 py-4 z-30">
      <div className="flex w-full justify-between sm:justify-center ">
        <button
          className="lg:hidden flex items-center justify-center bg-white px-2 py-1 rounded-xl mr-2"
          onClick={() => {
            setMobileMenu(!mobileMenu);
          }}>
          <svg
            className="p-1"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="18"
            viewBox="0 0 30 18"
            fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30 2H0V0H30V2ZM30 10H0V8H30V10ZM30 18H0V16H30V18Z"
              fill="#FF868E"
            />
          </svg>
        </button>
        <div className="hidden sm:flex justify-between w-full bg-white px-2 py-1 mr-2 rounded-xl">
          <input
            className="w-full mx-4"
            placeholder={placeholder}
            value={searchValue}
            onChange={handleSearchChange}
            disabled={isInputDisabled}
          />
          <div className="p-2 rounded-xl group bg-[#FBE0DC] hover:bg-[#FF868E] duration-300">
            <svg
              className="p-0.5 group-hover:fill-white fill-[#FF868E]"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none">
              <path
                d="M19.3608 18.2168L14.6007 13.2662C15.8246 11.8113 16.4952 9.98069 16.4952 8.07499C16.4952 3.62251 12.8727 0 8.42021 0C3.96773 0 0.345215 3.62251 0.345215 8.07499C0.345215 12.5275 3.96773 16.15 8.42021 16.15C10.0917 16.15 11.6846 15.6458 13.0465 14.6888L17.8427 19.677C18.0431 19.8852 18.3128 20 18.6017 20C18.8752 20 19.1347 19.8957 19.3316 19.7061C19.7501 19.3034 19.7635 18.6357 19.3608 18.2168ZM8.42021 2.10652C11.7113 2.10652 14.3887 4.78391 14.3887 8.07499C14.3887 11.3661 11.7113 14.0435 8.42021 14.0435C5.12912 14.0435 2.45173 11.3661 2.45173 8.07499C2.45173 4.78391 5.12912 2.10652 8.42021 2.10652Z"
                fill=""
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-row">
          <Link
            href="/likes"
            className={`${
              router.pathname === "/likes"
                ? "bg-[#FF868E]"
                : "bg-white hover:bg-[#FBE0DC] fill-[#FF868E]"
            } flex items-center justify-center  px-2 py-1 rounded-xl mr-2 group duration-300`}>
            <svg
              className={`${
                router.pathname === "/likes" ? "fill-white" : " fill-[#FF868E]"
              } p-1`}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="33"
              viewBox="0 0 30 33"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 16.4C0 7.37019 6.71573 0.0500488 15 0.0500488C23.2843 0.0500488 30 7.37019 30 16.4C30 25.4299 23.2843 32.75 15 32.75C6.71573 32.75 0 25.4299 0 16.4ZM15 2.23005C7.8203 2.23005 2 8.57417 2 16.4C2 24.2259 7.8203 30.57 15 30.57C22.1797 30.57 28 24.2259 28 16.4C28 8.57417 22.1797 2.23005 15 2.23005ZM10 13.13H8V10.95H10V13.13ZM22 13.13H20V10.95H22V13.13ZM9.2 18.1441L9.8 19.016C12.4 22.7947 17.6 22.7947 20.2 19.016L20.8 18.1441L22.4 19.452L21.8 20.324C18.4 25.2654 11.6 25.2654 8.2 20.324L7.6 19.452L9.2 18.1441Z"
                fill=""
              />
            </svg>
          </Link>
          <Link
            href="/favourites"
            className={`${
              router.pathname === "/favourites"
                ? "bg-[#FF868E]"
                : "bg-white hover:bg-[#FBE0DC] fill-[#FF868E]"
            } flex items-center justify-center  px-2 py-1 rounded-xl mr-2 group duration-300`}>
            <svg
              className={`${
                router.pathname === "/favourites"
                  ? "fill-white"
                  : " fill-[#FF868E]"
              } p-1`}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.07107 2.40998C4.71811 2.40998 2 5.37272 2 9.02744C2 10.7825 2.63963 12.4657 3.77817 13.7067L15 25.9385L26.2218 13.7067C27.3604 12.4657 28 10.7825 28 9.02744C28 5.37272 25.2819 2.40998 21.9289 2.40998C20.3188 2.40998 18.7746 3.10717 17.636 4.34819L15.7071 6.45073C15.3166 6.8764 14.6834 6.8764 14.2929 6.45073L12.364 4.34819C11.2254 3.10718 9.68121 2.40998 8.07107 2.40998ZM0 9.02744C0 4.16874 3.61354 0.22998 8.07107 0.22998C10.2116 0.22998 12.2646 1.15685 13.7782 2.8067L15 4.13849L16.2218 2.8067C17.7354 1.15685 19.7884 0.22998 21.9289 0.22998C26.3865 0.22998 30 4.16874 30 9.02744C30 11.3607 29.1497 13.5983 27.636 15.2482L15.7071 28.2507C15.3166 28.6764 14.6834 28.6764 14.2929 28.2507L2.36396 15.2482C0.850339 13.5983 0 11.3607 0 9.02744Z"
                fill=""
              />
            </svg>
          </Link>
          <Link
            href="/dislikes"
            className={`${
              router.pathname === "/dislikes"
                ? "bg-[#FF868E]"
                : "bg-white hover:bg-[#FBE0DC] fill-[#FF868E]"
            } flex items-center justify-center  px-2 py-1 rounded-xl mr-2 group duration-300`}>
            <svg
              className={`${
                router.pathname === "/dislikes"
                  ? "fill-white"
                  : " fill-[#FF868E]"
              } p-1`}
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="33"
              viewBox="0 0 30 33"
              fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 16.4C0 7.37019 6.71573 0.0500488 15 0.0500488C23.2843 0.0500488 30 7.37019 30 16.4C30 25.4299 23.2843 32.75 15 32.75C6.71573 32.75 0 25.4299 0 16.4ZM15 2.23005C7.8203 2.23005 2 8.57417 2 16.4C2 24.2259 7.8203 30.57 15 30.57C22.1797 30.57 28 24.2259 28 16.4C28 8.57417 22.1797 2.23005 15 2.23005ZM10 13.13H8V10.95H10V13.13ZM22 13.13H20V10.95H22V13.13ZM7.6 22.0681L8.2 21.196C11.6 16.2547 18.4 16.2547 21.8 21.196L22.4 22.0681L20.8 23.376L20.2 22.504C17.6 18.7254 12.4 18.7254 9.8 22.504L9.2 23.376L7.6 22.0681Z"
                fill=""
              />
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex sm:hidden justify-between w-full bg-white px-2 py-1 rounded-2xl mt-2 ">
        <input className="w-full mx-4" />
        <div className="bg-red-200 p-2 rounded-2xl">
          <svg
            className="p-0.5"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none">
            <path
              d="M19.3608 18.2168L14.6007 13.2662C15.8246 11.8113 16.4952 9.98069 16.4952 8.07499C16.4952 3.62251 12.8727 0 8.42021 0C3.96773 0 0.345215 3.62251 0.345215 8.07499C0.345215 12.5275 3.96773 16.15 8.42021 16.15C10.0917 16.15 11.6846 15.6458 13.0465 14.6888L17.8427 19.677C18.0431 19.8852 18.3128 20 18.6017 20C18.8752 20 19.1347 19.8957 19.3316 19.7061C19.7501 19.3034 19.7635 18.6357 19.3608 18.2168ZM8.42021 2.10652C11.7113 2.10652 14.3887 4.78391 14.3887 8.07499C14.3887 11.3661 11.7113 14.0435 8.42021 14.0435C5.12912 14.0435 2.45173 11.3661 2.45173 8.07499C2.45173 4.78391 5.12912 2.10652 8.42021 2.10652Z"
              fill="#FF868E"
            />
          </svg>
        </div>
      </div>
      {mobileMenu && (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
          className="fixed right-0 top-0 z-50 flex 
          w-full items-center  justify-center  gap-24 bg-[#F8F8F7] text-2xl font-bold lg:hidden h-screen "
          onClick={() => {
            setMobileMenu(false);
          }}>
          <MenuMobile />
        </motion.div>
      )}
    </nav>
  );
};

export default Nav;
