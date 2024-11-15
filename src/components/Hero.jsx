// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; 

export function Hero() {

  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000, // Define a duração da animação em milissegundos
  //     once: false,     // Anima apenas uma vez ao rolar a página
  //   });
  // }, []);

  return (
    <>
    
    <section className="hero w-full px-40">
      <div className="w-1/2 flex flex-col justify-between gap-10  text-white" >
        <h1 className="text-6xl font-semibold w-[600px]">
          <span className="text-yellow-600">Advogado</span> Agnaldo Alves de Siqueira
        </h1>

        <p>Lorem ipsum dolor sit amet consectetur adium dolor sit amet consectetur adipisicing elit. Ad distinctio alias numquam deleniti consectetur rerum soluta quis reprehenderit animi doloribus.</p>

        <div className="p-4 bg-yellow-600 w-fit mt-10">
          <a href="">Entre em contato</a>
        </div>
      </div>
    </section>

    <div className="relative bottom-20 flex justify-center px-20 gap-20 " data-aos="fade-out">
      <div className="w-[300px] bg-white shadow-md h-[300px] rounded-md">
        <p>Oi</p>
        <h2>Tchau</h2>
      </div>
      <div className="w-[300px] bg-white shadow-md h-[300px] rounded-md">
        <p>Oi</p>
        <h2>Tchau</h2>
      </div>
      <div className="w-[300px] bg-white shadow-md h-[300px] rounded-md ">
        <p>Oi</p>
        <h2>Tchau</h2>
      </div>
    </div>
    </>
  );
}
