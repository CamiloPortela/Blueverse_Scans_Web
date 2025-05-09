import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import History from "./pages/History";
import Reader from "./pages/Reader";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MangaDetails from "./pages/MangaDetails";
import Footer from './components/Footer';
import Login from './pages/Login';

function App() {
  return (
    <div className="min-h-screen bg-[#99a2b8]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historial" element={<History />} />
        <Route path="/lectura/:id" element={<Reader />} />
        <Route path="/acerca" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/manga/:id" element={<MangaDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
