import logo from "../assets/logo.svg";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

export function Footer() {
  return (
    <footer className="h-[200px] mt-10 py-6 lg:px-[10rem] flex flex-col lg:flex-row items-center justify-between border-t-2 gap-10">
      <img src={logo} alt="Logo" />

      <div className="link flex gap-6">
      <a href="https://www.instagram.com/agnaldo.direito/" rel="noopener noreferrer" target="_blank"><FaInstagram className="text-2xl"/></a> 
      <a href="https://wa.link/v96jws" rel="noopener noreferrer" target="_blank"><FaWhatsapp className="text-2xl"/></a>
      <a href="mailto:agnaldo.direito1973@gmail.com" rel="noopener noreferrer" target="_blank"><MdOutlineEmail className="text-2xl"/></a>
      </div>

      <div className="pb-10 lg:pb-0">
        <p>&copy; 2024 AAS ADVOGADO | Todos os direitos reservados.</p> 
      </div>
    </footer>
  );
}
