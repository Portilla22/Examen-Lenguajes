import Head from 'next/head';
import Carousel from '../components/carrusel';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Carousel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2 bg-cover bg-center" style={{ backgroundImage: 'url("https://img.freepik.com/vector-premium/fondo-tecnologia-abstracta-innovacion-concepto-comunicacion-alta-tecnologia_42421-367.jpg?w=740")' }}>
        <Carousel />
      </main>
    </div>
  );
}