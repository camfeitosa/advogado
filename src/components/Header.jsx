import Logo from "../assets/logo.svg"

export function Header(){
  return(
    <header className="flex justify-around px-2 py-4 items-center border-b shadow-sm  w-full bg-white fixed top-0 left-0 z-10"> 
      <img src={Logo} alt="Logo do site" />

      <nav>
        <ul className="flex gap-12 w-full text-slate-800">
          <li>Início</li>
          <li>Sobre</li>
          <li>Serviços</li>
          <li>Contatos</li>
        </ul>
      </nav>

      <div className="flex gap-10">
        <p>icon</p>
        <p>icon</p>
      </div>
    </header>
  )
}