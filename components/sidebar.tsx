"use client";

import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { BiMoviePlay, } from "react-icons/bi";
import { RiMovieLine } from "react-icons/ri";

interface SidebarProps {
  children: React.ReactNode;
  displayType: DisplayType; // Add displayType as a prop
  setDisplayType: React.Dispatch<React.SetStateAction<DisplayType>>; // Add setDisplayType as a prop
}



enum DisplayType {
  Movies = "movies",
  Tvshows = "tvshows"
}


const Sidebar: React.FC<SidebarProps> = ({ children, }) => {

  const[displayType, setDisplayType] = useState<DisplayType>(DisplayType.Movies);


  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black w-[300px] p-2">
        <Box>
          <div className="px-5 py-5 flex flex-col float-start gap-y-2">
            <button  onClick={() => setDisplayType(DisplayType.Movies)}>Movie</button>
            <button  onClick={() => setDisplayType(DisplayType.Tvshows)}>Tvshows</button>
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Link
            href="/favourite"
            className={twMerge(
              `flex flex-row ml-2 h-auto w-fit items-center gap-x-2 cursor-pointer text-md font-medium hover:text-white transition text-neutral-400 py-1 overflow-y-hidden`
            )}
          >
            <FaHeart size={20} className="mx-3 my-2" />
            <p className="truncate w-fit">Favourite</p>
          </Link>
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;


