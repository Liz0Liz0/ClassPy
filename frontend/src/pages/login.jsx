import React, { useState } from 'react';
import Input from '../components/input';
import Button from '../components/button';
import { login } from '../services/auth';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await login(username, password);
      if (res.success) {
        alert('Login exitoso!');
      } else {
        setError(res.message);
      }
    } catch (err) {
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-300 via-blue-400 to-cyan-300">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-blue-600 mb-2">User List</h1>
        </div>

        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <Input
            label="Usuario"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Ingrese su usuario"
          />
          <Input
            label="Contraseña"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
          />
          <Button type="submit" className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
            Ingresar
          </Button>
        </form>

        <div className="mt-6 text-center">
          <a href="#" className="text-blue-500 hover:underline text-sm">¿Olvidó su contraseña?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
