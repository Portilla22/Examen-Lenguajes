
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold mb-2">Contáctame</h2>
          <p>Email: josuealpizar2290@gmail.com</p>
          <p>Teléfono: +(506) 7233-8452</p>
          <p>Dirección: Golfito, Puntarenas, Costa Rica</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Redes Sociales</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="https://www.facebook.com/josue.portillaalpizar" className="text-white hover:text-gray-300">
              <img src="/facebook.png" alt="Instagram" className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/jei.pi.ei.840_2" className="text-white hover:text-gray-300">
              <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-400">
          Copyright © 2024 - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;