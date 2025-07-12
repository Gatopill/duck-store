// src/app/page.tsx
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Sidebar from "@/components/Sidebar";
import { MongoClient } from "mongodb"; // Importamos el cliente de MongoDB

// Esta es una función asíncrona que se conecta y obtiene los productos
async function getProducts() {
  const uri = process.env.MONGODB_URI; // Leemos la llave secreta desde .env.local
  if (!uri) {
    throw new Error("Falta la variable de entorno MONGODB_URI");
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("duck-store-db"); // Elige un nombre para tu base de datos
    const productsCollection = db.collection("products"); // Y un nombre para tu colección de productos
    
    // Buscamos todos los productos y los convertimos a un array
    const products = await productsCollection.find({}).toArray();
    
    // Mapeamos los datos para que coincidan con lo que espera ProductCard
    return products.map(p => ({
      id: p._id.toString(), // Convertimos el _id de Mongo a un string
      name: p.name,
      price: p.price,
      size: p.size,
      imageUrl: p.imageUrl,
    }));

  } finally {
    await client.close(); // Siempre cerramos la conexión
  }
}

// Convertimos el componente Home en un componente asíncrono para poder usar await
export default async function Home() {
  
  // Llamamos a la función para obtener los productos.
  // Next.js se encargará de hacer esto en el servidor.
  const products = await getProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto p-4 lg:p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
               <div className="lg:col-span-1"><img src="https://i.imgur.com/8Q5yH9G.jpg" alt="Featured Duck" className="rounded-lg object-cover w-full h-full" /></div>
               <div className="lg:col-span-1"><img src="https://i.imgur.com/o2K1QfP.jpg" alt="Featured Duck" className="rounded-lg object-cover w-full h-full" /></div>
               <div className="lg:col-span-2"><img src="https://i.imgur.com/3q1ZqL2.png" alt="Featured Models" className="rounded-lg object-cover w-full h-full" /></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.length > 0 ? (
                products.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    size={product.size}
                    imageUrl={product.imageUrl}
                  />
                ))
              ) : (
                <p className="col-span-full text-center text-gray-500">
                  No hay patitos en la tienda... todavía. ¡Vuelve pronto!
                </p>
              )}
            </div>
          </div>

          <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  );
}