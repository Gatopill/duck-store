// src/app/admin/dashboard/AddProductForm.tsx
'use client';
import { addProduct } from './actions';
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors disabled:bg-gray-400">
      {pending ? 'Añadiendo...' : 'Añadir Producto'}
    </button>
  );
}

export default function AddProductForm() {
  const [state, formAction] = useFormState(addProduct, { message: null });
  
  return (
    <form action={formAction}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input name="name" placeholder="Nombre del Producto" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        <input name="price" placeholder="Precio (ej: 25Dtmim)" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        <input name="size" placeholder="Tamaño (ej: 210 mm)" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
        <input name="imageUrl" placeholder="URL de la Imagen" type="url" required className="w-full px-3 py-2 border border-gray-300 rounded-md" />
      </div>
      <SubmitButton />
      {state.message && <p className="mt-4 text-green-600">{state.message}</p>}
    </form>
  );
}