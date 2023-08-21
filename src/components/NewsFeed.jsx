import React, { useEffect, useState } from "react";
import useVisibility from "../hooks/useVisibility";
import axios from "axios";
import { useTranslation } from "react-i18next";

import Article from "./Article";
import styles from "../style";

const apiKey = import.meta.env.VITE_APP_NEWS_API_KEY;

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [displayCount, setDisplayCount] = useState(5);
  const [maxArticles, setMaxArticles] = useState(0);
  const [ref, isVisible] = useVisibility();
  const { t } = useTranslation();

  const getArticles = async () => {
    try {
      const res = await axios.get(
        "https://newsapi.ai/api/v1/article/getArticles",
        {
          params: {
            query:
              '{"$query":{"$and":[{"conceptUri":"http://en.wikipedia.org/wiki/Bitcoin"},{"$or":[{"sourceUri":"cointelegraph.com"},{"sourceUri":"coindesk.com"}]},{"lang":"eng"}]},"$filter":{"forceMaxDataTimeWindow":"31"}}',
            resultType: "articles",
            articlesSortBy: "date",
            articlesCount: 20,
            includeArticleEventUri: false,
            articleBodyLen: -1,
            includeConceptLabel: false,
            includeConceptImage: true,
            includeSourceRanking: true,
            apiKey: apiKey,
          },
        }
      );
      setArticles(res.data.articles.results);

      setMaxArticles(res.data.articles.results.length);
    } catch (err) {
      console.log(`This is the error: ${err}`);
    }
  };

  const loadMoreArticles = () => {
    setDisplayCount((prevDisplayCount) => prevDisplayCount + 5);
  };

  useEffect(() => {
    getArticles();
  }, []);

  // if (articles) {
  //   articles.slice(0, displayCount).map((article, i) => {
  //     console.log(article.title, i);
  //   });
  // }

  function formatDate(date) {
    let formatted = { day: "numeric", month: "long", year: "numeric" };
    return new Date(date).toLocaleDateString(undefined, formatted);
  }

  function timeDifference(dateString) {
    const publicationDate = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - publicationDate) / 1000);

    if (diffInSeconds < 60) {
      return `Less than a minute ago`;
    }

    const diffInMinutes = Math.floor(diffInSeconds / 60);
    if (diffInMinutes < 60) {
      return `${diffInMinutes} mins ago`;
    }

    const diffInHours = Math.floor(diffInMinutes / 60);
    if (diffInHours < 24 && now.getDate() === publicationDate.getDate()) {
      return `${diffInHours} hrs ago`;
    }

    // If it's been more than a week, return the date string
    return formatDate(publicationDate);
  }

  const handleImageClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      ref={ref}
      className={`${
        window.innerWidth > 705
          ? isVisible
            ? "animate-fadeIn"
            : "animate-fadeOut"
          : "animate-fadeIn"
      }`}
    >
      <Article
        name="news"
        title={t("article.title")}
        subtitle={t("article.subtitle")}
      >
        <div className={`grid lg:grid-cols-1 gap-12 text-white `}>
          {articles.slice(0, displayCount).map((article, i) => (
            <div
              key={i}
              className={`feature-card rounded-lg flex-col p-8 text-left animate-fadeIn`}
            >
              <div className="flex flex-col sm:flex-row">
                <img
                  onClick={() => handleImageClick(article.url)}
                  loading="lazy"
                  className="justify-center sm:object-cover sm:h-64 sm:w-64 rounded-lg pr-3 cursor-pointer"
                  src={article.image}
                  alt={article.title}
                />
                <div>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    <h1
                      className={`mb-2 font-bold ${styles.linkText} text-lg md:text-2xl`}
                    >
                      {article.title}
                    </h1>
                    <h2 className="mb-4 text-dimWhite">
                      {timeDifference(article.dateTimePub)} |{" "}
                      <span className="text-blue-500">
                        {article.source.title}
                      </span>
                    </h2>
                    <p className={`hidden sm:block mt-8 ${styles.paragraph}`}>
                      {article.body.substring(0, 225)}{" "}
                      <span className={`${styles.linkText}`}>
                        {t("article.read_more")}
                      </span>
                    </p>
                    <p className={`sm:hidden mt-8 ${styles.paragraph}`}>
                      {article.body.substring(0, 130)}{" "}
                      <span className={`${styles.linkText}`}>
                        {t("article.read_more")}
                      </span>
                    </p>
                  </a>
                </div>
              </div>
            </div>
          ))}
          {displayCount < maxArticles ? (
            <button
              onClick={loadMoreArticles}
              target="_blank"
              rel="noopener noreferrer"
              className={`tracking tracking-widest transition ease-in-out hover:scale-105 py-4 px-6 bg-gold-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}
            >
              {t("button.load_more")}
            </button>
          ) : (
            <div className="w-full text-center text-makerGold font-extralight tracking-wider italic">
              {t("article.end_of_feed")}
            </div>
          )}
        </div>
      </Article>
    </div>
  );
};

export default NewsFeed;
