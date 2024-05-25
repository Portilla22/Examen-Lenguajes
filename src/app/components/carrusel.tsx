'use client';

import { useState, useEffect } from 'react';

interface Repo {
  id: number;
  name: string;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Portilla22/repos');
        if (!response.ok) {
          const message = `Error: ${response.status} ${response.statusText}`;
          throw new Error(message);
        }
        const data: Repo[] = await response.json();
        setRepos(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % repos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + repos.length) % repos.length);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto mt-32">
      <div className="relative overflow-hidden">
        <div
          className="carousel flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {repos.map((repo) => (
            <div key={repo.id} className="carousel-item flex-none w-full">
              <div style={{ marginLeft: 'auto' }}>
              <img src={`https://advance.unab.cl/wp-content/uploads/2020/08/Qu%C3%A9-se-hace-en-Inform%C3%A1tica.jpg`} alt={repo.name} className="mx-auto" />
          </div>
              <h2 className="text-center text-2xl font-bold text-white">{repo.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full mt-4">
        <button onClick={prevSlide} className=" text-white px-4 py-2" style={{
        backgroundColor: "#800020",
      }}>
          Anterior
        </button>
        <button onClick={nextSlide} className=" text-white px-4 py-2" style={{
        backgroundColor: "#800020",
      }}>
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Carousel;