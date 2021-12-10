import React from "react";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { Footer } from "../components/Footer";
import { Resume } from "../components/Resume";

export const Home = () => {
  const data = {
    content: {
      footer: "copyright 2021 | Fatemeh Amirhosseini",
    },
    profile: {
      image:
        "https://i.pinimg.com/564x/c3/16/f5/c316f50fde0701e61294030f4a46b17c.jpg",
      first_name: "Fatemeh",
      last_name: "Amirhosseini",
      title: "Mechanical Engineer",
      birthday: "11/22/1994",
      nationality: "Persian, Iranian",
      cover: [
        "this my new cover letter in multiple lines, i have done this and that, been there and those places too.",
        "i'm self-learner, motivated with a lot of different beautiful things in inside, a great hear, the best brain.",
      ],
      links: [
        {
          icon: "fas fa-at",
          href: "mailto:Fa.amirhoseini7@gmail.com",
          title: "Email",
        },
        {
          icon: "fas fa-phone",
          href: "tel:+989135027900",
          title: "Phone",
        },
        {
          icon: "fab fa-linkedin-in",
          href: "https://www.linkedin.com/in/melika-amirhoseini-a116361b7/",
          title: "LinkedIn",
        },
        {
          icon: "fab fa-twitter",
          href: "https://twitter.com/mkamirhosseini",
          title: "Twitter",
        },
      ],
      languages: [
        {
          title: "English",
          level: "Advanced",
        },
        {
          title: "Italian",
          level: "A2 (CEFR)",
        },
        {
          title: "German",
          level: "A2 (CEFR)",
        },
      ],
    },
    education: [
      {
        title: "Bachelor of Mechanical Engineering",
        association: "Shahid Bahonar",
        location: "Kerman, Iran",
        from: "From Sep 2012",
        to: "To Sep 2020",
      },
      {
        title: "Math and Physic",
        association: "Farzanegan High School",
        location: "Kerman, Iran",
        from: "From Sep 2009",
        to: "To Jun 2012",
      },
    ],
    experiences: [
      {
        title: "Technical Manager",
        association: "Toofan Kavir Company",
        location: "Kerman, Iran",
        from: "Since Jun 2019",
        desc: [
          "Technical Manager of the testing laboratory of Hydrostatic seamless and welded steel cylinders.",
        ],
      },
      {
        title: "Inspector",
        association: "Toofan Kavir Company",
        location: "Kerman, Iran",
        from: "Since Jun 2019",
        desc: ["Periodic Inspector of CNG vehicles."],
      },
    ],
    achievements: [
      {
        title: "Ranked Top 3%",
        association: "National University Entrance Exam",
      },
      {
        title: "Ranked Top 10",
        association: "Festival of Student Publications",
      },
      {
        title: "3rd Place",
        association: "National Mechanical Engineering competition",
        location: "University of Babol, Iran",
      },
      {
        title: "Certificate of Estimation Measurement Uncertainty",
        association: "General Administration",
      },
      {
        title: "Certificate of National Standard",
        association: "National standard Organization",
        location: "INSO, Iran",
      },
      {
        title: "Certificate of Inter-Laboratory Comparison",
        association: "Training Course",
      },
    ],
    skills: [
      {
        title: "Python Programming",
        desc: [
          "Good knowledge of python programming and working with Numpy and Pytorch and other data science libraries.",
        ],
      },
      {
        title: "SolidWorks Software",
        desc: ["Designing Conveyor and gear."],
      },
      {
        title: "Matlab",
        desc: [
          "Smith-Dolan model for regression models and other topics as well.",
        ],
      },
    ],
  };

  return (
    <>
      <div className="min-h-screen md:w-8/12 m-auto md:px-0 px-5 print:hidden">
        <Header />
        <div className="py-10">
          <Hero {...data?.profile} />
          <Section
            id="education"
            name="Education"
            icon="fas fa-graduation-cap"
            items={data?.education}
          />
          <Section
            id="experiences"
            name="Experiences"
            icon="fas fa-briefcase"
            items={data?.experiences}
          />
          <Section
            id="achievements"
            name="Achievements"
            icon="fas fa-award"
            items={data?.achievements}
          />
          <Section
            id="skills"
            name="Skills"
            icon="fas fa-tools"
            items={data?.skills}
          />
        </div>
        <Footer>{data?.content?.footer}</Footer>
      </div>
      <Resume data={data} />
    </>
  );
};
