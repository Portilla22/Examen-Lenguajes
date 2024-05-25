import React from 'react';
import Link from 'next/link';
import { skill } from '../components/skill';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between p-6 " style={{
        backgroundImage: "url('https://cdn.pixabay.com/photo/2022/06/20/14/20/space-7273891_1280.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      
      {/* Sección de Presentación Personal */}
      <section className="w-full max-w-5xl text-white bg-gray-500  p-6 rounded-lg shadow-md mb-8 mt-36 ">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <img src="perfil.jpeg" alt="Josue Portilla" className="w-64 h-64 mr-3"  />
          </div>
          <div className="w-full md:w-2/3 md:pl-6">
            <h1 className="text-2xl font-bold mb-4">¡Hola! Mi nombre es Edwin Josue Portilla Alpizar</h1>
            <p className="mb-4">
              Soy un informático empresarial con experiencia en la creación de soluciones innovadoras para empresas.
              Mi pasión por la tecnología me lleva a explorar constantemente nuevas áreas, desde la inteligencia artificial hasta la ciberseguridad.
              Disfruto colaborando en entornos dinámicos donde puedo combinar mis habilidades técnicas con mi creatividad. 
              ¡Estoy emocionado por seguir explorando nuevas oportunidades y desafíos!.</p>
            <Link href="https://www.linkedin.com/in/josue-alpizar-22877730b" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
            </Link>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <main className="flex flex-col items-center w-full text-white">
  <div className="mb-32 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-4 gap-8">
    <div className="w-full lg:col-span-1 p-8 bg-gray-500  rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-white">Habilidades</h2>
      {skill.map(({ skill, porcentage }, i) => (
        <div className="mb-4" key={i}>
          <div className="font-bold">{skill}</div>
          <div className="flex items-center">
            <div className="flex-1 h-4  rounded-full overflow-hidden text-white">
              <div
                className="h-full bg-blue-500"
                style={{ width: `${porcentage}%` }}
              ></div>
            </div>
            <div className="ml-2 font-bold">{porcentage}%</div>
          </div>
        </div>
      ))}
    </div>
    <div className="w-full lg:col-span-3 p-8 bg-gray-500  rounded-lg shadow-md">
  <h2 className="text-3xl font-semibold mb-4 text-center text-white">Experiencia Laboral</h2>
  
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">- Empresa CodeWorks Solutions</h3>
    <p className="text-white mb-2">Desarrollador Web Junior</p>
    <p className="text-white font-semibold mb-2">Febrero 2023 - Presente</p>
    <p className="text-white">En CodeWorks Solutions, colaboré en el desarrollo de aplicaciones web, participando en la codificación de nuevas funcionalidades y en la resolución de problemas técnicos.</p>
  </div>
  
  
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">- Empresa CyberSec Solutions</h3>
    <p className="text-white mb-2">Especialista en Seguridad Informática</p>
    <p className="text-white font-semibold mb-2">Enero 2021 - Enero 2023</p>
    <p className="text-white">En CyberSec Solutions, identifiqué y mitigué vulnerabilidades de seguridad en sistemas informáticos, participando en auditorías de seguridad y pruebas de penetración.</p>
  </div>
  
  <div>
    <h3 className="text-lg font-semibold mb-2">- Empresa CloudTech Systems</h3>
    <p className="text-white mb-2">Ingeniero de DevOps</p>
    <p className="text-white font-semibold mb-2">Julio 2019 - Diciembre 2020</p>
    <p className="text-white">En CloudTech Systems, soy responsable de automatizar el despliegue de aplicaciones, gestionar la infraestructura en la nube y garantizar la continuidad operativa de los sistemas.</p>
  </div>
</div>
  </div>
</main>
    </div>
  );
};

export default About;