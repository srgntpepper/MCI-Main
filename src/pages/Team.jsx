import styles from "../style";
import { team } from "../constants";

import React from "react";
import useVisibility from "../hooks/useVisibility";

const Team = () => {
  const [ref, isVisible] = useVisibility();
  return (
    <section
      ref={ref}
      className={`flex w-full md:flex-row flex-col ${styles.paddingY} justify-center items-center`}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 text-makerGold pt-8 justify-items-center">
        {team.map(({ id, name, title, portrait }) => (
          <div
            key={id}
            className={`feature-card rounded-lg flex-col items-center p-8 text-center ${
              isVisible ? "animate-fadeIn" : "animate-fadeOut"
            }`}
          >
            <div>
              <img
                src={portrait}
                loading="lazy"
                className="w-full object-cover h-64 md:h-72 rounded-lg"
                alt={`Portrait of ${name}`}
              />
            </div>
            <h1 className="pt-10 text-lg text-makerGold">{name}</h1>
            <h1 className="text-lg text-dimWhite">{title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
