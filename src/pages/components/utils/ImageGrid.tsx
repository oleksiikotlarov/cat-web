// @ts-nocheck
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { addFavoriteImage, deleteFavoriteImage, deleteVoteImage } from "@/utils/util";

interface GalleryItemProps {
  item: CatImageData;
  index: number;
}

interface CatImageData {
  id: string;
  url: string;
  breeds: Breed[];

  width: number;
  height: number;
}

interface Breed {
  id: string;
  name: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ item, index }) => {
  const router = useRouter();
  return (
    <div className={`${assignDimensions(index)}`}>
      {router.pathname === `/breeds` && (
        <Link className="group relative" href={`/breeds/cat/${item.id}`}>
          <div className="absolute group-hover:bg-[#FF868E99] bg-opacity-0 bg-white w-full h-full rounded-2xl justify-center items-end hidden group-hover:flex transition duration-300">
            <div className="text-[#FF868E99] text-lg bg-white py-2 px-6 my-4 rounded-xl">
              {item.breeds[0].name}
            </div>
          </div>
          <Image
            src={item.url}
            key={item.id}
            className="object-cover object-center w-full h-full rounded-2xl bg-gray-200"
            alt={item.id}
            width={item.width}
            height={item.height}
          />
        </Link>
      )}{" "}
      {router.pathname === `/gallery` && (
        <a className={`group relative ${assignDimensions(index)}`}>
          <div className="absolute group-hover:bg-[#FF868E99] bg-opacity-20 bg-white w-full h-full rounded-2xl justify-center items-center hidden group-hover:flex transition duration-300">
            <button
              className="text-[#FF868E99] text-lg bg-white rounded-xl p-5"
              onClick={() => {
                addFavoriteImage(item.id, "swordcreeper88");
              }}>
              <Image
                className="object-contain"
                src="/like.svg"
                alt="like"
                width={20}
                height={20}
              />
            </button>
          </div>
          <Image
            src={item.url}
            key={item.id}
            className="object-cover object-center w-full h-full rounded-2xl bg-gray-200 "
            alt={item.id}
            width={item.width}
            height={item.height}
          />
        </a>
      )}
      {router.pathname === `/favourites` && (
        <a className={`group relative ${assignDimensions(index)}`}>
          <div className="absolute group-hover:bg-[#FF868E99] bg-opacity-20 bg-white w-full h-full rounded-2xl justify-center items-center hidden group-hover:flex transition duration-300">
            <button
              className="text-[#FF868E99] text-lg bg-white rounded-xl p-5"
              onClick={async () => {
                await deleteFavoriteImage(item.id);
                router.push('/favourites');
              }}>
              <Image
                className="object-contain"
                src="/likefilled.svg"
                alt="like"
                width={20}
                height={20}
              />
            </button>
          </div>
          <Image
            src={item.image.url}
            key={item.id}
            className="object-cover object-center w-full h-full rounded-2xl bg-gray-200 "
            alt={item.id}
            width={500}
            height={500}
          />
        </a>
      )}
      {router.pathname === `/likes` && (
        <a className={`group relative ${assignDimensions(index)}`}>
          <div className="absolute group-hover:bg-[#FF868E99] bg-opacity-20 bg-white w-full h-full rounded-2xl justify-center items-center hidden group-hover:flex transition duration-300">
            <button
              className="text-[#FF868E99] text-lg bg-white rounded-xl p-5"
              onClick={async () => {
                await deleteVoteImage(item.id);
                router.push('/likes')
              }}>
              <Image
                className="object-contain"
                src="/happy.svg"
                alt="like"
                width={20}
                height={20}
              />
            </button>
          </div>
          <Image
            src={item.image.url}
            key={item.id}
            className="object-cover object-center w-full h-full rounded-2xl bg-gray-200 "
            alt={item.id}
            width={500}
            height={500}
          />
        </a>
      )}
      {router.pathname === `/dislikes` && (
        <a className={`group relative ${assignDimensions(index)}`}>
          <div className="absolute group-hover:bg-[#FF868E99] bg-opacity-20 bg-white w-full h-full rounded-2xl justify-center items-center hidden group-hover:flex transition duration-300">
            <button
              className="text-[#FF868E99] text-lg bg-white rounded-xl p-5"
              onClick={async () => {
                await deleteVoteImage(item.id);
                router.push('/dislikes')
              }}>
              <Image
                className="object-contain"
                src="/sad.svg"
                alt="like"
                width={20}
                height={20}
              />
            </button>
          </div>
          <Image
            src={item.image.url}
            key={item.id}
            className="object-cover object-center w-full h-full rounded-2xl bg-gray-200 "
            alt={item.id}
            width={500}
            height={500}
          />
        </a>
      )}
    </div>
  );
};

const assignDimensions = (index: number): string => {
  const grids = [
    "row-span-2 ",
    "col-span-1 ",
    "col-span-1 ",
    "row-span-2 col-span-2 ",
    "col-span-1 ",
    "col-span-1 ",
    "col-span-1 ",
    "row-span-2 ",
    "row-span-2 col-span-2 ",
    "col-span-1 ",
    "row-span-2 ",
    "col-span-1 ",
    "col-span-1 ",
    "row-span-2 col-span-2 ",
    "col-span-1 ",
  ];
  return grids[index % grids.length];
};

const ImageGrid: React.FC<{ data: CatImageData[] }> = ({ data }) => {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 grid-flow-row-dense gap-4 ">
      {data.map((item, index) => (
        <GalleryItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default ImageGrid;
