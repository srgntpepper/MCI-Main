import React, { useEffect } from "react";
import useVisibility from "../hooks/useVisibility";
import { useTranslation } from "react-i18next";

import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { Footer } from "../components";
import { JobApplication } from "../components/JobApplication";
import { careershero } from "../assets";
import { subHeroHeaders } from "../constants";
import styles, { layout } from "../style";

const Careers = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [ref, isVisible] = useVisibility();
  const { t } = useTranslation();
  return (
    <>
      <div className={`relative bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <section
            className={`relative z-20 flex items-center justify-center w-full h-[95vh] flex-col md:flex-row ${styles.paddingY}`}
          >
            <img
              src={careershero}
              className="absolute object-cover h-[95vh] w-full opacity-25 -z-10"
              alt="Background image for Investment page - contract worker analyzing blueprints"
            />
            <div
              className={`${styles.paddingX} w-full flex justify-between space-y-8 items-center h-[85vh]`}
            >
              <div className={`${styles.boxWidth} h-full`}>
                <section
                  id="features"
                  className={`flex md:flex-row-reverse flex-col ${styles.paddingY} items-center  h-full`}
                >
                  <div className={`${layout.sectionInfoReverse}`}>
                    <h2
                      ref={ref}
                      className={`font-poppins font-semibold text-[30px] sm:text-[38px] md:text-[48px] text-white ss:leading-[72.6px] leading-[40px] w-full h-auto xs:h-full text-center ${
                        isVisible ? "animate-fadeRight" : "animate-fadeOut"
                      }`}
                    >
                      {t(subHeroHeaders[3].firstHalf)}
                      <br className="sm:block hidden" />
                      <span className="text-gradient">
                        {t(subHeroHeaders[3].featuredWords)}
                      </span>
                      <br /> {t(subHeroHeaders[3].secondHalf)}
                    </h2>
                    <div
                      ref={ref}
                      className={`flex-col ${styles.flexCenter} ${
                        styles.paragraph
                      } py-5 xs:py-10 ${
                        isVisible ? "animate-fadeRight" : "animate-fadeOut"
                      }`}
                    >
                      <div className="flex flex-col space-y-2 xs:space-y-6">
                        <a
                          href="mailto:service@makerstarcapital.com"
                          className="w-full inline-flex space-x-2 items-center"
                        >
                          <HiOutlineMail
                            size="20px"
                            alt="email"
                            className="mr-3"
                          />
                          service@makerstarcapital.com
                        </a>
                      </div>
                    </div>
                  </div>
                  <JobApplication />
                </section>
              </div>
            </div>
          </section>
          <div
            className={`bg-primary ${styles.paddingX} ${styles.flexStart} pt-28 xxs:pt-20 md:pt-0`}
          >
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
