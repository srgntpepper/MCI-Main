import React from "react";
import useVisibility from "../hooks/useVisibility";
import { useTranslation } from "react-i18next";

import styles from "../style";
import { jobSites } from "../constants";

const JobSites = () => {
  const [ref, isVisible] = useVisibility();
  const { t } = useTranslation();
  return (
    <section
      ref={ref}
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 text-makerGold pt-8">
        {jobSites.map(({ id, image, location }) => (
          <div
            key={id}
            className={`feature-card rounded-lg flex flex-col items-center p-8 text-center ${
              isVisible ? "animate-fadeIn" : "animate-fadeOut"
            }`}
          >
            <div>
              <img
                src={image}
                loading="lazy"
                className="h-full w-96"
                alt={`Job site in ${location}`}
              />
            </div>
            <h1 className="pt-10 text-lg">{t(location)}</h1>
            {/* {location === "Meridian, MS" && (
              <p className="text-dimWhite">(Under Construction)</p>
            )} */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobSites;
