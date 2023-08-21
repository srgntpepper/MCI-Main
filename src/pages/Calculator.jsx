import React, { useState } from "react";
import useVisibility from "../hooks/useVisibility";
import { useTranslation } from "react-i18next";

import { piggybankT } from "../assets";

const Calculator = () => {
  const [ref, isVisible] = useVisibility();

  const [hashRate, setHashRate] = useState(0);
  const [powerConsumption, setPowerConsumption] = useState(0);
  const [costPerKwh, setCostPerKwh] = useState(0);
  const [btcPrice, setBtcPrice] = useState(0);
  const [result, setResult] = useState(null);

  const { t } = useTranslation();

  const calculate = () => {
    const dailyRevenue = (hashRate * btcPrice * 86400) / Math.pow(2, 32);
    const dailyPowerCost = (powerConsumption * costPerKwh) / 1000;
    const dailyProfit = dailyRevenue - dailyPowerCost;
    setResult({ dailyRevenue, dailyPowerCost, dailyProfit });
  };

  return (
    <section
      ref={ref}
      className={`flex flex-col justify-center w-full md:h-[65vh] ${
        isVisible ? "animate-endFadeUp" : "animate-fadeOut"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex w-full sm:w-1/2">
          <img
            src={piggybankT}
            className="w-full h-auto p-14 sm:p-16 md:p-28 justify-center object-contain"
            alt="piggy bank with bitcoin showering onto it - for Bitcoin calculator"
          ></img>
        </div>
        <div className="flex flex-col w-full sm:w-1/2 bg-black-gradient-2 box-shadow rounded-xl justify-start mt-9">
          <h1 className="text-center text-gradient tracking-widest text-4xl font-bold my-10 py-4">
            {t("calculator.title")}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className="mx-6 my-4 flex flex-col">
              <label className="text-white text-lg pb-2">
                {t("calculator.hash")}
              </label>
              <input
                type="number"
                placeholder={t("calculator.hash")}
                value={hashRate}
                onChange={(e) => setHashRate(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mx-6 my-4 flex flex-col">
              <label className="text-white text-lg pb-2">
                {t("calculator.power")}
              </label>
              <input
                type="number"
                placeholder={t("calculator.power")}
                value={powerConsumption}
                onChange={(e) => setPowerConsumption(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mx-6 my-4 flex flex-col">
              <label className="text-white text-lg pb-2">
                {t("calculator.kWh")}
              </label>
              <input
                type="number"
                placeholder={t("calculator.kWh")}
                value={costPerKwh}
                onChange={(e) => setCostPerKwh(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mx-6 my-4 flex flex-col">
              <label className="text-white text-lg pb-2">
                {t("calculator.price")}
              </label>
              <input
                type="number"
                placeholder={t("calculator.price")}
                value={btcPrice}
                onChange={(e) => setBtcPrice(e.target.value)}
                className="p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <div className="grid-cols-none w-full flex justify-center py-6">
            <button
              onClick={calculate}
              className="mt-4 px-6 py-4 bg text-secondary rounded font-extrabold bg-gold-gradient tracking-widest w-1/2 transition ease-in-out hover:scale-105 duration-500 origin-center antialiased"
            >
              {t("button.calculator")}
            </button>
          </div>
          {result && (
            <div className="flex flex-col sm:flex-row items-center sm:justify-between mt-8 mx-6 text-white animate-fadeIn">
              <div>
                {t("calculator.results.revenue")}{" "}
                <span className="text-makerGold">
                  ${result.dailyRevenue.toFixed(2)}
                </span>
              </div>
              <div>
                {t("calculator.results.cost")}{" "}
                <span className="text-makerGold">
                  ${result.dailyPowerCost.toFixed(2)}
                </span>
              </div>
              <div>
                {t("calculator.results.profit")}
                <span className="text-makerGold">
                  {" "}
                  ${result.dailyProfit.toFixed(2)}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Calculator;
