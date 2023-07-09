import React, { useEffect, useRef } from "react";
import useVisibility from "../hooks/useVisibility";
import { useTranslation } from "react-i18next";

import GetStarted from "./GetStarted";

import { herovid9 } from "../assets";
import styles from "../style";

const Hero = () => {
  const [ref, isVisible] = useVisibility();
  const videoRef = useRef();
  const { t } = useTranslation();

  useEffect(() => {
    videoRef.current.playbackRate = 1;
  }, []);

  return (
    <section
      id="home"
      className={`main-container relative z-20 flex items-center justify-center w-full h-screen smd:h-[85vh] md:flex-row flex-col ${styles.paddingY} `}
    >
      <video
        ref={videoRef}
        src={herovid9}
        loop
        muted
        autoPlay
        playsInline
        className="absolute object-cover min-h-[85vh] min-w-full h-full w-full opacity-25 -z-10"
      />
      <div
        ref={ref}
        className={`flex-1 ${
          styles.flexStart
        } flex-col xl:px-10 sm:px-16 px-6 mt-16 lg:mt-8 ${
          isVisible ? "animate-endFadeLeft" : "animate-fadeOut"
        } xl:mt-0`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="font-poppins font-semibold text-[52px] text-white leading-[75px] md:text-[72px] md:leading-[100px]">
            {t("hero.first_half")}
            <br className="sm:block hidden" />{" "}
            <span className="text-gradient">{t("hero.featured_words")}</span>
          </h1>
        </div>

        <h1 className="font-poppins font-semibold text-[52px] text-white leading-[75px] w-full md:text-[72px] md:leading-[100px] md:tracking-wide">
          {t("hero.second_half")}
        </h1>
        <p
          className={`hidden smd:block ${styles.paragraph} max-w-[470px] mt-10`}
        >
          {t("hero.sub_first_half")}{" "}
          <span className="text-gradient">{t("hero.sub_featured_words")}</span>{" "}
          {t("hero.sub_second_half")}
        </p>
      </div>
      <div
        className={`flex-1 flex items-center md:justify-center ${
          isVisible ? "animate-endFadeRight" : "animate-fadeOut"
        } md:my-0 my-10 lg:mt-8 relative`}
      >
        <div className="z-20">
          <GetStarted link={"invest"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
