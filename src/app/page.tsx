import Image from "next/image";
import footer from "./components/footer";
import NavBar from "./components/navBar";

import ares from "../../public/ares.jpg"

export default function Home() {
  return (
    <div>
       <NavBar />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
         
        >
           <img src="ares" alt="" className="w-24 h-24 rounded-full mx-auto mb-3" />
          <h2 className="mb-3 text-2xl font-semibold">
            Josue Portilla Alpizar{" "}
            
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Desarrollador Web
          </p>
        </a>

      

      

      </div>
      
    </main>
    <footer />
    </div>
    
  );
}
