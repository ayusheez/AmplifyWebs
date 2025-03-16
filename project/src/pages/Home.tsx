import React from 'react';
import { ArrowRight, Code, Palette, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-purple-900/20 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-purple-100 to-purple-300">
              Transform Your Online Presence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-200/80">
              Professional, ready-made websites customized to your needs
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/portfolio"
                className="bg-purple-500/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/30 transition duration-300 border border-purple-500/20"
              >
                View Portfolio
              </Link>
              <Link
                to="/contact"
                className="bg-black/50 backdrop-blur-sm border border-purple-500/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-black/70 transition duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 - Restaurant Website */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop&q=80" 
                  alt="Luxury restaurant website" 
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Fine Dining Restaurant</h3>
                    <p className="text-purple-200/90 mb-4">Modern website for an upscale dining establishment</p>
                    <a href="#" className="inline-flex items-center text-purple-300 hover:text-purple-100 transition-colors duration-200">
                      View Live Demo <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 - Real Estate Website */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop&q=80" 
                  alt="Luxury real estate website" 
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Luxury Real Estate</h3>
                    <p className="text-purple-200/90 mb-4">Premium property showcase platform</p>
                    <a href="#" className="inline-flex items-center text-purple-300 hover:text-purple-100 transition-colors duration-200">
                      View Live Demo <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 3 - Fashion Store */}
            <div className="group relative">
              <div className="relative overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop&q=80" 
                  alt="Fashion store website" 
                  className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Fashion Boutique</h3>
                    <p className="text-purple-200/90 mb-4">Elegant e-commerce fashion platform</p>
                    <a href="#" className="inline-flex items-center text-purple-300 hover:text-purple-100 transition-colors duration-200">
                      View Live Demo <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-black/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-900/10 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1">
              <Code className="w-12 h-12 text-purple-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-100">Website Customization</h3>
              <p className="text-purple-200/70">
                Tailored modifications to match your brand identity and requirements
              </p>
            </div>
            <div className="bg-purple-900/10 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1">
              <Palette className="w-12 h-12 text-purple-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-100">Design Adaptation</h3>
              <p className="text-purple-200/70">
                Modify colors, layouts, and content to create your perfect website
              </p>
            </div>
            <div className="bg-purple-900/10 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:-translate-y-1">
              <Download className="w-12 h-12 text-purple-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-purple-100">Quick Deployment</h3>
              <p className="text-purple-200/70">
                Fast setup and launch of your customized website
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black via-purple-900/20 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-purple-200/80">
            Let's create your perfect website together
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-purple-500/20 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/30 transition duration-300 border border-purple-500/20"
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}