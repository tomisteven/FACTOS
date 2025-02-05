import React from "react";
// Icons
import { RiMailFill, RiSmartphoneFill, RiMacFill } from "react-icons/ri";


const Services = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 md:p-12 xl:p-20"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-[30px] font-bold">Diseñemos juntos, dejamos tu email y nos ponemos en contacto con vos!</h1>
        <p className="text-[20px] text-gray-500">

        </p>
        <form className="w-full">
          <div className="relative">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-xl" />
            <input
              type="text"
              className="w-full bg-gray-100 py-4 pl-10 pr-36 rounded-xl outline-none"
              placeholder="Agregar tu email..."
            />
            <button
              type="submit"
              className="btn-enviar absolute font-semibold py-2 px-6  text-white rounded-xl top-1/2 -translate-y-1/2 right-2"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      {/* Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:justify-center gap-8">
        <div className="item-services flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2 bg-secondary  box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Diseño UI/UX</h3>
          <p className="item-services-text text-gray-500">
            Mejora la experiencia de tus usuarios con un diseño atractivo
          </p>
        </div>
        <div className="item-services flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 bg-secondary box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">CEO</h3>
          <p className="item-services-text text-gray-500">
            Posiciona tu marca en los primeros lugares de los buscadores
          </p>
        </div>
        <div className="item-services flex flex-col gap-2">
          <RiSmartphoneFill className="text-4xl p-2 bg-secondary  box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Diseño de Apps</h3>
          <p className="item-services-text text-gray-500">
            Lleva tus ideas a una aplicación móvil con un diseño atractivo
          </p>
        </div>
        <div className="item-services flex flex-col gap-2">
          <RiMacFill className="text-4xl p-2 bg-secondary  box-content rounded-xl" />
          <h3 className="text-[20px] font-bold">Desarollo Web</h3>
          <p className="item-services-text text-gray-500">
            Desarrolla tu sitio web con un diseño atractivo y funcional
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
