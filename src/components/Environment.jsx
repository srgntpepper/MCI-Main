import React from "react";
import useVisibility from "../hooks/useVisibility";
import { useTranslation } from "react-i18next";

import { planetinthehand } from "../assets";
import styles, { layout } from "../style";

const Environment = () => {
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
          src={planetinthehand}
          loading="lazy"
          alt="A hand holding the planet, with greenery sprouting from one side and eco-friendly buildings and windmills on the other side."
          className="w-[100%] h-[100%] relative z-[5] rounded-lg"
        />

        {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" /> */}
      </div>

      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {t("environment_component.title_first")}
          <br className="sm:block hidden" />{" "}
          {t("environment_component.title_second")}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t("environment_component.subtitle_first")}{" "}
          <span className="text-gradient">
            {t("environment_component.subtitle_data_one")}
          </span>
          {t("environment_component.subtitle_second")}
          <span className="text-gradient">
            {t("environment_component.subtitle_data_two")}
          </span>{" "}
          {t("environment_component.subtitle_third")}{" "}
          <span className="text-gradient">
            {t("environment_component.subtitle_data_three")}
          </span>
          {t("environment_component.subtitle_fourth")}{" "}
          <span className="text-gradient">
            {t("environment_component.subtitle_data_four")}
          </span>
          {t("environment_component.subtitle_fifth")}
        </p>
      </div>
    </section>
  );
};

export default Environment;
