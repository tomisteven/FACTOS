import React from "react";
import trabajo1 from "../assets/trabajo1.png";
import trabajo2 from "../assets/trabajo2.png";
import trabajo3 from "../assets/trabajo3.png";
import trabajo4 from "../assets/trabajo4.png";
import trabajo5 from "../assets/trabajo5.png";
import trabajo6 from "../assets/confort-w.png";
import trabajo7 from "../assets/farina-w.png";
import trabajo8 from "../assets/dobleclover-w.png";
import trabajo9 from "../assets/sazurin-w.png";
import trabajo10 from "../assets/dynasty-w.png";
// Icons
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Reviews = () => {
  return (
    <div className="cont-reviews p-8 flex flex-col gap-8">
      <h1 className="text-[40px] text-center font-black">
        Trabajos Realizados...
      </h1>
      <div className="flex justify-center gap-4">
        <span className="text-5xl text-primary">
          <RiDoubleQuotesL />
        </span>
        <p className="max-w-2xl text-center text-white">
          Hacemos que las marcas sean más visibles, más atractivas y más
          eficaces a la hora de comunicarse con sus clientes. Diseños de calidad
          y a medida para tu empresa o negocio.
        </p>
        <span className="text-5xl text-primary">
          <RiDoubleQuotesR />
        </span>
      </div>

      <div className="cont-trabajos">
        <a target="_blank" href="https://padelcrown.site/">
          <img src={trabajo1} alt="" />
        </a>
        <a target="_blank" href="https://www.drcancio.com.ar/">
          <img src={trabajo2} alt="" />
        </a>
        <a target="_blank" href="https://allpa.com.ar/">
          <img src={trabajo3} alt="" />
        </a>
        <a target="_blank" href="https://www.nastymondaysco.com/">
          <img src={trabajo4} alt="" />
        </a>
        <a target="_blank" href="https://confortjorge.com/">
          <img src={trabajo5} alt="" />
        </a>
        <a target="_blank" href="https://confortjorge.com/">
          <img src={trabajo6} alt="" />
        </a>
        <a target="_blank" href="https://estudiofarinabalbi.com">
          <img src={trabajo7} alt="" />
        </a>
        <a target="_blank" href="https://dobleclover.com/">
          <img src={trabajo8} alt="" />
        </a>
        <a target="_blank" href="https://sazurin.com/">
          <img src={trabajo9} alt="" />
        </a>
        <a href="https://wearedynastygroup.com/">
          <img src={trabajo10} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Reviews;
