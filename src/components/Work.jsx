import React from "react";
import WorkItem from "../components/WorkItem";

const data = [
  {
    title: "Junior Angular Developer",
    duration: "Jul 2023 - Present",
    details: `
    Developed web applications using Angular, collaborated on project requirements, created interactive web pages for seamless user experiences.
    `,
  },
  {
    title: "My Project",
    duration: "",
    details: `
    Built an Angular-based insurance comparison system with Sass, designed an intuitive user interface.
    `,
  },
  {
    title: "Sales Manager",
    duration: "Aug 2021 - July 2023",
    details: `
    Managed sales and teams for four years at Active Tech, drove revenue growth, and consistently achieved sales targets.
    `,
  },
];



const Work = () => {
  return (
    <div
      id="work"
      className="w-full max-w-screen-lg mx-auto h-screen py-10  flex flex-col justify-center p-4 md:pl-20 py-16"
    >
      <h1 className="text-4xl font-bold text-[#001b5e] mb-6 text-center">
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
