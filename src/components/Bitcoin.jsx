import React from "react";
import { useTranslation } from "react-i18next";

import useVisibility from "../hooks/useVisibility";
import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = React.memo(({ icon, title, content, index, length }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimGold `}
    >
      <img
        src={icon}
        alt="icons for features should be a star, arrow, and shield"
        className="w-[50%] h-[50%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
));

const Bitcoin = () => {
  const { t } = useTranslation();
  const [ref, isVisible] = useVisibility();

  return (
    <section
      ref={ref}
      id="features"
      className={`${layout.section} ${
        isVisible ? "animate-fadeIn" : "animate-fadeOut"
      }`}
    >
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>{t("bitcoin_component.heading")}</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          {t("bitcoin_component.description")}
        </p>

        {/* <Button styles="mt-10" text="Get Started" link={"invest"} /> */}
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard
            icon={feature.icon}
            key={feature.id}
            title={t(`${feature.title}`)}
            content={t(`${feature.content}`)}
            index={index}
            length={features.length}
          />
        ))}
      </div>
    </section>
  );
};

export default Bitcoin;
