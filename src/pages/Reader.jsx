import { useParams } from "react-router-dom";

function Reader() {
  const { id } = useParams(); // Recibe el ID del capítulo desde la URL

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">Lector - Capítulo {id}</h2>
      <div className="flex flex-col items-center gap-6">
        {/* Aquí irían las imágenes del capítulo */}
        <div className="w-full max-w-3xl bg-white p-4 rounded shadow">
          <img src="https://via.placeholder.com/800x1200?text=Página+1" alt="Página 1" />
        </div>
        <div className="w-full max-w-3xl bg-white p-4 rounded shadow">
          <img src="https://via.placeholder.com/800x1200?text=Página+2" alt="Página 2" />
        </div>
        {/* Puedes duplicar más imágenes como si fueran páginas */}
      </div>
    </div>
  );
}

export default Reader;
