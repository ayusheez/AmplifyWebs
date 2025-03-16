import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-purple-300" />
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100">AmplifyWebs</h3>
            </div>
            <p className="text-purple-200/70">
              Empowering businesses with professional website templates.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/templates" className="text-purple-200/70 hover:text-purple-200 transition-colors duration-200">Templates</Link></li>
              <li><Link to="/customize" className="text-purple-200/70 hover:text-purple-200 transition-colors duration-200">Customize</Link></li>
              <li><Link to="/how-it-works" className="text-purple-200/70 hover:text-purple-200 transition-colors duration-200">How It Works</Link></li>
              <li><Link to="/blog" className="text-purple-200/70 hover:text-purple-200 transition-colors duration-200">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-100">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-purple-200/70 hover:text-purple-200 transition-colors duration-200">Contact</Link></li>
              <li><Link to="/faq" className="text-purple-200/70 hover:text-purple-200 transition-colors duration-200">FAQ</Link></li>
              <li><Link to="/privacy" className="text-purple-200/70 hover:text-purple-200 transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-purple-200/70 hover:text-purple-200 transition-colors duration-200">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-purple-100">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-purple-200/70 hover:text-purple-200 transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-purple-200/70 hover:text-purple-200 transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-purple-200/70 hover:text-purple-200 transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-purple-200/70 hover:text-purple-200 transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-purple-200/70 hover:text-purple-200 transition-colors duration-200">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-purple-200/70">
          <p>&copy; {new Date().getFullYear()} AmplifyWebs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}