import React from "react";
import { VscGithub } from "react-icons/vsc";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center gap-6 py-6">
      <a
        href="https://github.com/RonBachar"
        target="_blank"
        rel="noopener noreferrer"
      >
        <VscGithub className="text-2xl text-[#001b5e]" />
      </a>
      <a
        href="https://www.linkedin.com/in/ron-bachar/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn className="text-2xl text-[#001b5e]" />
      </a>
      <a href="tel:0544631809">
        <FaWhatsapp className="text-2xl text-[#001b5e]" />
      </a>
    </div>
  );
};

export default Footer;
