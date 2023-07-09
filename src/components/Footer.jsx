import React from "react";
import useVisibility from "../hooks/useVisibility";
import { useTranslation } from "react-i18next";

import styles from "../style";
import {
  instagram,
  //logo,
  logo03T,
} from "../assets";
import {
  footerLinks,
  //socialMedia
} from "../constants";

const Footer = () => {
  const [ref, isVisible] = useVisibility();
  const { t } = useTranslation();
  return (
    <section
      ref={ref}
      className={`${styles.flexCenter} ${styles.paddingY} flex-col ${
        isVisible ? "animate-endFadeIn" : "animate-fadeOut"
      }`}
    >
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img
            loading="lazy"
            src={logo03T}
            alt="Makerstar Logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            {t("footer_text.title")}
          </p>
        </div>

        {/* <div className="flex flex-[1.5] w-full flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.id}
            className="flex flex-col items-center ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font=poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  id={link.name}
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-makerGold hover:tracking-wide duration-200 cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={`${link.link}`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
      </div>

      <div
        className={`w-full flex justify-between items-center md:flex-row flex-col pt-1 border-t-[1px] border-t-[#3F3E45] ${
          isVisible ? "animate-endFadeUp" : "opacity-0"
        }`}
      >
        {/* <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
          key={social.id}
          src={social.icon}
          alt={social.id}
          className={`w-[21px] h-[21px] object-contain cursor-pointer ${
            index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
          } `}
          />
          ))}
        </div> */}
        <div className="flex flex-row w-full md:order-1 md:mt-0 mt-6">
          {footerLinks.map((footerLink) => (
            <div key={footerLink.id} className="w-full">
              <ul className="list-none mt-4 flex flex-col sm:flex-row justify-between">
                {footerLink.links.map((link, index) => (
                  <li
                    id={link.name}
                    key={link.name}
                    className={`font-poppins font-normal text-[12px] leading-[24px] text-dimWhite text-center sm:text-left hover:text-makerGold hover:tracking-wide duration-200 cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    <a href={`${link.link}`}>{t(link.name)}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="font-poppins font-normal sm:text-start text-center text-[12px] leading-[24px] text-dimWhite pt-1 w-full">
          {t("footer_text.copyright_one")} &copy;{" "}
          {t("footer_text.copyright_two")}
        </p>
      </div>
    </section>
  );
};

export default Footer;
