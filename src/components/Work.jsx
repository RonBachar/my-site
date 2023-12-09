import React from "react";
import WorkItem from "../components/WorkItem";

const data = [
  {

    title: "Junior Angular Developer",
    duration: "Jul 2023 - Present",
    details: `
    As a Junior Angular Developer in my current role, actively involved in the development of web applications using Angular framework. 
    Collaborating with the project team to understand requirements and objectives.
    Implementing Angular components, services, and modules to create interactive and responsive web pages.
    `
    ,
  },
  {

    title: "My Project",
    duration: "",
    details: ` 
    Designed and built my portfolio page using React.js and Tailwind CSS. This web application showcased my proficiency in creating responsive and visually appealing websites, offering an engaging user experience.
    `
    ,
  },
  {

    title: "Sales Manager",
    duration: "Aug 2021 - July 2023",
    details: `
    In my previous role as a Sales Manager at Active Tech, I gained four years of valuable experience in sales and management. This position allowed me to develop and apply my sales and leadership skills, drive revenue growth, and lead a team to achieve sales targets.
    `
    ,
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
