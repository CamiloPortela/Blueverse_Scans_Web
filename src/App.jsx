import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Chapters from "./pages/Chapters";
import Reader from "./pages/Reader";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MangaDetails from "./pages/MangaDetails";
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/capitulos" element={<Chapters />} />
        <Route path="/lectura/:id" element={<Reader />} />
        <Route path="/acerca" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/manga/:id" element={<MangaDetails />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
