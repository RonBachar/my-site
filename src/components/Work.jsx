import React from "react";
import WorkItem from "../components/WorkItem";

const data = [
  {
    title: "Frontend Angular Developer | Full-time Freelance",
    duration: "",
    year: "2023- present",
    details: `In my current role, I'm actively engaged in a comprehensive Angular v16 insurance-comparison system, collaborating on project requirements, and implementing features to enhance user experience and streamline functionality `,
  },
  {
    title: "Compliance Manager | Active Tech ",
    duration: "2 Years",
    year: "Aug 2020 - July 2022",
    details: `Managed compliance for international clients as an outsource for Plus 500, a market giant, overseeing document verification and assisting clients. Addressed concerns effectively, drove revenue growth, and led sales team.
    `,
  },
  {
    title: "Sales Agent | VW Champion Motors  ",
    duration: "4 Years",
    year: "July 2016 - August 2020",
    details: `Key sales agent at VW Champion Motors, selling Volkswagen vehicles and exceeding targets through expertise and strong client relationships. Committed to ongoing training and exceptional customer service.
    `,
  },
];

const Work = () => {



  return (
    <div
      id="work"
      className="max-w-screen-md	m-auto py-16  flex flex-col justify-center"
    >
      <h1 className="text-4xl font-bold text-[#001b5e] mb-6 text-center">
        Work
      </h1>
      <h2 className="text-1xl font-bold mb-6 text-[#001b5e]  text-center">
        A glance of my prior work experience
      </h2>

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
