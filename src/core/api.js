import { baseURL } from "./config";
import { Request } from "./request";

export const getURL = (url) => {
  return `${baseURL}${url}`;
};

const get_cover_letter = (type = null) => {
  return Request.get(getURL(`/api/v1/content/cover-letter/`), {
    type,
  });
};

const get_languages = (type = null) => {
  return Request.get(getURL(`/api/v1/content/languages/`), {
    type,
  });
};

const get_links = (type = null) => {
  return Request.get(getURL(`/api/v1/content/links/`), {
    type,
  });
};

const get_profile_image = (type = null) => {
  return Request.get(getURL(`/api/v1/content/profile-image/`), {
    type,
  });
};

const get_profile = (type = null) => {
  return Request.get(getURL(`/api/v1/content/profile/`), {
    type,
  });
};

const get_resume_file = (type = null) => {
  return Request.get(getURL(`/api/v1/content/resume-file/`), {
    type,
  });
};

const get_sections = (type = null) => {
  return Request.get(getURL(`/api/v1/content/sections/`), {
    type,
  });
};

const get_site_setting = (type = null) => {
  return Request.get(getURL(`/api/v1/content/site-setting/`), {
    type,
  });
};

export const API = {
  get: {
    cover_letter: get_cover_letter,
    languages: get_languages,
    links: get_links,
    profile_image: get_profile_image,
    profile: get_profile,
    resume_file: get_resume_file,
    sections: get_sections,
    site_setting: get_site_setting,
  },
};
