import Link from "next/link";
import Image from "next/image";
import { NewsProps } from "@/types/Types";

const LargeNewsCard = ({
  urlToImage,
  source,
  title,
  publishedAt,
  url,
}: NewsProps) => {
  const date = new Date(publishedAt);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  return (
    <Link
      target="_blank"
      href={url}
      className=" bordertransp  w-[97%]  p-3 flex  flex-col items-center justify-start gap-3  md:min-h-[19rem] md:text-2xl lg:w-[50rem]   "
    >
      <div className=" relative w-full    ">
        <Image
          layout="responsive"
          className=" aspect-[13/7] rounded-md"
          width={50}
          height={20}
          alt="img"
          src={urlToImage}
        />
        <span className="absolute  fontbold authorbg p-2 px-4 rounded-lg bottom-2 left-2 text-white">
          {source.name}
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="fontbold text-sky-950 hover:underline text-md ">
          {title}
        </h1>
        <span className="  fontsemibold ">{formattedDate}</span>
      </div>
    </Link>
  );
};

export default LargeNewsCard;
