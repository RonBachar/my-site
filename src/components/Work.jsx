import React from "react";
import WorkItem from "../components/WorkItem";

const data = [
  {
    title: "Junior Angular Developer | Full-time Freelance",
    duration: "6 Months",
    year: "2023",
    details: `
    In my current role, I'm actively engaged in Angular web development, collaborating on project requirements, and implementing components, services, and modules for interactive and responsive pages, all while ensuring precise styling using Figma designs.
    `,
  },
  {
    title: "Sales Manager | Active Tech",
    duration: "2 Years",
    year: "2021-2023",
    details: `
    In my previous role as a Sales Manager at Active Tech, I gained two years of valuable experience in sales and management. This position allowed me to develop and apply my sales and leadership skills, drive revenue growth, and lead a team to achieve sales targets.
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
