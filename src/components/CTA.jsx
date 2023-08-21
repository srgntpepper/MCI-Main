import React from "react";
import useVisibility from "../hooks/useVisibility";
import { useTranslation } from "react-i18next";

import styles from "../style";
import Button from "./Button";

const CTA = () => {
  const [ref, isVisible] = useVisibility();
  const { t } = useTranslation();

  return (
    <section
      ref={ref}
      className={`${styles.flexCenter} ${styles.marginY} ${
        styles.padding
      } sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow ${
        isVisible ? "animate-fadeIn" : "animate-fadeOut"
      }`}
    >
      <div className="flex-1 flex flex-col animate-fadeLeft">
        <h2 className={styles.heading2}>{t("cta.title")}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t("cta.subtitle")}
        </p>
      </div>

      <div
        className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 animate-fadeRight`}
      >
        <Button text={t("button.cta")} link={"invest"} />
      </div>
    </section>
  );
};

export default CTA;
