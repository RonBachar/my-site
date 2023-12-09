import React from "react";
import image from "../assets/hero.jpg"; // Provide the correct relative path
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaWhatsapp
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={image}
        alt="/"
      />
      <div className="w-full h-screen absolute top-0 l-0 bg-white/40">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800 font-light">
            Ron Bachar
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800 font-thin	">
            <TypeAnimation
              sequence={[
                "Design.",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Develop.",
                1000,
                "Deploy.",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://linkedin.com/in/ron-bachar" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="cursor-pointer" size={20} />
            </a>
            <a href="https://twitter.com/Ron82950274" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="cursor-pointer" size={20} />
            </a>
            <a href="https://wa.me/0544631809">
              <FaWhatsapp className="cursor-pointer" size={20} />
            </a>
            <a href="tel:0544631809">
              <FaPhone className="cursor-pointer" size={20} />
            </a>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
