import React from "react";
import logo from "../assets/factoslogo.png";
// Icons
import {
  RiCheckboxBlankCircleFill,
  RiInstagramLine,
  RiFacebookLine,
  RiTwitterLine,
  RiGithubLine,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="cont-footer p-8 xl:p-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white pb-8">
        {/* Logo */}
        <div className="w-1/6">
         <img src={logo} alt="" />
        </div>
        {/* Social media */}
        <nav className="flex items-center gap-4">
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiInstagramLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiFacebookLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiTwitterLine />{" "}
          </a>
          <a href="#" className="block text-white p-4 bg-primary rounded-full">
            {" "}
            <RiGithubLine />{" "}
          </a>
        </nav>
      </div>

      <div className="mt-5">
        <p className="text-gray-300 text-center">
          © 2024 - Factos - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
