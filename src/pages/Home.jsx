import mangas from "../data/media";
import MangaCard from "../components/MangaCard";

function Home() {
  // Agrupar mangas por género
  const groupedMangas = mangas.reduce((groups, manga) => {
    const genre = manga.genre || "Otros";
    if (!groups[genre]) groups[genre] = [];
    groups[genre].push(manga);
    return groups;
  }, {});

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Barra de búsqueda */}
      <div className="flex justify-end mb-4">
        <input
          type="text"
          placeholder="Buscar manga o cómic..."
          className="px-3 py-1.5 w-[300px] h-[50px] border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
        Mangas y Cómics Disponibles
      </h2>

      {/* Sección "Todos" */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-[#19478a] mb-4">Todos</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {mangas.map((manga) => (
            <MangaCard
              key={manga.id}
              id={manga.id}
              title={manga.title}
              image={manga.image}
            />
          ))}
        </div>
      </div>

      {/* Mostrar mangas agrupados por género */}
      {Object.entries(groupedMangas).map(([genre, items]) => (
        <div key={genre} className="mb-12">
          <h2 className="text-2xl font-bold text-[#19478a] mb-4">{genre}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {items.map((manga) => (
              <MangaCard
                key={manga.id}
                id={manga.id}
                title={manga.title}
                image={manga.image}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;