import React from "react";

import { Section } from "./Section";
import { TransformText } from "./TransformText";

export const Achievements = ({ items }) => {
  return (
    <Section id="achievements">
      <div className="text-3xl font-extrabold pb-3">
        <TransformText>Achievements</TransformText>
      </div>
      <div className="sm:text-lg">
        <ul className="list-disc pl-5 pt-2">
          {items?.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
