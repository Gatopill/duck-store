// src/app/admin/dashboard/actions.ts
'use server';

import { MongoClient } from 'mongodb';
import { revalidatePath } from 'next/cache';

export async function addProduct(prevState: any, formData: FormData) {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error('Falta MONGODB_URI');

  const product = {
    name: formData.get('name'),
    price: formData.get('price'),
    size: formData.get('size'),
    imageUrl: formData.get('imageUrl'),
  };

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('duck-store-db');
    await db.collection('products').insertOne(product);
  } catch (e) {
    return { message: 'Error al añadir el producto.' };
  } finally {
    await client.close();
  }

  // Le decimos a Next.js que los datos de la página principal han cambiado
  // y que necesita volver a cargarlos.
  revalidatePath('/'); 
  
  return { message: `¡Producto "${product.name}" añadido con éxito!` };
}