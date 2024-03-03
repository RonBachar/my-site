import React from "react";
import { BsDownload } from "react-icons/bs";

const Resume = () => {
  const downloadPdf = () => {
    // Specify the path to the PDF file relative to the "public" directory
    const pdfUrl = "/src/assets/pdf/Resume.pdf"; // Adjust the path as needed

    // Create an anchor element to trigger the download
    const anchor = document.createElement("a");
    anchor.href = pdfUrl;
    anchor.download = "resume.pdf"; // Set the desired download filename
    anchor.style.display = "none";

    // Append the anchor to the document and trigger a click event
    document.body.appendChild(anchor);
    anchor.click();

    // Clean up the anchor element
    document.body.removeChild(anchor);
  };

  return (
    <div
      id="resume"
      className="h-96 flex flex-col m-auto mt-10  bg-slate-100  justify-center items-center"
    >
      <button
        className="py-2 px-4 rounded-lg inline-flex items-center border-none bg-slate-50 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-800 text-slate-800 hover:text-white"
        onClick={downloadPdf} // Call the downloadPdf function on button click
      >
        <BsDownload className="me-2" />
        Download CV
      </button>
    </div>
  );
};

export default Resume;
