
import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className=" text-white py-2" style={{
      backgroundColor: "#800020",
    }}>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold mb-2">Contáctame</h2>
          <p>
       <Image src="/correo.png" alt="" className="inline-block mr-2 h-5" width={24} height={24} />: Josuealpizar2290@gmail.com
        </p>
          <p>
       <Image src="/telefono.png" alt="" className="inline-block mr-2 h-5" width={24} height={24} />: +(506) 7233-8452
        </p>
        <p>
       <Image src="/Direccion.png" alt="" className="inline-block mr-2 h-5" width={24} height={24} />: 
        Golfito, Puntarenas, Costa Rica.
        </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Redes Sociales</h2>
          <ul className="flex space-x-4 justify-center">
            <li>
              <a href="https://www.facebook.com/josue.portillaalpizar" className="text-white hover:text-gray-300">
              <Image src="/facebook.png" alt="" className="w-6 h-6" width={300} height={150}/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jei.pi.ei.840_2" className="text-white hover:text-gray-300">
              <Image src="/instagram.png" alt="" className="w-6 h-6" width={300} height={150}/>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/josue_alpiz" className="text-white hover:text-gray-300">
              <Image src="/twitter.png" alt="Twitter" className="w-6 h-6" width={300} height={150}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-white">
          Copyright © 2024 - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;