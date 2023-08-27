import Image from "next/image";
import Hero from "../components/Hero";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main >
      <div className="">
      <motion.div
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="w-full relative justify-center items-center hidden lg:flex pl-8">
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-red-300 rounded-3xl w-3/4 h-auto z-10 m-36 px-5 mx-auto"></div>
        <Image
          className="w-full h-screen object-cover z-20"
          src="/girl-and-pet.png"
          alt=""
          width={2000}
          height={2000}
        />
      </motion.div> 
      </div>
    </main>
  );
}
