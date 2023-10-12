import { PostContxt, PostT } from "@/types/Types";
import ReactReadMoreReadLess from "react-read-more-read-less";

const PostCard = ({
  title,
  description,
  topic,
  postText,
  submissionDate,
}: PostT) => {
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <div className="flex flex-col px-4 py-2 rounded-2xl shadow-xl gap-2 border border-gray-200 hover:border-gray-300 transition duration-300 ease-out cursor-pointer w-[90%] md:w-[85%] lg:w-[60rem]">
      <div className="flex flex-col items-start mb-3">
        <span className="fontbold md:text-xl lg:text-2xl mb-1 capitalize text-zinc-700 ">
          {title}
        </span>
        <span className="fonttext font-bold">
          <span className="forumfont1 capitalize text-gray-600">author :</span>{" "}
          {description}
        </span>
        <span className="text-white px-2 text-sm fontbold py-1 rounded-md bg-red-700 capitalize">
          {topic}
        </span>
      </div>
      <div className="md:hidden">
        <ReactReadMoreReadLess
          charLimit={50} // Adjust the character limit as needed
          readMoreText="Read More"
          readLessText="Read Less"
        >
          {postText}
        </ReactReadMoreReadLess>
      </div>
      <div className="hidden md:block lg:hidden">
        <ReactReadMoreReadLess
          charLimit={120} // Adjust the character limit as needed
          readMoreText="Read More"
          readLessText="Read Less"
        >
          {postText}
        </ReactReadMoreReadLess>
      </div>
      <div className="hidden fonttext lg:block">
        <ReactReadMoreReadLess
          charLimit={250} // Adjust the character limit as needed
          readMoreText="Read More"
          readLessText="Read Less"
        >
          {postText}
        </ReactReadMoreReadLess>
      </div>

      <span className="fontbold  bg-blue-950 w-[13.5rem] text-center rounded-lg text-[12px] py-1 text-gray-200">
        {formatDate(submissionDate)}
      </span>
    </div>
  );
};

export default PostCard;
