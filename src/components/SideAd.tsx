import Image from "next/image";

const SideAd = () => {
  return (
    <aside className="flex flex-col gap-3 w-[22rem]  items-center border-gray-500 p-4 ">
      <div className="flex  gap-12 items-center">
        <div>
          <div className="w-[120px] h-[3px] bg-red-700 " />
          <span className="fontbold text-blue-800 ml-2">Cat News</span>
          <div className="w-[120px] h-[3px] bg-red-700 " />
        </div>
        <span className=" text-red-700 fontsemibold">Join Now</span>
      </div>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqqEiOnS-NINhSN_qi3MR3kfdr_Mx9haVCcQ&usqp=CAU"
        width={300}
        height={280}
        alt="adimg"
        className="rounded-lg object-cover"
      />
      <p className="w-[300px] text-md fontbold text-blue-950">
        Watch gripping speeches from experts on the biggest criminal cases from
        around the world at CrimeCon 2023. Stream the top moments from the event
        now on Fox Nation.
      </p>
    </aside>
  );
};

export default SideAd;
