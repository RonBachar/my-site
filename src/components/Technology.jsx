import React from "react";
import {
  DiJavascript,
  DiCss3,
  DiMongodb,
  DiReact,
  DiAngularSimple,
  DiSass,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoNodejs,
} from "react-icons/bi";
import { SiExpress } from "react-icons/si";

const Technology = () => {
  return (
    <div className="flex flex-col max-w-[1040px] m-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-10">Technologies</h1>

      <div className="max-w-[1040px] m-auto  grid grid-cols-2 md:grid-cols-4 gap-10 ">
        <DiJavascript
          size="150"
          className="text-gray-215"
          style={{ fill: "#FDE047" }}
        />
        <DiCss3
          size="150"
          className="text-gray-178"
          style={{ fill: "#0072ea" }}
        />
        <DiMongodb
          size="150"
          className="text-gray-342"
          style={{ fill: "#65A30D" }}
        />
        <BiLogoTypescript
          size="150"
          className="text-gray-123"
          style={{ fill: "#1E40AF" }}
        />
        <DiReact
          size="150"
          className="text-gray-312"
          style={{ fill: "#22D3EE" }}
        />
        <DiAngularSimple
          size="150"
          className="text-gray-256"
          style={{ fill: "#B91C1C" }}
        />
        <DiSass
          size="150"
          className="text-gray-198"
          style={{ fill: "#F472B6" }}
        />
        <DiGit
          size="150"
          className="text-gray-375"
          style={{ fill: "#EF4444" }}
        />
        <DiGithubBadge
          size="150"
          className="text-gray-149"
          style={{ fill: "#101010" }}
        />
        <BiLogoTailwindCss
          size="150"
          className="text-gray-326"
          style={{ fill: "#38BDF8" }}
        />
        <SiExpress
          size="150"
          className="text-gray-189"
          style={{ fill: "#71717A" }}
        />
        <BiLogoNodejs size="150" className="text-gray-267" />
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default Technology;
