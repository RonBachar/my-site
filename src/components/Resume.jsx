import React from "react";
import { BsDownload } from "react-icons/bs"; // Import the BsDownload icon

const Resume = () => {
  return (
    <div
      id="resume"
      className="h-96 flex flex-col m-auto mt-10 flex  flex-col justify-center items-center"
    >
      <button className=" py-2 px-4 rounded inline-flex items-center border-none bg-stone-200">
        <BsDownload className="me-2" /> Download CV
      </button>
    </div>
  );
};

export default Resume;
