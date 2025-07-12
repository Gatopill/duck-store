// src/components/Sidebar.tsx
import { ShoppingCart, Package, Truck, CreditCard, ShieldCheck } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-lg">Duck Store</h2>
        <ShoppingCart className="text-gray-600" />
      </div>

      <div>
        <p className="text-sm text-gray-600">Onpav faire swswabo itoti-re Bethcoanisse fesijourts-ravend</p>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <label htmlFor="shopping-cart" className="flex justify-between items-center text-sm font-medium text-gray-700">
            Enter Shopping Cart <Package className="text-gray-500" />
          </label>
          <button className="mt-2 w-full bg-indigo-500 text-white py-2 rounded-md text-sm font-semibold hover:bg-indigo-600 transition-colors">
            Cndia pnorioonet
          </button>
        </div>

        <div className="p-4 bg-gray-100 rounded-lg">
          <label htmlFor="shipping" className="flex justify-between items-center text-sm font-medium text-gray-700">
            Enter Shipping <Truck className="text-gray-500" />
          </label>
        </div>
        
        <div className="p-4 bg-gray-100 rounded-lg">
          <label htmlFor="billing" className="flex justify-between items-center text-sm font-medium text-gray-700">
            Order Billing amstient <CreditCard className="text-gray-500" />
          </label>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4">
        <h3 className="font-semibold text-md mb-2">Secure Online Payments</h3>
        <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-sm">Donwoo pniae</p>
        </div>
      </div>
    </div>
  );
}