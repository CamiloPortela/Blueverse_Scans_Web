import { useParams } from "react-router-dom";
import mangas from "../data/media";

function MangaDetails() {
  const { id } = useParams();
  const manga = mangas.find((m) => m.id === parseInt(id));

  if (!manga) {
    return <div className="text-center text-red-500 mt-20">Manga no encontrado</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <img src={manga.image} alt={manga.title} className="w-full h-96 object-cover rounded mb-6" />
      <h1 className="text-3xl font-bold text-blue-600 mb-2">{manga.title}</h1>
      <p className="text-gray-700 text-lg mb-6">{manga.description}</p>
      <button className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
        Leer
      </button>
    </div>
  );
}

export default MangaDetails;
