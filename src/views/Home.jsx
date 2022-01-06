import React, { useState, useEffect, useContext } from "react";

import { getID } from "../core/utils";
import { API } from "../core/api";

import { SettingsContext } from "../context/SettingsContext";

import { useLoader } from "../hooks/useLoader";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { CoverLetter } from "../components/CoverLetter";
import { Section } from "../components/Section";
import { Footer } from "../components/Footer";
import { Resume } from "../components/Resume";

export const Home = () => {
  const site_setting = useContext(SettingsContext);
  const [Loader, is_loaded, set_loader_value] = useLoader(100);
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
          set_loader_value(20);
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
          set_loader_value(20);
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
          set_loader_value(20);
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
          set_loader_value(20);
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
          set_loader_value(10);
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
    set_loader_value(20, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Loader is_loaded={is_loaded} />
      <div
        className={`min-h-screen print:hidden overflow-x-hidden ${
          is_loaded ? "" : "hidden"
        }`}>
        <Header items={sections} />
        <Hero
          image={profile_image?.url}
          first_name={profile?.first_name}
          last_name={profile?.last_name}
          title={cover_letter?.title}
          links={links}
        />
        <div id="content" className="md:w-8/12 m-auto md:px-0 px-5">
          {cover_letter?.description?.length > 0 ? (
            <CoverLetter description={cover_letter?.description} />
          ) : null}
          <div className="py-10">
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
      </div>
      <Resume />
    </>
  );
};
