import { NewsT } from "@/types/Types";
import NewsCard from "./NewsCard";

const NewsBox = ({
  news,
  startSlice,
  finishSlice,
  heading,
}: {
  news: NewsT[];
  startSlice: number;
  finishSlice: number;
  heading: string;
}) => {
  let start = startSlice;
  let finish = finishSlice;

  return (
    <section>
      <h1 className="text-4xl my-10 fontbold text-blue-900">{heading}</h1>
      <div className=" flex flex-col items-center  md:grid md:grid-cols-2 md:items-center md:gap-5  lg:grid-cols-3 lg:gap-1 max-w-[61rem] ">
        {news.slice(start, finish).map((news: NewsT) => (
          <NewsCard
            key={news.title}
            title={news.title}
            urlToImage={news.urlToImage}
            publishedAt={news.publishedAt}
            source={news.source}
            url={news.url}
          />
        ))}
      </div>
    </section>
  );
};

export default NewsBox;
