import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-semibold">Blueverse Scans</Link>
        <div>
          <Link to="/" className="mr-4 hover:underline">Inicio</Link>
          <Link to="/capitulos" className="mr-4 hover:underline">Capítulos</Link>
          <Link to="/acerca" className="hover:underline">Sobre BVS</Link>
          <Link to="/contacto" className="hover:underline">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
  