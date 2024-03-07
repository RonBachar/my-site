import React from "react";
import ABOUT_IMG from "../assets/about_me.jpg"; // Provide the correct relative path

const About = () => {
  return (
<div id="about" className="w-full h-screen-200 bg-gray flex flex-wrap my-24">

<div className="h-screen  w-full md:w-1/2 flex flex-col justify-center items-center px-16">
  <h1 className="text-4xl font-bold text-[#001b5e] mb-6 text-center">
    About
  </h1>
  <h2 className="text-1xl font-bold mb-6 text-[#001b5e]  text-center">
    Hi there, I'm Ron!
  </h2>
  <p className="text-justify">
    A diligent and organized web developer with several months of hands-on
    coding experience, I am committed to producing efficient and reusable
    code while consistently strive to uphold industry’s best coding
    practices. I possess a good debugging and problem-solving abilities
    and excel in communication and customer relations.
  </p>
</div>


<img className="w-full md:w-1/2  object-cover object-left scale-x-[-1]" src={ABOUT_IMG} alt="about-img" />

</div>

  );
};

export default About;
