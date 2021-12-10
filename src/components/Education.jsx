import React from "react";

import { Section } from "./Section";
import { DetailedItem } from "./DetailedItem";
import { TransformText } from "./TransformText";

export const Education = () => {
  return (
    <Section id="education">
      <div className="text-3xl font-extrabold pb-3">
        <TransformText>Education</TransformText>
      </div>
      <div>
        <DetailedItem
          title="Bachelor of Mechanical Engineering"
          association="Shahid Bahonar"
          location="Kerman, Iran"
          from="From Sep 2012"
          to="To Sep 2020"
        />
        <DetailedItem
          title="Math and Physic"
          association="Farzanegan High School"
          location="Kerman, Iran"
          from="From Sep 2009"
          to="To Jun 2012"
        />
      </div>
    </Section>
  );
};
