import React from "react";
import useVisibility from "../hooks/useVisibility";
import { useTranslation } from "react-i18next";

import Button from "./Button";

import { strugglingmachine } from "../assets";
import styles, { layout } from "../style";

const MiningDifficulty = () => {
  const [ref, isVisible] = useVisibility();
  const { t } = useTranslation();

  return (
    <section
      ref={ref}
      className={`${layout.section} ${
        isVisible ? "animate-fadeIn" : "animate-fadeOut"
      }`}
    >
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          {t("mining_difficulty_component.title_first")}
          <br className="sm:block hidden" />{" "}
          {t("mining_difficulty_component.title_second")}
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t("mining_difficulty_component.subtitle")}
        </p>
        <Button
          styles="mt-10"
          text={t("button.mining_difficulty")}
          link={"calculator"}
        />
      </div>

      <div className={layout.sectionImg}>
        <img
          src={strugglingmachine}
          loading="lazy"
          alt="ASIC machine struggling with smoke billowing out of the sides"
          className="w-[100%] h-[100%] rounded-lg"
        />
      </div>
    </section>
  );
};

export default MiningDifficulty;
