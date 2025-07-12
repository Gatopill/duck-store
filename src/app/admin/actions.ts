// src/app/admin/actions.ts
'use server'; // ¡Esto marca que todo en este archivo es una Server Action!

import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function login(formData: FormData) {
  const secretCode = formData.get('secretCode');

  // Comparamos el código del formulario con el que guardamos en .env.local
  if (secretCode === process.env.ADMIN_SECRET_CODE) {
    // Si el código es correcto, creamos una "cookie" para recordar que estamos logueados.
    cookies().set('isAdmin', 'true', {
      httpOnly: true, // La cookie no es accesible desde JavaScript en el navegador (más seguro)
      secure: process.env.NODE_ENV === 'production', // Solo se envía por HTTPS en producción
      maxAge: 60 * 60 * 24, // La cookie dura 1 día
    });
    
    // Redirigimos al panel de control
    redirect('/admin/dashboard');
  }

  // Si el código es incorrecto, devolvemos un mensaje de error.
  return 'Código secreto inválido.';
}

export async function logout() {
  // Borramos la cookie para cerrar sesión
  cookies().set('isAdmin', '', { expires: new Date(0) });
  redirect('/admin');
}