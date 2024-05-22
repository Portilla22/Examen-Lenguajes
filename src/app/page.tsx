import Image from "next/image";
import ares from "../../public/ares.jpg"
import React from "react";
import Link from "next/link";
import Footer from "./components/footer";



export default function Home() {
  return (
    <div>
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <header className="rowheader w-full py-0"
        style={{ 
          backgroundColor: "#800020",
          position: "absolute",
          top: 0,
          width: "100%",
          height: "150px",
        }}  
        >
          <nav style={{ backgroundColor: "gray", padding: "10px", textAlign: "right" }}>
        <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
            <li style={{ display: "inline", marginRight: "10px", color: "black" }}>
                <Link href="/">Home</Link>
            </li>
            <li style={{ display: "inline", marginRight: "10px", color: "black" }}>
                <Link href="/about">About</Link>
            </li>
            <li style={{ display: "inline", marginRight: "10px", color: "black" }}>
                <Link href="/github">Proyectos</Link>
            </li>
            <li style={{ display: "inline", marginRight: "10px", color: "black" }}>
                <Link href="/contacto">Contacto</Link>
            </li>
        </ul>
    </nav>
          <div className="flex items-center justify-center">
            <img src="ares.jpg" alt="" className="w-24 h-24 mr-3" />
            <div>
              <h1 className="mb-1 text-2xl font-semibold text-white">
                Josue Portilla Alpizar
              </h1>
              <h3 className="text-lg text-white">Desarrollador web</h3>
              <p className="m-0 max-w-[30ch] text-sm opacity-50 text-white">
                Cononao bajo cero en todos los estilos del bombo con crack
              </p>
            </div>
          </div>
        </header>
        <div className="mb-32 grid text-left lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
          {/* Aquí puedes añadir otros contenidos o secciones */}
          <div className="w-full lg:w-1/4 p-8">
      <h2 className="text-2xl font-semibold mb-4 ml-4 mt-8">Habilidades</h2>
      <div>

      </div>
    </div>
        </div>
      </main>
      <Footer /> 
    </div>
  );
}
