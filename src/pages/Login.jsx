import { useEffect, useState } from 'react';

function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const cambioForm = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const requestLogin = () => {
    console.log(loginData);
    getData();
    alert('requesting login');
  };

  async function getData() {
    const url = "https://example.org/products.json";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    console.log('testing useEffect');
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
        <form onSubmit={(e) => { e.preventDefault(); requestLogin(); }}>
          <div className="mb-4">
            <label className="block text-sm mb-1">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={cambioForm}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring focus:border-blue-500"
              placeholder="tucorreo@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-1">Contraseña</label>
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={cambioForm}
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring focus:border-blue-500"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
