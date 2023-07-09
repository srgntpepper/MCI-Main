import React from "react";
import useVisibility from "../hooks/useVisibility";
import { useTranslation } from "react-i18next";

import {
  //apple,
  unearthedcoin,
  //google
} from "../assets";
import styles, { layout } from "../style";

const Mining = () => {
  const [ref, isVisible] = useVisibility();
  const { t } = useTranslation();

  return (
    <section
      ref={ref}
      id="product"
      className={`${layout.sectionReverse} ${
        isVisible ? "animate-fadeIn" : "animate-fadeOut"
      }`}
    >
      <div className={layout.sectionImgReverse}>
        <img
          src={unearthedcoin}
          loading="lazy"
          alt="construction worker mining out a giant Bitcoin from the ground"
          className="w-[100%] h-[100%] relative z-[5] rounded-lg"
        />

        {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" /> */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {t("mining_component.title_first")}
          <br className="sm:block hidden" />{" "}
          {t("mining_component.title_second")}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t("mining_component.subtitle")}
        </p>
      </div>
    </section>
  );
};

export default Mining;
