import React from "react";

import { Section } from "./Section";
import { DetailedItem } from "./DetailedItem";
import { TransformText } from "./TransformText";

export const Experiences = () => {
  return (
    <Section id="experiences">
      <div className="text-3xl font-extrabold pb-3">
        <TransformText>Experiences</TransformText>
      </div>
      <div>
        <DetailedItem
          title="Technical Manager"
          association="Toofan Kavir Company"
          location="Kerman, Iran"
          from="Since Jun 2019"
          desc={[
            "Technical Manager of the testing laboratory of Hydrostatic seamless and welded steel cylinders.",
          ]}
        />
        <DetailedItem
          title="Inspector"
          association="Toofan Kavir Company"
          location="Kerman, Iran"
          from="Since Jun 2019"
          desc={["Periodic Inspector of CNG vehicles."]}
        />
      </div>
    </Section>
  );
};
