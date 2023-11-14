import { fetchNews } from "@/utils/fetch";
import { NewsT } from "@/types/Types";
import NewsBox from "@/components/NewsBox";
import LargeNewsCard from "@/components/LargeNewsCard";
import SideAd from "@/components/SideAd";
import Crypto from "@/components/Crypto";
import SmallNewsCard from "@/components/SmallNewsCard";
import Head from "next/head";

export default async function Home() {
  const newsData = await fetchNews();
  const appleNews = newsData.wallStData.articles.filter(
    (article: NewsT) => article.urlToImage !== null || undefined
  );
  const wallStNews = newsData.wallStData.articles.filter(
    (article: NewsT) => article.urlToImage !== null || undefined
  );

  return (
    <>
      <main>
        <section className="flex flex-col  justify-center  md:items-center xl:gap-5 xl:flex-row 2xl:gap-20 ">
          <div>
            {appleNews.slice(14, 15).map((news: NewsT) => (
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
              heading="#News Mix"
              news={appleNews}
              startSlice={0}
              finishSlice={12}
            />
          </div>
          <div className="flex flex-col gap-20 items-center md:flex-row md:items-start justify-center xl:flex-col">
            <SideAd />
            <Crypto />
          </div>
        </section>
        <div className="seperator"></div>
        <section className="  max-w-[100rem] mx-auto">
          <h1 className="fontbold text-blue-900 text-3xl mb-5 ml-4">
            Wall Street Journal
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  ">
            {wallStNews.slice(0, 15).map((news: NewsT) => (
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
    </>
  );
}
