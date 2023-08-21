import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Cookies from "js-cookie";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import { close, menu, logo03T, logo04T, globe, arrowLeft } from "../assets";
import { navLinks, languages } from "../constants";
import styles from "../style";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleLang, setToggleLang] = useState(false);
  const isXsScreenOrMore = useMediaQuery({ minWidth: 352 });

  // Language selection code
  const currentLanguageCode = Cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);
  const { t } = useTranslation();

  // This function is called when the globe is clicked
  const handleLangClick = () => {
    setToggle(true);
    setToggleLang(!toggleLang);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center animate-fadeIn">
      {/* Logo code */}
      {isXsScreenOrMore ? (
        <Link to="/">
          <img
            src={logo03T}
            loading="lazy"
            alt="Makerstar Capital Logo"
            className="w-auto h-[40px] hover:cursor-pointer"
          />
        </Link>
      ) : (
        <Link to="/">
          <img
            src={logo04T}
            loading="lazy"
            alt="Makerstar Capital Logo"
            className="w-auto h-[40px] hover:cursor-pointer"
          />
        </Link>
      )}

      {/* Desktop nav links, including globe icon */}
      <ul className="list-none md:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[14px] tracking-wider duration-300 hover:tracking-widest ${
              styles.linkText
            } ${index == navLinks.length - 1 ? "mr-0" : "mr-8"}`}
          >
            <a href={`${nav.id}`}>{t(nav.title)}</a>
          </li>
        ))}

        {/* Globe icon to open language selector */}
        <img
          src={globe}
          alt="Select Language"
          className="w-[28px] h-[28px] object-contain cursor-pointer ml-4"
          onClick={handleLangClick}
        />
      </ul>

      {/* Desktop sidebar for language selection */}
      <div
        className={`${
          toggleLang ? "translate-x-0" : "translate-x-full"
        } transform transition-transform ease-in-out duration-300 fixed right-0 top-0 h-full w-52 bg-primary z-40 flex flex-col items-end pt-4 px-4 md:block `}
      >
        {toggleLang && (
          <>
            <img
              src={close}
              alt="close"
              className="w-[28px] h-[28px] object-contain cursor-pointer mb-8"
              onClick={handleLangClick}
            />
            <ul className="list-none flex flex-col justify-center items-start pl-4 w-full space-y-4 text-[16px]">
              {languages.map(({ code, name, country_code }) => (
                <li
                  key={country_code}
                  className={`font-poppins font-normal tracking-wider hover:tracking-widest duration-300 ${
                    code === currentLanguageCode
                      ? "text-gray-500"
                      : `${styles.linkText} cursor-pointer`
                  }`}
                >
                  <button
                    onClick={() => {
                      handleLangClick();
                      i18next.changeLanguage(code);
                    }}
                    disabled={code === currentLanguageCode}
                    style={{ background: "none", border: "none" }}
                  >
                    <span
                      className={`fi fi-${country_code} mx-2`}
                      style={{
                        opacity: code === currentLanguageCode ? 0.2 : 1,
                      }}
                    ></span>
                    {name}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>

      {/* Mobile menu */}
      <div className="md:hidden flex flex-1 justify-end items-center relative">
        {!toggle && !toggleLang && (
          <img
            src={menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
        )}
        {/* Main sidebar (mobile) */}
        <div
          className={`${
            toggle && !toggleLang ? "translate-x-0" : "translate-x-full"
          } transform transition-transform ease-in-out duration-300 fixed right-0 top-0 h-full w-52 bg-primary z-40 flex flex-col items-end pt-4 pr-4`}
        >
          {toggle && !toggleLang && (
            <img
              src={close}
              alt="close"
              className="w-[28px] h-[28px] object-contain cursor-pointer mb-8"
              onClick={() => setToggle(!toggle)}
            />
          )}

          <ul className="list-none flex flex-col justify-center items-start pl-4 w-full space-y-4 text-[16px]">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer tracking-wider hover:tracking-widest duration-300 ${styles.linkText}`}
              >
                <Link to={`${nav.id}`} onClick={() => setToggle(false)}>
                  {t(nav.title)}
                </Link>
              </li>
            ))}

            {/* Globe icon inside mobile menu */}
            <li
              className={`font-poppins font-normal cursor-pointer tracking-wider hover:tracking-widest duration-300 ${styles.linkText}`}
            >
              <button
                onClick={handleLangClick}
                style={{ background: "none", border: "none" }}
              >
                <img
                  src={globe}
                  alt="Select Language"
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              </button>
            </li>
          </ul>
        </div>

        {/* Secondary sidebar (mobile) */}
        <div
          className={`${
            toggle && toggleLang ? "translate-x-0" : "translate-x-full"
          } transform transition-transform ease-in-out duration-300 fixed right-0 top-0 h-full w-52 bg-primary z-40 flex flex-col items-end pt-4 pr-4`}
        >
          {toggle && toggleLang && (
            <>
              <img
                src={arrowLeft}
                alt="back"
                className="w-[28px] h-[28px] object-contain cursor-pointer mb-8"
                onClick={() => setToggleLang(!toggleLang)}
              />
              <ul className="list-none flex flex-col justify-center items-start pl-4 w-full space-y-4 text-[16px]">
                {languages.map(({ code, name, country_code }) => (
                  <li
                    key={country_code}
                    className={`font-poppins font-normal tracking-wider hover:tracking-widest duration-300 ${
                      code === currentLanguageCode
                        ? "text-gray-500"
                        : `${styles.linkText} cursor-pointer`
                    }`}
                  >
                    <button
                      onClick={() => {
                        handleLangClick();
                        i18next.changeLanguage(code);
                      }}
                      disabled={code === currentLanguageCode}
                      style={{ background: "none", border: "none" }}
                    >
                      <span
                        className={`fi fi-${country_code} mx-2`}
                        style={{
                          opacity: code === currentLanguageCode ? 0.2 : 1,
                        }}
                      ></span>
                      {name}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
