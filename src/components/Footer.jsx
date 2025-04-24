import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Blueverse Scans. Todos los derechos correspondientes a los autores originales.
        </p>
        <p className="text-xs mt-1">Este sitio es un proyecto sin fines de lucro.</p>
      </div>
    </footer>
  );
};

export default Footer;
