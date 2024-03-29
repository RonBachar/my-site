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
// import { SiExpress } from "react-icons/si";

const Technology = () => {
  return (
    <div id="technology" className="border-[#001b5e] py-16 m-16 ">
      <h1 className="text-4xl font-bold text-[#001b5e] mb-6 text-center">
        Technologies
      </h1>
      <h2 className="text-1xl font-bold mb-6 text-[#001b5e]  text-center">
        Practiced with the follwing technologies
      </h2>

      <div className="flex  flex-wrap justify-center gap-6 py-16">
        <DiJavascript
          size="75"
          className="text-gray-215"
          style={{ fill: "#FDE047" }}
        />
        <DiCss3
          size="75"
          className="text-gray-178"
          style={{ fill: "#0072ea" }}
        />
        {/* <DiMongodb
          size="75"
          className="text-gray-342"
          style={{ fill: "#65A30D" }}
        /> */}
        <BiLogoTypescript
          size="75"
          className="text-gray-123"
          style={{ fill: "#1E40AF" }}
        />
        <DiReact
          size="75"
          className="text-gray-312"
          style={{ fill: "#22D3EE" }}
        />
        <DiAngularSimple
          size="75"
          className="text-gray-256"
          style={{ fill: "#B91C1C" }}
        />
        <DiSass
          size="75"
          className="text-gray-198"
          style={{ fill: "#F472B6" }}
        />
        <DiGit
          size="75"
          className="text-gray-375"
          style={{ fill: "#EF4444" }}
        />
        <DiGithubBadge
          size="75"
          className="text-gray-149"
          style={{ fill: "#101010" }}
        />
        <BiLogoTailwindCss
          size="75"
          className="text-gray-326"
          style={{ fill: "#38BDF8" }}
        />
        {/* <SiExpress
          size="75"
          className="text-gray-189"
          style={{ fill: "#71717A" }}
        />
        <BiLogoNodejs size="75" className="text-gray-267" /> */}
      </div>
      <hr />
    </div>
  );
};

export default Technology;
