import "../app/globals.css";
import Image from "next/image";
import img1 from "@/assets/newspaper.svg";
import Logo from "./Logo";
import Link from "next/link";
const Nav = () => {
  return (
    <nav className="relative flex flex-col   text-white  h-[7rem] bg-blue-900">
      <div className="flex items-center  p-3 justify-around  h-full lg:justify-around ">
        <div className=" flex w-full  items-center justify-between ">
          <span className="styledfont">
            <Logo
              size="text-[32px] hidden
           lg:inline "
            />
          </span>
          <span>
            <Logo size="text-[15.9px] lg:hidden" />
          </span>
          <div className="flex gap-4 items-center lg:hidden">
            <span className="w-auto font-bold bg-red-700 px-2 py-1 rounded-md">
              Read Now
            </span>
            <div className="  flex flex-col gap-2 ">
              <div className="bg-white h-[2px] w-[28px]"></div>
              <div className="bg-white h-[2px] w-[28px]"></div>
              <div className="bg-white h-[2px] w-[28px]"></div>
            </div>
          </div>
          <div className=" hidden lg:flex gap-3 items-center  fontbold  ">
            <Link href="/">Trending</Link>
            <Link href="/">US Today</Link>
            <Link href="/">Tech</Link>
            <Link href="/">Global</Link>
          </div>
        </div>
        <div className=" hidden fontsemibold lg:flex flex-row-reverse gap-3 text-[1.18rem]   ">
          <Link href="/" className="bg-blue-950 px-2 py-1 rounded-md ">
            Log In
          </Link>
          <Link href="/" className="bg-red-800 px-2 py-1 rounded-md">
            Read News
          </Link>
        </div>
      </div>
      <div className="bg-white text-blue-950 fontsemibold py-3 flex justify-around lg:hidden">
        <Link href="/">Trending</Link>
        <Link href="/">US Today</Link>
        <Link href="/">Tech</Link>
        <Link href="/">Global</Link>
      </div>
    </nav>
  );
};

export default Nav;
