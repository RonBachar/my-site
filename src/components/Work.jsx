import React from "react";
import WorkItem from "../components/WorkItem";

const data = [
  {
    title: "Junior Angular Developer | Full-time Freelance",
    duration: "July 2023 - now",
    year: "2023",
    details: `In my current role, I'm actively engaged in Angular web development, collaborating on project requirements, and implementing components, services, and modules for interactive and responsive pages, all while ensuring precise styling using Figma designs. `,
  },
  {
    title: "Sales Manager | Active Tech",
    duration: "2 Years",
    year: "2020-2022",
    details: `As a Sales Manager at Active Tech, I successfully led a dynamic sales team and contributed to the company's growth by implementing effective sales strategies. My responsibilities included overseeing the sales process, managing client relationships, and achieving revenue targets. Through my leadership, we consistently exceeded sales goals, fostering a positive and collaborative work environment. `,
  },
  {
    title: "Sales Agent | VW ",
    duration: "4 Years",
    year: "2016-2020",
    details: `During my tenure as a Sales Agent at VW, I played a key role in promoting and selling Volkswagen vehicles. I developed strong product knowledge, built lasting relationships with clients, and consistently met or exceeded sales targets. Additionally, I actively participated in sales training programs, staying abreast of industry trends and enhancing my sales skills. My dedication and contribution played a pivotal role in maintaining VW's reputation for excellence in customer service and sales.`,
  },
];



const Work = () => {
  return (
    <div
      id="work"
      className="w-full mx-auto h-full   flex flex-col justify-center p-4 md:pl-20 py-16"
    >
      <h1 className="text-4xl font-bold text-[#001b5e] mb-6 text-center">
        Work
      </h1>
      <h2 className="text-1xl font-bold mb-6 text-[#001b5e]  text-center">A glance of my prior work experience</h2>
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
