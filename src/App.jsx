import React, { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Cookies from "js-cookie";

import styles from "./style";
import { teamhero, locationhero, careershero } from "./assets";
import { Invest } from "./pages";
import { subHeroHeaders, languages } from "./constants";

import {
  Navbar,
  NewsFeed,
  Hero,
  Stats,
  //SubHero,
  Bitcoin,
  Mining,
  MiningDifficulty,
  CTA,
  Footer,
  Environment,
} from "./components";

//const LazyStats = lazy(() => import("./components/Stats"));
const LazyNewsfeed = lazy(() => import("./components/NewsFeed"));
const LazySubHero = lazy(() => import("./components/SubHero"));
const LazyJobSites = lazy(() => import("./pages/JobSites"));
const LazyCalculator = lazy(() => import("./pages/Calculator"));
//const LazyTeam = lazy(() => import("./pages/Team"));
const LazyCareers = lazy(() => import("./pages/Careers"));
const LazyToS = lazy(() => import("./pages/ToS"));
// const LazyStats = lazy(() => import("./components/Stats"));
// const LazyStats = lazy(() => import("./components/Stats"));

const App = () => {
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <div className="w-full bg-primary overflow-hidden">
      <div
        className={`bg-primary w-full ${styles.paddingX} ${styles.flexCenter} mx-auto z-30 relative`}
      >
        <div className={` ${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className={`relative bg-primary ${styles.flexStart}  `}>
                <div className={`${styles.boxWidth}`}>
                  <Hero />
                </div>
              </div>

              <div
                className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <Stats /> <Bitcoin /> <Mining /> <MiningDifficulty />{" "}
                  <LazyNewsfeed />
                  <Environment /> <CTA /> <Footer />
                </div>
              </div>
            </>
          }
        ></Route>
        <Route
          path="job-sites"
          element={
            <>
              <div className={`relative bg-primary ${styles.flexStart} `}>
                <div className={`${styles.boxWidth}`}>
                  <LazySubHero
                    firstHalf={t(subHeroHeaders[0].firstHalf)}
                    featuredWords={t(subHeroHeaders[0].featuredWords)}
                    secondHalf={t(subHeroHeaders[0].secondHalf)}
                    hImage={locationhero}
                  />
                </div>
              </div>
              <div
                className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <LazyJobSites /> <Footer />
                </div>
              </div>
            </>
          }
        ></Route>
        <Route
          path="calculator"
          element={
            <>
              {/* <div className={`relative bg-primary ${styles.flexStart} `}>
                <div className={`${styles.boxWidth}`}>
                  <LazySubHero
                    firstHalf={subHeroHeaders[0].firstHalf}
                    featuredWords={subHeroHeaders[0].featuredWords}
                    secondHalf={subHeroHeaders[0].secondHalf}
                    hImage={locationhero}
                  />
                </div>
              </div> */}
              <div
                className={`bg-primary ${styles.paddingX} ${styles.flexStart} relative z-20`}
              >
                <div className={`${styles.boxWidth}`}>
                  <LazyCalculator /> <Footer />
                </div>
              </div>
            </>
          }
        ></Route>
        {/* <Route
          path="team"
          element={
            <>
              <div className={`relative bg-primary ${styles.flexStart} `}>
                <div className={`${styles.boxWidth}`}>
                  <LazySubHero
                    firstHalf={subHeroHeaders[1].firstHalf}
                    featuredWords={subHeroHeaders[1].featuredWords}
                    secondHalf={subHeroHeaders[1].secondHalf}
                    hImage={teamhero}
                  />
                </div>
              </div>
              <div
                className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <LazyTeam /> <Footer />
                </div>
              </div>
            </>
          }
        ></Route> */}
        <Route path="invest" element={<Invest />}></Route>
        <Route
          path="careers"
          element={
            <>
              <div className={`relative bg-primary ${styles.flexStart} `}>
                <div className={`${styles.boxWidth}`}>
                  <LazySubHero
                    firstHalf={t(subHeroHeaders[3].firstHalf)}
                    featuredWords={t(subHeroHeaders[3].featuredWords)}
                    secondHalf={t(subHeroHeaders[3].secondHalf)}
                    hImage={careershero}
                  />
                </div>
              </div>
              <div
                className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}
              >
                <div className={`${styles.boxWidth}`}>
                  <LazyCareers /> <Footer />
                </div>
              </div>
            </>
          }
        ></Route>
        <Route path="terms-of-service" element={<LazyToS />}></Route>
      </Routes>
    </div>
  );
};

export default App;
