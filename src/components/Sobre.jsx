import agnaldo from "../../public/agnaldo.webp";
import favicon from "../../public/favicon.svg";

// import line from "../assets/line.svg";

export function Sobre() {
  return (
    <section className="bg-white pb-14 md:px-20 md:pt-[2rem] md:pb-[6rem] lg:pb-[8rem]" id="Sobre">
      <div
        className="flex flex-col gap-6 lg:justify-between items-center lg:flex-row-reverse"
        data-aos="fade-in"
      >
        <div className="flex flex-col gap-6 items px-6 lg:w-[90%]">
          <h3 className="text-lg text-[#D0A854] uppercase">Sobre Agnaldo</h3>
          <h2 className="text-2xl font-semibold md:text-3xl">
            Defendendo Seus Direitos com Excelência e Integridade
          </h2>
          <p className="lg:w-[80%]">
          Com uma sólida formação em Administração de Empresas e Direito pela FMU-FAM SP e inscrito na OAB-SP, o advogado Agnaldo Alves de Siqueira combina expertise jurídica e visão estratégica para oferecer soluções completas e personalizadas aos seus clientes. Atuando nas áreas de Direito Trabalhista, Cívil e Criminal, seu compromisso é garantir a defesa dos direitos e interesses de cada cliente com ética, eficiência e dedicação.
          </p>
          <img src={favicon} className="w-1/5 md:w-1/6 md:mt-4" alt="Logo AAS" loading="lazy" />
        </div>

        <div className="flex items-center justify-center rounded-xl md:w-[60%]">
          <img src={agnaldo} className="w-[70%] rounded-lg" alt="Foto do Agnaldo" loading="lazy"/>
        </div>
      </div>
      <div className="hidden md:flex md:justify-center md:items-center">
        {/* <img src={line} className="w-[50%]" alt="" />
        <img src={line} className="w-[50%]" alt="" /> */}
      </div>
    </section>
  );
}
