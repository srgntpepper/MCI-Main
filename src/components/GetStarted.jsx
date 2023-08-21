import React from "react";
import { useTranslation } from "react-i18next";

import styles from "../style";
import { useNavigate } from "react-router-dom";
import { HiArrowUp } from "react-icons/hi";

const GetStarted = ({ link }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const navigateToPage = () => {
    navigate(link);
  };

  return (
    <div
      onClick={navigateToPage}
      className={`${styles.flexCenter} w-36 h-36 rounded-full bg-gold-gradient p-1 cursor-pointer`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row items-center`}>
          <p className="font-poppins font-medium text-lg leading-snug mr-1">
            <span className="text-gradient">
              {t("get_started_component.get")}
            </span>
          </p>
          <HiArrowUp size={20} className="text-makerGold" />
        </div>
        <p className="font-poppins font-medium text-lg leading-snug">
          <span className="text-gradient">
            {t("get_started_component.started")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
