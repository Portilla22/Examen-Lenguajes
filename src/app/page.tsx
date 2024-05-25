import Image from "next/image";
import ares from "../../public/ares.jpg"
import React from "react";
import Link from "next/link";




export default function Home() {
  return (
    <div>
      
      <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{
        backgroundImage: `url('https://cdn.pixabay.com/photo/2022/06/20/14/20/space-7273891_1280.jpg')`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
     <section className="max-w-5xl mx-auto bg-gray-500 bg-opacity-65 p-6 rounded-lg shadow-md mb-8 mt-36 flex justify-center text-white">
  <div className="w-full md:w-2/3 md:px-4"> 
    <div className="text-center text-xl mb-4 text-center">
      <p>
      ¡Bienvenido a mi portafolio en línea!
      <br />
      <br />
      Te invito a conocer más sobre mí, mis habilidades y los proyectos en los que he trabajado. Si estás interesado en contratarme o requieres más información, ¡no dudes en ponerte en contacto conmigo!
      <br />
      <br />
      ¡Explora mi portafolio y descubre cómo puedo aportar a tu empresa!
      </p>
    </div>
  </div>
</section>

      </main>
     
    </div>
  );
}
