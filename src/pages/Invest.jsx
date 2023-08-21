import React, { useEffect } from "react";
import useVisibility from "../hooks/useVisibility";
import { useTranslation } from "react-i18next";

import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { Footer } from "../components";
import { Contact } from "../components/Contact";
import { investhero } from "../assets";
import { subHeroHeaders } from "../constants";
import styles, { layout } from "../style";

const Invest = () => {
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
            className={`relative z-20 flex items-center justify-center w-full h-[85vh] flex-col md:flex-row ${styles.paddingY}`}
          >
            <img
              src={investhero}
              className="absolute object-cover h-[85vh] w-full opacity-25 -z-10"
              alt="Background image for Investment page - contract worker analyzing blueprints"
            />
            <div
              className={`${styles.paddingX} w-full flex justify-between space-y-8 items-center h-[85vh]`}
            >
              <div className={`${styles.boxWidth} h-full`}>
                <section
                  id="features"
                  className={`${layout.section} items-center  h-full`}
                >
                  <div className={`${layout.sectionInfo}`}>
                    <h2
                      ref={ref}
                      className={`font-poppins font-semibold text-[30px] sm:text-[38px] md:text-[48px] text-white ss:leading-[72.6px] leading-[40px] w-full h-auto xs:h-full ${
                        isVisible ? "animate-fadeLeft" : "animate-fadeOut"
                      }`}
                    >
                      {t(subHeroHeaders[2].firstHalf)}
                      <br className="sm:block hidden" />
                      <span className="text-gradient">
                        {t(subHeroHeaders[2].featuredWords)}
                      </span>
                      <br /> {t(subHeroHeaders[2].secondHalf)}
                    </h2>
                    <div
                      ref={ref}
                      className={`flex-col ${styles.flexCenter} ${
                        styles.paragraph
                      } py-5 xs:py-10 ${
                        isVisible ? "animate-fadeIn" : "animate-fadeOut"
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
                        <a
                          href=""
                          className="w-full inline-flex space-x-2 items-center"
                        >
                          <HiOutlineLocationMarker
                            size="20px"
                            alt="location"
                            className="mr-3"
                          />
                          {/* 2675 S Jones Blvd #206, Las Vegas, NV 89146 */}4
                          Park Plaza STE 1230 Irvine, CA 92614
                        </a>
                      </div>
                      <div
                        className={`sm:flex justify-start items-start space-x-4 w-full py-10 hidden`}
                      >
                        <a
                          href="https://www.linkedin.com/company/makerstar-capital-inc/about/?viewAsMember=true"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaLinkedin
                            className="hover:fill-linkedinBlue"
                            size="27px"
                            alt="LinkedIn"
                          />
                        </a>
                        {/* <a href="#">
                          <FaFacebookSquare
                            className="hover:fill-facebookBlue"
                            size="27px"
                            alt="Facebook"
                          />
                        </a>
                        <a href="#">
                          <FaTwitter
                            className="hover:fill-twitterBlue"
                            size="27px"
                            alt="Twitter"
                          />
                        </a>
                        <a href="#">
                          <FaInstagram
                            className="hover:fill-instagramBlue"
                            size="27px"
                            alt="Instagram"
                          />
                        </a> */}
                      </div>
                    </div>
                  </div>
                  <Contact />
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

export default Invest;
