import React, { useEffect, useState } from "react";
import useVisibility from "../hooks/useVisibility";
import axios from "axios";
import { useTranslation } from "react-i18next";

import { stats } from "../constants";
import styles from "../style";

const apiKey = import.meta.env.VITE_APP_COINSTATS_API_KEY;

const Stats = () => {
  const [ref, isVisible] = useVisibility();
  const [bitcoinPrice, setBitcoinPrice] = useState("0");
  const { t } = useTranslation();

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get(
          "https://openapiv1.coinstats.app/coins/bitcoin",
          {
            headers: {
              "X-API-KEY": apiKey,
              accept: "application/json",
            },
          }
        );

        setBitcoinPrice(response.data.price);
        //console.log(response);
      } catch (error) {
        console.error("Error fetching Bitcoin price:", error);
      }
    };

    fetchBitcoinPrice();
  }, []);

  function nFormatter(num) {
    if (num > 999.99999 && num < 1000000) {
      return Math.sign(num) * (Math.abs(num) / 1000).toFixed(2) + "K";
    } else if (num > 1000000 && num < 1000000) {
      return Math.sign(num) * (Math.abs(num) / 1000000).toFixed(2) + "M";
    } else {
      return num;
    }
  }

  return (
    <section
      ref={ref}
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 ${
        isVisible ? "animate-fadeUp" : "animate-fadeOut"
      }`}
    >
      <div className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {`$${nFormatter(bitcoinPrice)}`}
        </h4>
        <p>🔴</p>
        <p className="font-poppins font-normal xs:text-[18px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {t("live_bitcoin_price")}
        </p>
      </div>
      {stats.map((stat) => (
        <div
          className={`flex-1 flex justify-start items-center flex-row m-3`}
          key={stat.id}
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {t(stat.value)}
          </h4>
          <p className="font-poppins font-normal xs:text-[18px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {t(stat.title)}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
