import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Templates() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-r from-black via-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
          Our Website Collection
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Template Cards */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-purple-900/10 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-500/20 group hover:border-purple-500/40 transition-all duration-300">
              <img 
                src={`https://images.unsplash.com/photo-${item === 1 ? '1517248135467-4c7edcad34c4' : 
                      item === 2 ? '1560448204-e02f11c3d0e2' : 
                      item === 3 ? '1445205170230-053b83016050' :
                      item === 4 ? '1537953773345-d172ccf13cf1' :
                      item === 5 ? '1542744173-8659bbecc669' :
                      '1531973576343-803e069317ff'}?w=800&auto=format&fit=crop&q=80`}
                alt={`Website template ${item}`}
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-purple-100 mb-2">
                  {item === 1 ? 'Restaurant Website' :
                   item === 2 ? 'Real Estate Platform' :
                   item === 3 ? 'Fashion Store' :
                   item === 4 ? 'Corporate Site' :
                   item === 5 ? 'Portfolio Template' :
                   'Tech Startup'}
                </h3>
                <p className="text-purple-200/70 mb-4">
                  {item === 1 ? 'Modern design for restaurants and cafes' :
                   item === 2 ? 'Luxury real estate showcase' :
                   item === 3 ? 'E-commerce fashion platform' :
                   item === 4 ? 'Professional corporate presence' :
                   item === 5 ? 'Creative portfolio showcase' :
                   'Modern startup landing page'}
                </p>
                <a href="#" className="inline-flex items-center text-purple-300 hover:text-purple-100 transition-colors duration-200">
                  View Demo <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}