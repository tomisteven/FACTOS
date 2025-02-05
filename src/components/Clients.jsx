import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Clients.css";

// Importar imágenes
import padelcrown from "../assets/padelcrown.png";
import estudio from "../assets/estudio.png";
import ashpa from "../assets/ashpa.png";
import nasty from "../assets/nasty.webp";
import clewi from "../assets/clewi.png";
import farina from "../assets/farina.png";
import zasurin from "../assets/sazurin.png";
import dobleclover from "../assets/dobleclover.png";
import dynasty from "../assets/dynasty.png";
import confort from "../assets/confort.png";

const Clients = () => {
  return (
    <div className="marcas p-8 flex flex-col items-center justify-center gap-8 mt-20 xl:mt-0">
      <h1 className="text-3xl font-medium text-white text-center">
        Marcas Representadas
      </h1>
      <PauseOnHover />
    </div>
  );
};

const PauseOnHover = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    pauseOnHover: true,
  };

  return (
    <div className="slider-container w-full">
      <Slider {...settings}>
        <div className="div-img">
          <img src={padelcrown} className="img-carousel" alt="Padel Crown" />
        </div>
        <div className="div-img">
          <img src={estudio} className="img-carousel" alt="Estudio" />
        </div>
        <div className="div-img">
          <img src={dobleclover} className="img-carousel" alt="Clewi" />
        </div>
        <div className="div-img">
          <img src={ashpa} className="img-carousel" alt="Ashpa" />
        </div>
        <div className="div-img">
          <img src={nasty} className="img-carousel" alt="Nasty" />
        </div>
        <div className="div-img">
          <img src={clewi} className="img-carousel" alt="Clewi" />
        </div>
        <div className="div-img">
          <img src={farina} className="img-carousel" alt="Clewi" />
        </div>
        <div className="div-img">
          <img src={zasurin} className="img-carousel" alt="Clewi" />
        </div>
        <div className="div-img">
          <img src={dynasty} className="img-carousel" alt="Clewi" />
        </div>
        <div className="div-img">
          <img src={confort} className="img-carousel" alt="Clewi" />
        </div>
      </Slider>
    </div>
  );
};

export default Clients;
