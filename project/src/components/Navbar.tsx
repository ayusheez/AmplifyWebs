import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="w-full z-50 bg-purple-900/5 backdrop-blur-sm border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <Zap className="w-8 h-8 text-purple-300" />
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100">AmplifyWebs</span>
            </Link>
          </div>

          {/* Menu button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full bg-purple-500/10 text-purple-200 hover:bg-purple-500/20 focus:outline-none transition-all duration-200 border border-purple-500/20"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Side menu with solid black background */}
      <div 
        className={`fixed inset-y-0 right-0 w-full md:w-80 bg-black transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
      >
        <div className="h-full flex flex-col pt-20 px-8">
          <div className="flex flex-col space-y-6">
            <Link 
              to="/" 
              className="text-purple-200 hover:text-purple-100 text-lg font-light tracking-wider transition-colors duration-200 border-b border-purple-500/20 pb-2"
            >
              Home
            </Link>
            
            <Link 
              to="/templates" 
              className="text-purple-200 hover:text-purple-100 text-lg font-light tracking-wider transition-colors duration-200 border-b border-purple-500/20 pb-2"
            >
              Templates
            </Link>
            <Link 
              to="/customize" 
              className="text-purple-200 hover:text-purple-100 text-lg font-light tracking-wider transition-colors duration-200 border-b border-purple-500/20 pb-2"
            >
              Customize
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-purple-200 hover:text-purple-100 text-lg font-light tracking-wider transition-colors duration-200 border-b border-purple-500/20 pb-2"
            >
              How It Works
            </Link>

            <Link 
              to="/about" 
              className="text-purple-200 hover:text-purple-100 text-lg font-light tracking-wider transition-colors duration-200 border-b border-purple-500/20 pb-2"
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-purple-200 hover:text-purple-100 text-lg font-light tracking-wider transition-colors duration-200 border-b border-purple-500/20 pb-2"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
          style={{ pointerEvents: 'auto' }}
        ></div>
      )}
    </nav>
  );
}