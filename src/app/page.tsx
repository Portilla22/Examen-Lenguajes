import Image from "next/image";
import ares from "../../public/ares.jpg"
import React from "react";
import Link from "next/link";




export default function Home() {
  return (
    <div>
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{
        backgroundImage: `url('https://blog.hubspot.es/hs-fs/hubfs/media/queesseguridadinformatica.jpeg?width=595&height=400&name=queesseguridadinformatica.jpeg')`, // Ruta de la imagen de fondo
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="mb-8 text-center lg:mb-0 lg:w-full lg:max-w-md lg:text-left ">
  <div className="w-full lg:w-1/4 p-4 mx-auto mt-60"> {/* Ajusta mt-32 según sea necesario */}
  <p className="text-xl font-semibold mb-4 mt-4 inline-block bg-gray-500 p-4">
  ¡Bienvenido a mi portafolio!.
  </p>
    <div>
      {/* Otro contenido aquí */}
    </div>
  </div>
</div>
      </main>
     
    </div>
  );
}
