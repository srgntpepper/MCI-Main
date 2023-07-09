import React from "react";
import { useTranslation } from "react-i18next";

const ToS = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-gradient text-center">
        {t("terms.title")}
      </h1>
      <div className="prose prose-lg max-w-none md:prose-xl lg:max-w-3xl mx-auto text-white">
        <span className="text-gradient">
          {t("terms.term_one")}
          <br />
        </span>
        {t("terms.paragraph_one")}
        <br />
        <br />
        <span className="text-gradient">
          {t("terms.term_two")}
          <br />
        </span>{" "}
        {t("terms.paragraph_two")}
        <br />
        <br />
        <span className="text-gradient">
          {t("terms.term_three")}
          <br />
        </span>{" "}
        {t("terms.paragraph_three")}
        <br />
        <br />
        <span className="text-gradient">
          {t("terms.term_four")}
          <br />
        </span>{" "}
        {t("terms.paragraph_four")}
        <br />
        <br />
        <span className="text-gradient">
          {t("terms.term_five")}
          <br />
        </span>{" "}
        {t("terms.paragraph_five")}
      </div>
    </div>
  );
};

export default ToS;
