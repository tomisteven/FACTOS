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
            <h1>Soluciones Digitales que Impulsan tu Negocio</h1>
          </div>
          <p className="parraf">
            Desarrollamos software a medida, aplicaciones web innovadoras y
            sistemas personalizados que optimizan tus procesos. 🚀 Nuestro
            equipo altamente capacitado convierte tus ideas en tecnología de
            vanguardia, asegurando soluciones eficientes, escalables y a la
            medida de tus necesidades.
          </p>
          <div className="cont-subtitle">
            <Typewriter
              options={{
                strings: [
                  "Desarrollo de Software a Medida </>",
                  "Aplicaciones Web de Alto Rendimiento 🌐",
                  "Sistemas Personalizados para Empresas 📱",
                ],
                autoStart: true,
                loop: true,
              }}
            />
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
      </div>
    </section>
  );
};

export default Hero;
