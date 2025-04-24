import { Link } from "react-router-dom";

function MangaCard({ id, title, image }) {
  return (
    <Link to={`/manga/${id}`}>
      <div className="bg-white shadow-md rounded overflow-hidden transform hover:scale-105 transition-transform cursor-pointer">
        <img src={image} alt={title} className="w-full h-64 object-cover" />
        <div className="p-3 text-center">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

export default MangaCard;