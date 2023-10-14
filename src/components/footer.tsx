import { UilFacebook } from "@iconscout/react-unicons";
import { UilTwitterAlt } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-black text-white h-[30rem] md:h-[25rem] mt-7 flex flex-col justify-center items-center">
      <div className="text-white flex flex-col gap-3 items-center justify-center">
        <div className="flex gap-3 items-center">
          <Logo size="text-[15.9px]" />
          <span className="fontbold">Global</span>
        </div>
        <p className="styledfont text-lg">Follow Cat News</p>
        <div className="flex gap-2">
          <UilFacebook size="30" />
          <UilTwitterAlt size="30" />
          <UilInstagram size="30" />
        </div>
      </div>
      <div className="seperatorsm"></div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3  items-center md:flex-row md:mx-auto ">
          <div className="flex gap-3 ">
            <Link href={""} className="hover:underline">
              Terms of Use
            </Link>
            <Link href={""} className="hover:underline">
              Privacy Policy
            </Link>
            <Link href={""} className="hover:underline">
              Cookie Settings
            </Link>
          </div>
          <div className="flex gap-3">
            <Link href={""} className="hover:underline">
              Ad Choices
            </Link>
            <Link href={""} className="hover:underline">
              Accesebility & CC
            </Link>
            <Link href={""} className="hover:underline">
              About
            </Link>
            <Link href={""} className="hover:underline">
              Newsletter
            </Link>
          </div>
        </div>
        <p className="p-3 text-center">
          © 2023 Cat News Network. Discovery Company. All Rights Reserved. Cat
          News Sans ™ & © 2023 Cat News Network.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
