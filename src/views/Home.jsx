import React, { useState, useEffect, useContext } from "react";

import { getID } from "../core/utils";
import { API } from "../core/api";

import { SettingsContext } from "../context/SettingsContext";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import { Footer } from "../components/Footer";
import { Resume } from "../components/Resume";

export const Home = () => {
  const site_setting = useContext(SettingsContext);
  const [profile_image, set_profile_image] = useState({});
  const [profile, set_profile] = useState({});
  const [cover_letter, set_cover_letter] = useState({});
  const [links, set_links] = useState([]);
  const [sections, set_sections] = useState([]);

  const getProfileImage = () => {
    API.get
      .profile_image()
      .then((response) => {
        if (response.success) {
          set_profile_image(response.data);
        } else {
          console.log(response.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getProfile = () => {
    API.get
      .profile()
      .then((response) => {
        if (response.success) {
          set_profile(response.data);
        } else {
          console.log(response.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getCoverLetter = () => {
    API.get
      .cover_letter()
      .then((response) => {
        if (response.success) {
          set_cover_letter(response.data);
        } else {
          console.log(response.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getLinks = () => {
    API.get
      .links()
      .then((response) => {
        if (response.success) {
          set_links(response.data);
        } else {
          console.log(response.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getSections = () => {
    API.get
      .sections()
      .then((response) => {
        if (response.success) {
          set_sections(response.data);
        } else {
          console.log(response.message);
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getProfileImage();
    getProfile();
    getCoverLetter();
    getLinks();
    getSections();
  }, []);

  return (
    <>
      <div className="min-h-screen md:w-8/12 m-auto md:px-0 px-5 print:hidden">
        <Header items={sections} />
        <div className="py-10">
          <Hero
            image={profile_image?.url}
            first_name={profile?.first_name}
            last_name={profile?.last_name}
            title={cover_letter?.title}
            links={links}
          />
          {sections?.map((section) => (
            <Section
              id={getID(section.title)}
              title={section.title}
              icon={section.icon}
              items={section.items}
            />
          ))}
        </div>
        <Footer>{site_setting?.footer}</Footer>
      </div>
      <Resume />
    </>
  );
};
