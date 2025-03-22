import React from "react";
import img_principal from "../assets/arquitecto.png";
import whatsApp from "../assets/whatsapp.png";
import Burbujas from "./Burbujas.jsx";
import "../styles/Hero.css";
import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";
import Typewriter from "typewriter-effect";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="section-hero">
      <Burbujas />
      <div className="cont-info-hero">
        <div className="cont-titles">
          <div className="cont-title">
            <h1>Transformamos Ideas en Soluciones Digitales Innovadoras</h1>
          </div>
          <p className="parraf">
            Impulsamos tu negocio con desarrollo de software a medida,
            aplicaciones web de alto rendimiento y sistemas personalizados que
            optimizan tus procesos. 🚀 Nuestro equipo de expertos está listo
            para llevar tu visión al siguiente nivel con tecnología de alto
            nivel y soluciones escalables.
          </p>
          <div className="cont-subtitle">
            <Typewriter
              options={{
                strings: [
                  "Desarrollo de Software Inteligente </>",
                  "Aplicaciones Web de Alto Impacto 🌐",
                  "Sistemas Personalizados para tu Empresa 📱",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="cont-button">
          <button
            class="button-h"
            onClick={() => {
              window.open("https://w.app/jpbrhd", "_blank");
            }}
          >
            <span class="button_lg">
              <span class="button_sl"></span>
              <span class="button_text">Contactanos</span>
            </span>
          </button>
        </div>
      </div>
      <div className="cont-img">
        <img src={img_principal} alt="" />
      </div>
    </section>
  );
};

export default Hero;
