import React from "react";
import useVisibility from "../hooks/useVisibility";
import { useTranslation } from "react-i18next";

import Button from "../components/Button";

import { positionOpenings } from "../constants";
import styles from "../style";

const Careers = () => {
  const [ref, isVisible] = useVisibility();
  const { t } = useTranslation();

  return (
    <section
      ref={ref}
      className={`flex md:flex-row flex-col ${styles.paddingY} ${
        isVisible ? "animate-fadeLeft" : "animate-fadeOut"
      }`}
    >
      <div className={`${styles.flexCenter} `}>
        <div className="grid grid-cols-1 gap-10 pt-8">
          {positionOpenings.map(
            ({ id, position, location, description, link }) => (
              <div
                key={id}
                className={`visible-gradient-card rounded-lg flex-col flex justify-start items-start p-8 text-start w-[75%] animate-fadeIn`}
              >
                <h1 className="text-2xl text-gradient">{t(position)}</h1>
                <h2 className="text-md text-dimWhite pb-2">{t(location)}</h2>
                <p className="pt-2 text-lg text-white">{t(description)}</p>
                <div className="w-full flex flex-col justify-end items-start">
                  <Button
                    styles="mt-5 py-1.5"
                    text={t("button.careers")}
                    link={link}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Careers;
