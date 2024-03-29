"use client";

import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import AuthModal from "./AuthModal";
import { BiMoviePlay } from "react-icons/bi";
import { RiMovieLine } from "react-icons/ri";
import Link from "next/link";
import Search from "./Search";
import {  Switch } from "./ui/switch";

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <div className="mb-2">
            <h1 className="text-white text-3xl font-semibold">Welcome back!</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-3 my-4"></div>
          </div>
        </div>
        {/* <div>
          <Search />
        </div> */}
        <div className="flex md:hidden max-[768px]:mb-10  gap-x-2 items-center">
          <Link href="/">
            <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
              <BiMoviePlay size={20} className="text-black" />
            </button>
          </Link>
          <Link href="/shows">
            <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
              <RiMovieLine size={20} className="text-black" />
            </button>
          </Link>
        </div>
        <div className="flex justify-between items-center gap-x-4 mb-12">
          <>

            <div>
              <AuthModal />
            </div>
          </>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Header;
