// src/components/ProductCard.tsx
interface ProductCardProps {
  name: string;
  price: string;
  size: string;
  imageUrl: string;
}

export default function ProductCard({ name, price, size, imageUrl }: ProductCardProps) {
  return (
    <div className="group">
      <div className="aspect-square w-full bg-gray-100 rounded-lg overflow-hidden mb-2">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity"
        />
      </div>
      <h3 className="text-sm font-medium text-gray-800">{name}</h3>
      <p className="text-xs text-gray-500">{price}</p>
      <p className="text-xs text-gray-500">{size}</p>
    </div>
  );
}