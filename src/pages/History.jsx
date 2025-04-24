function History() {
    return (
      <div className="p-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Historial de Capítulos</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded shadow hover:shadow-md transition">
            <a href="#" className="text-lg font-semibold text-gray-800 hover:text-blue-600">🔹 Título del Manga #1 - Capítulo 01</a>
          </li>
          <li className="bg-white p-4 rounded shadow hover:shadow-md transition">
            <a href="#" className="text-lg font-semibold text-gray-800 hover:text-blue-600">🔹 Título del Manga #2 - Capítulo 02</a>
          </li>
          <li className="bg-white p-4 rounded shadow hover:shadow-md transition">
            <a href="#" className="text-lg font-semibold text-gray-800 hover:text-blue-600">🔹 Título del Manga #3 - Capítulo 03</a>
          </li>
        </ul>
      </div>
    );
  }
  
export default History;
  