'use client';
import Head from 'next/head';
import Carousel from '../components/carrusel';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Carousel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-center" style={{ backgroundImage: 'url("https://img.freepik.com/vector-premium/fondo-tecnologia-abstracta-innovacion-concepto-comunicacion-alta-tecnologia_42421-367.jpg?w=740")' }}>
        <Carousel />
        <Link href="https://github.com/Portilla22" passHref>
        <div className="rounded-full overflow-hidden ">
        <Image src="/PerfilGithub.jpeg" alt="GitHub Logo" width={100} height={100} className="object-cover" />
        </div>
        </Link>
        <h2 className="text-center text-xl text-white">Perfil de Github</h2>
      </main>
    </div>
  );
}