import mangas from "../data/media";
import MangaCard from "../components/MangaCard";

function Home() {
    return (
      <div className="flex justify-end mt-4 mb-4 px-4">
        <input type="text" 
        placeholder="Buscar manga o cómic..." 
        className="px-3 py-1.5 w-[300px] h-[50px] border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" 
        />
        <div className="p-6 bg-gray-100 min-h-screen">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Mangas y Cómics Disponibles</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {mangas.map((manga) => (
              <MangaCard key={manga.id} id={manga.id} title={manga.title} image={manga.image} />
            ))}
          </div>
        </div>
      </div>
    );
  }
 
export default Home;
  