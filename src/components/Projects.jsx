import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="m-auto md:pl-20 p-4 py-16 ">
      <h1 className="text-4xl font-bold text-[#001b5e] mb-4 text-center">
        Projects
      </h1>

      <div className="w-full w-1/2 ">
        <a
          href="https://worker-manager.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white rounded-lg shadow-md p-4 text-center m-4"
        >
          Worker Manager
        </a>
      </div>

      <div className="w-full w-1/2 ">
        <a
          href="https://mikasa-guest-house.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white rounded-lg shadow-md p-4 text-center m-4"
        >
          Mikasa Guest House
        </a>
      </div>

      <div className="w-full ">
        <a
          href="https://ron-bachar.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-white rounded-lg shadow-md p-4 text-center m-4"
        >
          Ron Bachar Portfolio
        </a>
      </div>
    </div>
  );
};

export default Projects;
