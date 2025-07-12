// src/components/Header.tsx
import { Search, User, ShoppingCart } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl text-gray-800">Duck Store</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Clothing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Accessories</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Home</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <Search size={20} />
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <User size={20} />
            </button>
            <button className="relative text-gray-500 hover:text-gray-700">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">1</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}