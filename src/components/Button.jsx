import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ styles, text, link }) => {
  const isExternal = link.startsWith("http");

  const navigate = useNavigate();
  const navigateToPage = () => {
    navigate(link);
  };

  const commonProps = {
    className: `py-4 px-6 bg-gold-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`,
  };

  const externalProps = {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
  };

  const internalProps = {
    href: link,
  };

  return isExternal ? (
    <a {...commonProps} {...externalProps}>
      {text}
    </a>
  ) : (
    <a {...commonProps} {...internalProps}>
      {text}
    </a>
  );
};

export default Button;
