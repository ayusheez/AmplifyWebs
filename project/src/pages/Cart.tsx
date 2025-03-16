import React, { useState } from 'react';
import { Trash2, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Restaurant Website Template',
      price: 299,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80',
      quantity: 1
    },
    {
      id: '2',
      name: 'Real Estate Platform',
      price: 399,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=80',
      quantity: 1
    }
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-r from-black via-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
          Your Cart
        </h1>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map(item => (
                <div key={item.id} className="bg-purple-900/10 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-purple-100">{item.name}</h3>
                      <p className="text-purple-300">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 rounded-full hover:bg-purple-500/20 text-purple-200 transition-colors duration-200"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-purple-100 w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 rounded-full hover:bg-purple-500/20 text-purple-200 transition-colors duration-200"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 rounded-full hover:bg-red-500/20 text-red-400 transition-colors duration-200 ml-4"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-purple-900/10 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20 h-fit">
              <h2 className="text-2xl font-semibold text-purple-100 mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-purple-200/70">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-purple-200/70">
                  <span>Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-purple-500/20 pt-4">
                  <div className="flex justify-between text-xl font-semibold text-purple-100">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-purple-500/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-500/30 transition duration-300 border border-purple-500/20 mt-6">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-purple-200/70 mb-8">Your cart is empty</p>
            <Link
              to="/templates"
              className="inline-block bg-purple-500/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-500/30 transition duration-300 border border-purple-500/20"
            >
              Browse Templates
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}