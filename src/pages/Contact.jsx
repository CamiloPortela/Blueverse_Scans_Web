function Contact() {
    return (
      <div className="p-6 bg-[#99a2b8] min-h-screen">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Contacto / Unirse al Scan</h2>
  
        <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">¿Te gustaría unirte a nuestro equipo de traducción o contactar con nosotros?</h3>
          <p className="text-lg text-gray-700 mb-4">
            Si eres un traductor de manga, editor, o simplemente un fan apasionado que quiere ayudar con el proyecto,
            ¡estamos buscando colaboradores! También puedes contactarnos si tienes alguna pregunta o sugerencia.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Puedes contactarnos o unirte al equipo a través de los siguientes enlaces:
          </p>
  
          <div className="mt-6 flex justify-center space-x-6">
            <a
              href="https://discord.com/invite/your-discord-link" // Aquí pones el enlace real de tu servidor de Discord
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-xl font-semibold"
            >
              <i className="fab fa-discord mr-2"></i> Discord
            </a>
            <a
              href="https://twitter.com/your-twitter-link" // Aquí pones tu enlace real de Twitter
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-xl font-semibold"
            >
              <i className="fab fa-twitter mr-2"></i> Twitter
            </a>
          </div>
        </div>
      </div>
    );
  }
  
export default Contact;
  