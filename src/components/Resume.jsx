import React from "react";

import { ResumeSection } from "./ResumeSection";

export const Resume = ({ data }) => {
  return (
    <div className="hidden print:block">
      <div className="flex flex-row flex-wrap items-start justify-between">
        <div className="flex flex-row flex-wrap items-start justify-start">
          <div className="w-[140px] h-[140px] min-w-[140px] min-h-[140px] max-w-[140px] max-h-[140px] bg-emerald-500 border-4 border-emerald-500 rounded-full overflow-hidden flex flex-col justify-center">
            <img
              className="w-[140px] h-[140px] min-w-[140px] min-h-[140px] max-w-[140px] max-h-[140px] object-cover"
              alt="ProfileImage"
              src={data?.profile.image}
            />
          </div>
          <div className="ml-6 mt-3">
            <div className="text-3xl font-extrabold">
              {data?.profile.first_name}
            </div>
            <div className="text-3xl font-extrabold">
              {data?.profile.last_name}
            </div>
            <div className="text-xl font-bold mt-1">{data?.profile.title}</div>
          </div>
        </div>
        <div className="text-right text-sm mt-3">
          {data?.profile.links?.map((item) => (
            <div>
              <a className="text-emerald-700 font-bold" href={item.href}>
                {item.title}
              </a>
              <i className={`${item.icon} ml-2 text-emerald-700`} />
            </div>
          ))}
          {data?.profile?.birthday ? (
            <div>
              <span className="text-emerald-700 font-bold">
                {data?.profile?.birthday}
              </span>
              <i className={`fas fa-calendar ml-2 text-emerald-700`} />
            </div>
          ) : null}
          {data?.profile?.nationality ? (
            <div>
              <span className="text-emerald-700 font-bold">
                {data?.profile?.nationality}
              </span>
              <i className={`fas fa-flag ml-2 text-emerald-700`} />
            </div>
          ) : null}
        </div>
      </div>
      <div className="border-b-2 my-5 border-black"></div>
      <ResumeSection
        name="Education"
        icon="fas fa-graduation-cap"
        items={data?.education}
      />
      <ResumeSection
        name="Experiences"
        icon="fas fa-briefcase"
        items={data?.experiences}
      />
      <ResumeSection
        name="Achievements"
        icon="fas fa-award"
        items={data?.achievements}
      />
      <ResumeSection name="Skills" icon="fas fa-tools" items={data?.skills} />
      <div className="py-3">
        <div className="text-2xl font-extrabold pb-2">
          <i className="fas fa-language mr-3 text-[22px] select-none" />
          Languages
        </div>
        <div className="flex flex-row">
          {data?.profile.languages?.map((item) => (
            <div className="mr-16">
              <div className="text-lg font-extrabold text-emerald-700">
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
