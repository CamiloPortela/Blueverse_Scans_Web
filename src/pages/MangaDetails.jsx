import { useParams } from "react-router-dom";
import mangas from "../data/media";
import { Link } from 'react-router-dom';

function MangaDetails() {
  const { id } = useParams();
  const manga = mangas.find((m) => m.id === parseInt(id));
  const chapters = [
    { number: 1, title: "Capítulo 1" },
    { number: 2, title: "Capítulo 2" },
    { number: 3, title: "Capítulo 3" },
    { number: 4, title: "Capítulo 4" },
  ];

  if (!manga) {
    return <div className="text-center text-red-500 mt-20">Manga no encontrado</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded shadow">
      <img src={manga.image} alt={manga.title} className="w-full h-96 object-cover rounded mb-6" />
      <h1 className="text-3xl font-bold text-blue-600 mb-2">{manga.title}</h1>
      <p className="text-gray-700 text-lg mb-2">{manga.description}</p>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-blue-600 mb-4">Capítulos disponibles</h3>
        <ul className="text-gray-700">
          {chapters.map((chapter) => (
            <li key={chapter.number}>
              <Link to={`/leer/${manga.title.toLowerCase().replace(/\s+/g, "-")}/cap-${chapter.number}`}>
                {chapter.title}
              </Link>
            </li>
          ))}
        </ul>
        <button className="px-5 py-2 mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded">
          Leer desde el principio
        </button>
      </div>
    </div>
  );
}

export default MangaDetails;
