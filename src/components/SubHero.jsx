import React from "react";
import useVisibility from "../hooks/useVisibility";
import { useTranslation } from "react-i18next";

import styles from "../style";

const SubHero = ({ firstHalf, featuredWords, secondHalf, hImage }) => {
  const [ref, isVisible] = useVisibility();

  return (
    <section
      className={`relative z-20 flex items-center justify-center w-full h-[85vh] md:flex-row flex-col ${styles.paddingY}`}
    >
      <img
        src={hImage}
        loading="lazy"
        className="absolute object-cover h-[85vh] w-full opacity-30 -z-0"
        alt={`${firstHalf} ${featuredWords} ${secondHalf}`}
      />
      <div
        ref={ref}
        className={`flex flex-col justify-between items-center w-full z-10 ${
          isVisible ? "animate-endFadeUp" : "opacity-0"
        }`}
      >
        <div className="font-poppins font-semibold ss:text-[72px] text-[52px] text-dimWhite ss:leading-[100px] leading-[75px] px-15">
          {firstHalf} <br />
          <span className="text-gradient">{featuredWords}</span>
          <br /> {secondHalf}
        </div>
      </div>
    </section>
  );
};

export default SubHero;
