import React, { useState } from "react";

import logo3 from "../assets/factoslogo.png";
import "../styles/Header.css";

// Icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header-class flex items-center justify-between xl:justify-start w-full py-5 px-8 h-[12vh] z-50">
      <div className="div-cont-logo text-center">
        <img className="img-logo mt-5" src={logo3} alt="" />
      </div>
      <nav
        className={`nav-menu fixed w-[100%] md:w-[40%] xl:w-full h-full ${
          showMenu ? "left-0" : "-left-full"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center gap-10 transition-all duration-500 z-50`}
      >
        <a href="#home" className="text-white">
          Inicio
        </a>
        <a href="#aboutUs" className="text-white">
          Nosotros
        </a>
        <a href="#services" className="text-white">
          Trabajos
        </a>
        <a href="#aboutUs" className="text-white">
          Empresas
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden text-2xl p-2"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
