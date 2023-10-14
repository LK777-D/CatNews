"use client";

import "../app/globals.css";

import Logo from "./Logo";
import Link from "next/link";
import { usePostContext } from "@/context/postContext";

const Nav = () => {
  const { posts } = usePostContext();
  return (
    <>
      <div className="w-full  h-[4px] bg-red-600 flex items-center gap-[50%]"></div>
      <nav className=" text-white bg-blue-900 h-[5rem] lg:h-[6rem]">
        {/* small */}
        <div className="flex items-center justify-between px-3  h-full lg:hidden">
          <Link className="cursor-pointer" href="/">
            <Logo size="text-[15.9px]" />
          </Link>
          <div className="flex flex-row-reverse items-center gap-4 fontsemibold">
            <Link
              href="/posts/new"
              className="bg-blue-950 px-2 py-1 rounded-md hover:bg-blue-800 transition duration-300 ease-in-out "
            >
              Create Post
            </Link>
            <Link
              href="/posts"
              className="bg-red-800 px-2 py-1 rounded-md  hover:bg-red-700 transition duration-300 ease-in-out"
            >
              Forum Topics
            </Link>
          </div>
        </div>
        {/* large */}
        <div className=" hidden lg:flex items-center h-full justify-around gap-[20rem] xl:gap-[25rem] ">
          <div className=" flex items-center gap-24  ">
            <Link href="/" className="styledfont cursor-pointer">
              <Logo size="text-[32px]  " />
            </Link>
            <div className=" hidden lg:flex gap-3 items-center  fontbold  ">
              <Link
                href="/"
                className="hover:text-red-800 transition duration-300 ease-in-out"
              >
                Trending
              </Link>
              <Link
                href="/us"
                className="hover:text-red-800 transition duration-300 ease-in-out"
              >
                US Today
              </Link>
              <Link
                href="/tech"
                className="hover:text-red-800 transition duration-300 ease-in-out"
              >
                Tech
              </Link>
              <Link
                href="/posts"
                className="hover:text-red-800 transition duration-300 ease-in-out"
              >
                Forum
              </Link>
            </div>
          </div>
          <div className="  fontsemibold flex flex-row-reverse gap-3 text-[1.18rem] items-center justify-center  ">
            <Link
              href="/posts/new"
              className="bg-blue-950 px-2 py-1 rounded-md hover:bg-blue-800 transition duration-300 ease-in-out "
            >
              Create Post
            </Link>
            <Link
              href="/posts"
              className="bg-red-800 px-2 py-1 rounded-md  hover:bg-red-700 transition duration-300 ease-in-out"
            >
              Forum Topics
            </Link>
          </div>
        </div>
      </nav>
      <div className="bg-white border-b border-gray-400 text-blue-950 fontsemibold py-3 flex justify-around lg:hidden">
        <Link
          href="/"
          className="hover:text-red-700 transition duration-300 ease-in-out "
        >
          Trending
        </Link>
        <Link
          href="/us"
          className="hover:text-red-700 transition duration-300 ease-in-out "
        >
          US Today
        </Link>
        <Link
          href="/tech"
          className="hover:text-red-700 transition duration-300 ease-in-out "
        >
          Tech
        </Link>
        <Link
          href="/posts"
          className="hover:text-red-700 transition duration-300 ease-in-out "
        >
          Forum
        </Link>
      </div>
    </>
  );
};

export default Nav;
