import React from "react";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Education } from "../components/Education";
import { Experiences } from "../components/Experiences";
import { Achievements } from "../components/Achievements";
import { Skills } from "../components/Skills";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen md:w-8/12 m-auto md:px-0 px-5">
      <Header />
      <div className="py-10">
        <Hero />
        <Education />
        <Experiences />
        <Achievements
          items={[
            "Ranked Top 3% of national university entrance exam",
            "Rank top 10 in the festival of student publications",
            "Third place of national Mechanical Engineering competition at the University of Babol, Iran",
            "Certificate of Estimation Measurement Uncertainty from general administration",
            "National Standard certificate from national standard organization of Iran (INSO)",
            "Certificate of Inter-laboratory comparison training course",
          ]}
        />
        <Skills />
      </div>
      <Footer />
    </div>
  );
};
