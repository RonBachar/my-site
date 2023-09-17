import React from "react";
import WorkItem from "../components/WorkItem";

const data = [
  {
    year: "2022",
    title: "Full time freelancer",
    duration: "2 years",
    details:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
  {
    year: "2017",
    title: "Forex Team Lead",
    duration: "3 years",
    details:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
  {
    year: "2015",
    title: "Marketing Manager",
    duration: "2 years",
    details:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
  },
];

const Work = () => {
  return (
    <div
      id="work"
      className="w-full h-screen py-10 bg-white flex flex-col justify-center  m-auto md:pl-20 p-4 py-16 "
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-5">
        Work
      </h1>

      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
