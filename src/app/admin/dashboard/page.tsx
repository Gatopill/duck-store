// src/app/admin/dashboard/page.tsx
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AddProductForm from './AddProductForm';
import { logout } from '../actions';

export default function DashboardPage() {
  // Primero, verificamos si el usuario tiene la cookie de administrador.
  const isAdmin = cookies().get('isAdmin')?.value === 'true';

  // Si no es admin, lo echamos a la página de login.
  if (!isAdmin) {
    redirect('/admin');
  }

  // Si es admin, mostramos el panel.
  return (
    <div className="container mx-auto p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Panel de Administrador</h1>
        <form action={logout}>
          <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Cerrar Sesión
          </button>
        </form>
      </div>
      <p className="mb-8">¡Bienvenido! Desde aquí puedes añadir nuevos productos a la Duck Store.</p>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Añadir Nuevo Producto</h2>
        <AddProductForm />
      </div>
    </div>
  );
}