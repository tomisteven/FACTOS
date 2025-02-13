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
            <h1>Soluciones Digitales, Aplicaciones Web, Sistemas a Medida..</h1>
          </div>
          <p className="parraf">
            Desarrollo de Software, Aplicaciones Web, Sistemas a Medida, etc. 🚀
            Contamos con personal capacitado para cumplir todas sus
            expectativas.
          </p>
          <div className="cont-subtitle">
            <Typewriter
              options={{
                strings: [
                  "Desarrollo de Software </>",
                  "Aplicaciones Web 🌐",
                  "Sistemas a Medida 📱",
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
