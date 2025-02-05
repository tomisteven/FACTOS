import React from "react";
import TypeWriter from "typewriter-effect";

import appMoviles from "../assets/appMoviles.png";
import web from "../assets/web.png";
import ecomerce from "../assets/ecomerce.png";
import landing from "../assets/landing.png";
import Card from "./Card";

const Works = () => {
  const data = [
    {
      title: "Diseño de aplicaciones móviles",
      description:
        "Diseñamos aplicaciones móviles para iOS y Android, con un enfoque en la experiencia del usuario y la interfaz de usuario.",
      icon: appMoviles,
    },
    {
      title: "Desarrollo de aplicaciones web",
      description:
        "Desarrollamos aplicaciones web a medida, con un enfoque en la escalabilidad y el rendimiento. ",
      icon: web,
    },
    {
      title: "Ecommerce",
      description:
        "Creamos tiendas online a medida, con un enfoque en la conversión y la experiencia del usuario. Con pagina de administracion para el control de la informacion de tu empresa o negocio.",
      icon: ecomerce,
    },
    {
      title: "Landing Page/Pagina Informativa",
      description:
        "Creamos paginas informativas a medida, diseñadas para la visualizacion de informacion destacada de tu empresa o negocio.",
      icon: landing,
    },
  ];

  return (
    <div id="aboutUs" className="p-12 xl:p-20">
      <div className="mb-16">
        <h1 className="text-[40px] font-black mb">
          <TypeWriter
            options={{
              strings: ["Creamos tus sueños..."],
              autoStart: true,
              loop: true,
              delay: 100,
              color: "white",
            }}
          />
        </h1>
        <p className="text-xl text-gray-500 mb-5">
          Hacemos que las marcas sean más visibles, más atractivas y más
          eficaces a la hora de comunicarse con sus clientes
        </p>
        <p className="mb-5">
          👋 Creamos experiencias digitales a medida para empresas en
          crecimiento y marcas líderes. Trabajamos con empresas de todos los
          tamaños, desde startups hasta grandes empresas, para crear
          experiencias digitales que resuelvan problemas reales.
        </p>
      </div>
      <div className="cont-cards">
        {data.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Works;
