import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full max-w-screen mx-auto h-screen py-10 bg-gray-200 flex flex-col justify-center p-4 md:pl-20 py-16">
      <h1 className="text-4xl font-bold text-[#001b5e] mb-4 text-center">
        About
      </h1>
      <h2 className="text-1xl font-bold text-[#001b5e] font-thin text-center">
        Hi there, I'm Ron!
      </h2>
      <p className="text-center py-5; ">
        A diligent and organized web developer with six months of hands-on coding experience, I am committed to producing efficient and reusable code while consistently strive to uphold industry’s best coding practices.
        I possess a good debugging and problem-solving abilities and excel in communication and customer relations.
      </p>

    </div>
  );
};

export default About;
