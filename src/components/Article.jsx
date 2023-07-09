import React from "react";
import useVisibility from "../hooks/useVisibility";

const Article = React.memo(({ name, title, subtitle, children }) => {
  //const [ref, isVisible] = useVisibility();

  return (
    <div name={name} className={`mx-auto h-fit`}>
      <div className="my-32 mx-8 text-center lg:text-left">
        <h1 className="text-5xl text-white">{title}</h1>
        <p className="mt-8 mb-16 text-dimWhite">{subtitle}</p>

        {children}
      </div>
    </div>
  );
});

export default Article;
