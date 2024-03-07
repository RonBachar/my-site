import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full py-32 px-6 bg-slate-300 flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl font-bold text-[#001b5e] mb-6 text-center">
        Projects
      </h1>
      <h2 className="text-1xl font-bold mb-6 text-[#001b5e]  text-center">
        A few projects I made
      </h2>

      <div className="flex gap-6 flex-wrap justify-center ">
        <div className=" max-w-sm rounded-lg shadow p-4  text-center flex flex-col justify-between">
          <h2 className="text-1xl font-bold mb-6  text-[#001b5e]">Worker Manager</h2>
          <p className="text-1xl ">
            Developed an Employee Management application. allowing users to
            efficiently add, edit, and deleting employee data records, featuring
            a user-friendly interface and integrates closely with Angular for a
            responsive user experience.
          </p>
          <a
            href="https://worker-manager.netlify.app"
            className="block  rounded-lg shadow p-4  text-center text-[#001b5e]"
          >
           Project Page
          </a>
        </div>

        <div className=" max-w-sm rounded-lg shadow p-4  text-center flex flex-col justify-between">
          <h2 className="text-1xl font-bold mb-6  text-[#001b5e]">Mikasa Guest House</h2>
          <p className="text-1xl ">
            Implemented Angular's routing for practicing page transitions,
            utilized Angular Material for adaptable styling and responsiveness,
            integrated EmailJS for email functionalities, and embedded Google
            Maps for location services.
          </p>
          <a
            href="https://mikasa-guest-house.netlify.app"
            className="block  rounded-lg shadow p-4  text-center text-[#001b5e]"
          >
           Project Page
          </a>
        </div>

        <div className=" max-w-sm rounded-lg shadow p-4  text-center flex flex-col justify-between">
          <h2 className="text-1xl font-bold mb-6  text-[#001b5e]">My Portfolio</h2>
          <p className="text-1xl ">
            Designed and built a static portfolio page using React.js and
            Tailwind CSS. Demonstrating abilities in creating responsive and
            visually appealing website.
          </p>
          <a
            href="https://ron-bachar.netlify.app"
            className="block rounded-lg shadow p-4  text-center text-[#001b5e]"
          >
           Project Page
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
