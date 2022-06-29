import React, { useState, useEffect, useContext } from "react";

import { API, getURL } from "../core/api";

import { SettingsContext } from "../context/SettingsContext";
import { ResumeSection } from "./ResumeSection";

export const Resume = () => {
  const stg = useContext(SettingsContext);
  const [profile_image, set_profile_image] = useState({});
  const [profile, set_profile] = useState({});
  const [cover_letter, set_cover_letter] = useState({});
  const [links, set_links] = useState([]);
  const [sections, set_sections] = useState([]);
  const [languages, set_languages] = useState([]);

  const getProfileImage = () => {
    API.get
      .profile_image("resume")
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
      .profile("resume")
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
      .cover_letter("resume")
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
      .links("resume")
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
      .sections("resume")
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

  const getLanguages = () => {
    API.get
      .languages("resume")
      .then((response) => {
        if (response.success) {
          set_languages(response.data);
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
    getLanguages();
  }, []);

  return (
    <div className="hidden print:block">
      <div className="flex flex-row flex-wrap items-start justify-between">
        <div className="flex flex-row flex-wrap items-start justify-start">
          <div
            className={`w-[120px] h-[120px] min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] bg-${stg.resume_color}-500 border-4 border-${stg.resume_color}-500 rounded-full overflow-hidden flex flex-col justify-center`}>
            <img
              className="w-[120px] h-[120px] min-w-[120px] min-h-[120px] max-w-[120px] max-h-[120px] object-cover"
              alt=" "
              src={getURL(profile_image?.url)}
            />
          </div>
          <div className="ml-6 mt-3">
            <div className="text-3xl font-extrabold">{profile?.first_name}</div>
            <div className="text-3xl font-extrabold">{profile?.last_name}</div>
            <div className="text-xl font-bold mt-1">{cover_letter?.title}</div>
          </div>
        </div>
        <div className="text-right text-sm mt-3">
          {links?.map((item) => (
            <div>
              <a
                className={`text-${stg.resume_color}-700 font-bold`}
                href={item.url}>
                {item.title}
              </a>
              <i className={`${item.icon} ml-2 text-${stg.resume_color}-700`} />
            </div>
          ))}
          {profile?.birthday ? (
            <div>
              <span className={`text-${stg.resume_color}-700 font-bold`}>
                {profile?.birthday}
              </span>
              <i
                className={`fas fa-calendar ml-2 text-${stg.resume_color}-700`}
              />
            </div>
          ) : null}
          {profile?.nationality ? (
            <div>
              <span className={`text-${stg.resume_color}-700 font-bold`}>
                {profile?.nationality}
              </span>
              <i className={`fas fa-flag ml-2 text-${stg.resume_color}-700`} />
            </div>
          ) : null}
        </div>
      </div>
      <div className="border-b-2 my-4 border-black"></div>
      {cover_letter?.description?.length > 0 ? (
        <>
          <div>
            {cover_letter?.description?.map((line) => (
              <p>{line}</p>
            ))}
          </div>
          <div className="border-b-2 my-4 border-black"></div>
        </>
      ) : null}
      {sections?.map((section) => (
        <ResumeSection
          title={section.title}
          icon={section.icon}
          items={section.items}
        />
      ))}
      <div className="py-1.5">
        <div className="text-xl font-black pb-1">
          <i className="fas fa-language mr-3 text-[20px] select-none" />
          Languages
        </div>
        <div className="flex flex-row">
          {languages?.map((item) => (
            <div className="mr-16">
              <div
                className={`text-lg font-extrabold text-${stg.resume_color}-700`}>
                {item.title}
              </div>
              <div>{item.level}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
