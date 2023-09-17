import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className=" w-full h-screen py-10 bg-gray-200 flex flex-col justify-center  m-auto md:pl-20 p-4 py-16 "
    >
      <h1 className="text-4xl font-bold text-[#001b5e] mb-4 text-center">
        About
      </h1>
      <h2 className="text-1xl font-bold text-[#001b5e] font-thin text-center">
        Hi there, I'm Ron!
      </h2>
      <p className="text-center py-5 ">
        After a decade of wandering, I've finally turned my passion for
        technology into walk of life. My journey through web development has
        tought me key principles of clean, precise, and efficient code
        performance. Whether it's crafting scalable back-end solutions with
        Node.js or designing elegant front-end interfaces with Material
        libraries, I'm dedicated to deliver robust, high-performance and strong
        web applications. All while make it a priority to stay updated in the
        ever-evolving digital landscape.
      </p>
    </div>
  );
};

export default About;
