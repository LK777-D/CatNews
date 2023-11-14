import { fetchNews } from "@/utils/fetch";
import { NewsT } from "@/types/Types";
import NewsBox from "@/components/NewsBox";
import LargeNewsCard from "@/components/LargeNewsCard";
import SideAd from "@/components/SideAd";
import Crypto from "@/components/Crypto";
import SmallNewsCard from "@/components/SmallNewsCard";
const Tech = async () => {
  const newsData = await fetchNews();
  const techNews = newsData.usData.articles.filter(
    (article: NewsT) => article.urlToImage !== null || undefined
  );
  const teslaNews = newsData.teslaData.articles.filter(
    (article: NewsT) => article.urlToImage !== null || undefined
  );

  return (
    <main>
      <section className="flex flex-col  justify-center xl:flex-row xl:gap-7  2xl:gap-20 ">
        <div>
          {techNews.slice(7, 8).map((news: NewsT) => (
            <LargeNewsCard
              key={news.title}
              urlToImage={news.urlToImage}
              source={news.source}
              title={news.title}
              publishedAt={news.publishedAt}
              url={news.url}
            />
          ))}
          <NewsBox
            news={techNews}
            heading="#Tech News"
            startSlice={15}
            finishSlice={30}
          />
        </div>
        <div className="flex flex-col gap-20 items-center md:flex-row md:items-start justify-center xl:flex-col">
          <SideAd />
          <Crypto />
        </div>
      </section>
      <div className="seperator"></div>
      <section className="  max-w-[100rem] mx-auto">
        <h1 className="fontbold text-blue-900 text-3xl mb-5 ml-4">#Tesla</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  ">
          {teslaNews.slice(0, 15).map((news: NewsT) => (
            <SmallNewsCard
              key={news.title}
              source={news.source}
              title={news.title}
              urlToImage={news.urlToImage}
              publishedAt={news.publishedAt}
              url={news.url}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Tech;
