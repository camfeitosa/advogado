import { useState } from "react";
import Logo from "../assets/logo.svg"
import Menu from "../assets/menuH.svg"

// import { slide as Menu } from 'react-burger-menu'

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

export function Header(){
  const [activeLink, setActiveLink] = useState('#Inicio'); 

  const handleClick = (link) => {
    setActiveLink(link); 
  };


  return(
    <header className="flex justify-between md:justify-around px-6 md:px-2 py-4 items-center border-b shadow-lg w-full bg-white fixed top-0 left-0 z-10"> 
    <div>
      <img className="w-[160px] h-[80px] md:w-auto" src={Logo} alt="Logo do site" loading="lazy" />
    </div>

      <nav className="hidden md:flex">
        <ul className="flex gap-12 w-full text-slate-800 font-medium">
          <li><a href="#Inicio" className={activeLink === '#Inicio' ? 'menu-item active' : 'menu-item'} onClick={() => handleClick('#Inicio')}>Início</a></li>
          <li><a href="#Sobre" className={activeLink === '#Sobre' ? 'menu-item active' : 'menu-item'} onClick={() => handleClick('#Sobre')}>Sobre</a></li>
          <li><a href="#Servicos" className={activeLink === '#Servicos' ? 'menu-item active' : 'menu-item'} onClick={() => handleClick('#Servicos')}>Serviços</a></li>
          <li><a href="#Contato" className={activeLink === '#Contato' ? 'menu-item active' : 'menu-item'} onClick={() => handleClick('#Contato')}>Contatos</a></li>
        </ul>
      </nav>

      <div className="link hidden md:flex gap-6">
       <a href="https://www.instagram.com/agnaldo.direito/" rel="noopener noreferrer" target="_blank"><FaInstagram className="text-2xl"/></a> 
       <a href="https://wa.me/5511997573166" rel="noopener noreferrer" target="_blank"><FaWhatsapp className="text-2xl"/></a>
      </div>

      <div className="md:hidden">
        <img src={Menu} loading="lazy"/>
      </div>
    </header>
  )
}