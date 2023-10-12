import star from "@/assets/star.svg";
import Image from "next/image";
import { Testimonials } from "@/types/Types";

const TestimonialCard = ({ name, text, url }: Testimonials) => {
  return (
    <div className="bg-gray-100 w-[23rem] lg:w-[22rem] xl:w-[26rem] bg-opacity-50 mx-auto rounded-2xl flex flex-col justify-center gap-8 p-7">
      <div className="flex items-center gap-4">
        <div>
          <Image
            className="rounded-[50%]  aspect-[5/5] object-cover "
            width={64}
            height={50}
            alt=""
            src={url}
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <div className="flex gap-2">
            <Image
              alt="star"
              src={star}
              width={20}
              height={20}
              className=" object-cover"
            />
            <Image
              alt="star"
              src={star}
              width={25}
              height={20}
              className=" object-cover"
            />
            <Image
              alt="star"
              src={star}
              width={20}
              height={20}
              className=" object-cover"
            />
            <Image
              alt="star"
              src={star}
              width={20}
              height={20}
              className=" object-cover"
            />
            <Image
              alt="star"
              src={star}
              width={20}
              height={20}
              className=" object-cover"
            />
          </div>
          <span className=" styledfont">{name}</span>
        </div>
      </div>
      <p className="text-lg fonttext">{text}</p>
    </div>
  );
};

export default TestimonialCard;
