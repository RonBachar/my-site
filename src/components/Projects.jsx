import React from "react";

const Projects = () => {
  return (
    <div id="projects" className="py-16">
      <h1 className="text-4xl font-bold text-[#001b5e] mb-6 text-center">
        Projects
      </h1>

      <div className="flex flex-col items-center gap-6">
        <div className="w-52 text-center ">
          <a
            href="https://worker-manager.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md p-4  text-center text-[#001b5e]"
          >
            Worker Manager
          </a>
        </div>

        <div className="w-52 text-center ">
          <a
            href="https://mikasa-guest-house.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md p-4  text-center text-[#001b5e]"
          >
            Mikasa Guest House
          </a>
        </div>

        <div className="w-52 text-center">
          <a
            href="https://ron-bachar.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg shadow-md p-4  text-center text-[#001b5e]"
          >
            Ron Bachar Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
