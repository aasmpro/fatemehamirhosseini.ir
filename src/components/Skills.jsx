import React from "react";

import { Section } from "./Section";
import { DetailedItem } from "./DetailedItem";
import { TransformText } from "./TransformText";

export const Skills = () => {
  return (
    <Section id="skills">
      <div className="text-3xl font-extrabold pb-3">
        <TransformText>Skills</TransformText>
      </div>
      <div>
        <DetailedItem
          title="Python programming"
          desc={[
            "Good knowledge of python programming and working with Numpy and Pytorch and other data science libraries.",
          ]}
        />
        <DetailedItem
          title="SolidWorks Software"
          desc={["Designing Conveyor and gear."]}
        />
        <DetailedItem
          title="Matlab"
          desc={[
            "Smith-Dolan model for regression models and other topics as well.",
          ]}
        />
      </div>
    </Section>
  );
};
