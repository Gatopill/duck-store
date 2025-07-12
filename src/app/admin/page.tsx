// src/app/admin/page.tsx
'use client'; // Este componente necesita interactividad en el navegador

import { useState } from 'react';
import { login } from './actions'; // Importamos la acción del servidor que crearemos ahora

export default function AdminLoginPage() {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const errorMessage = await login(formData);
    
    if (errorMessage) {
      setError(errorMessage);
    }
    // Si no hay error, la acción 'login' ya nos habrá redirigido.
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Acceso de Administrador</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="secretCode" className="block text-sm font-medium text-gray-700 mb-2">
              Código Secreto
            </label>
            <input
              type="password"
              id="secretCode"
              name="secretCode"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}