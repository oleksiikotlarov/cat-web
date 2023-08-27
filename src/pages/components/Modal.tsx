import React from "react";
import { motion } from "framer-motion";
import Wrapper from "./Wrapper";

interface ModalProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ setModalOpen }) => {
  return (
    <div className="grid lg:grid-cols-2 w-full">
      <div
        className="lg:w-full"
        onClick={() => {
          setModalOpen(false);
        }}></div>
      <div className="w-full h-screen">
        <Wrapper>
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ ease: "easeInOut", duration: 0.6 }}
            className="flex flex-col justify-center items-center w-full h-full">
            <div className="bg-[#F8F8F7] rounded-xl my-4 px-4 py-4 h-full mx-2">
              <div className="flex justify-end ml-auto">
                <div
                  className="mr-4 mb-12 cursor-pointer my-2 bg-white rounded-lg p-2"
                  onClick={() => {
                    setModalOpen(false);
                  }}>
                  <svg
                    className=" fill-[#FF868E] z-40"
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.05716 8.99997L0.528564 1.47137L1.47137 0.528564L8.99997 8.05716L16.5286 0.528564L17.4714 1.47137L9.94278 8.99997L17.4714 16.5286L16.5286 17.4714L8.99997 9.94278L1.47137 17.4714L0.528564 16.5286L8.05716 8.99997Z"
                      fill=""
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-col justify-center items-start">
                <div className="w-full">
                  <div className="flex flex-col justify-center items-center mb-12">
                    <h1 className="text-3xl mb-4 text-center">
                      Upload a .jpg or .png Cat Image
                    </h1>
                    <p className="flex items-center justify-center font-normal text-center text-lg text-[#8C8C8C]">
                      Any uploads must comply with the upload guidelines or face
                      deletion.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl w-full border-2 border-dashed border-[#FF868E] aspect-[16/9]"></div>
                <div>
                  <div className="flex justify-center items-center mt-12">
                    <div className="text-white text-lg font-medium bg-[#FF868E] rounded-lg py-2 px-8 group-hover:bg-[#FBE0DC] duration-100 active:bg-[#FF868E] active:text-white">
                      <button>Upload</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Modal;
