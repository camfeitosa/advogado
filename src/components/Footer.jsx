import logo from "../assets/logo.svg"

export function Footer(){
  return(
    <footer className="h-[200px] mt-10 py-6 px-20 flex items-center justify-between border-t-2  ">
      <img src={logo} alt="Logo" />
    </footer>
  )
}