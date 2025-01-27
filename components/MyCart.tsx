'use client';
import { FC, useState } from 'react';
import { X, Heart, Trash, Minus, Plus, Info } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const MyCart: FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      price: 9000,
      quantity: 2,
      image: '/placeholder.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 12000,
      quantity: 1,
      image: '/placeholder.jpg',
    },
  ]);

  const updateQuantity = (id: number, increment: boolean) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? {
              ...product,
              quantity: increment
                ? product.quantity + 1
                : Math.max(1, product.quantity - 1),
            }
          : product
      )
    );
  };

  const removeProduct = (id: number) => {
    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
  };

  const totalAmount = products.reduce((sum, product) => sum + product.price * product.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 pb-2 border-b">
        <div className="flex items-center gap-2">
          <button className="p-1">
            <X className="w-5 h-5" />
          </button>
          <h2 className="font-semibold">My Cart ({products.length})</h2>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
            <Heart className="w-5 h-5" />
            <span>Save Cart For Later</span>
          </button>
          <button className="p-2 border rounded-lg">
            <Trash className="w-5 h-5 text-red-500" />
          </button>
        </div>
      </div>

      {/* Info banner */}
      <div className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg mb-4">
        <Info className="w-5 h-5 text-gray-600" />
        <p className="text-sm text-gray-600">By proceeding you won&#39;t be charged yet</p>
      </div>

      {/* Product list */}
      <div className="space-y-4">
        {products.map((product, index) => (
          <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center gap-4">
              <span className="text-gray-500">{index + 1}</span>
              <img
                src={product.image}
                alt={`Image of ${product.name}`}
                className="w-16 h-16 bg-gray-100 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-gray-600">{product.price.toLocaleString()} Rwf</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(product.id, false)}
                  className="p-2 border rounded-l-lg"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <div className="px-4 py-2 border-t border-b bg-gray-50 min-w-[3rem] text-center">
                  {product.quantity}
                </div>
                <button
                  onClick={() => updateQuantity(product.id, true)}
                  className="p-2 border rounded-r-lg"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => removeProduct(product.id)}
                className="p-2 border rounded-lg"
              >
                <Trash className="w-4 h-4 text-red-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t">
        <div className="max-w-2xl mx-auto flex justify-between items-center">
          <div>
            <p className="text-gray-600">Total:</p>
            <p className="text-xl font-bold">{totalAmount.toLocaleString()} Rwf</p>
          </div>
          <button className="bg-[#CDDE00] text-black px-6 py-3 rounded-lg flex items-center gap-2">
            <span>Checkout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
