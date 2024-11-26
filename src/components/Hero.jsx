import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import icon from "/public/trabalhista.svg";
import civil from "/public/civil.svg";
import criminal from "/public/criminal.svg";

import { CardHero } from "./CardHero";
// import line from "../assets/line.svg"

export function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <section className="hero md:px-40 text-center lg:text-start bg-cover lg:bg-cover xl:bg-contain md:bg-cover md:h-[80vh] lg:h-[90vh] h-[70vh] px-4 lg:bg-fixed lg:mt-0 mt-20 pt-24 lg:pt-[12rem]" id="Inicio">
        <div className="w-full md:w-1/2 flex flex-col justify-between lg:items-start items-center gap-12 text-white">
          <div className="flex flex-col gap-2 items-center md:items-baseline">
            <h1 className="md:text-5xl text-3xl font-semibold lg:w-[600px] w-full mt-2 flex flex-col uppercase">
              Agnaldo Alves de Siqueira
            </h1>
            {/* <img src={line} className="w-[80%]" alt="" /> */}
            <span className="text-[#D0A854] uppercase text-md font-semibold border px-6 py-1 border-[#D0A854] bg-black bg-opacity-20 rounded-md mt-2 md:mt-4">
              Advogado
            </span>
          </div>
          <p className="md:text-lg">
            Especialista nas áreas de Direito Trabalhista, Civil e Criminal,
            ofereço soluções jurídicas personalizadas para proteger seus
            direitos e garantir a melhor defesa dos seus interesses.
          </p>
          <div className="py-4 px-6 text-[#0C1A26] font-medium bg-[#D0A854] w-fit radius">
          <a href="https://wa.me/5511997573166" className="font-bold md:text-lg">
              Entre em contato
            </a>
          </div>
        </div>

        
      </section>

      <div className="relative bottom-10 lg:bottom-20 bg-[#0C1A26] flex justify-center md:px-20">
        <CardHero h2="Trabalhista" img={icon} />
        <CardHero h2="Cívil" img={civil} />
        <CardHero h2="Criminal" img={criminal} />
      </div>
    </>
  );
}
