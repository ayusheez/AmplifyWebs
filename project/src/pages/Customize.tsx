import React from 'react';
import { Palette, Layout, Code, Zap } from 'lucide-react';

export default function Customize() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-r from-black via-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
          Customize Your Website
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-purple-900/10 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
            <h2 className="text-2xl font-semibold text-purple-100 mb-4">How It Works</h2>
            <p className="text-purple-200/70 mb-6">
              Choose any of our pre-built websites and customize it to match your brand. 
              Our team will help you modify everything from colors to content, ensuring 
              your website perfectly represents your business.
            </p>
            <button className="bg-purple-500/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-500/30 transition duration-300 border border-purple-500/20">
              Start Customizing
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Palette, title: 'Brand Colors', desc: 'Match your brand palette' },
              { icon: Layout, title: 'Layout Changes', desc: 'Adjust the structure' },
              { icon: Code, title: 'Custom Features', desc: 'Add specific functionality' },
              { icon: Zap, title: 'Quick Launch', desc: 'Fast deployment' }
            ].map((item, index) => (
              <div key={index} className="bg-purple-900/10 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                <item.icon className="w-8 h-8 text-purple-300 mb-3" />
                <h3 className="text-lg font-semibold text-purple-100 mb-2">{item.title}</h3>
                <p className="text-purple-200/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-purple-900/10 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
          <h2 className="text-2xl font-semibold text-purple-100 mb-6">Customization Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Choose Template', desc: 'Select your preferred website design' },
              { step: '02', title: 'Specify Changes', desc: 'Tell us your customization needs' },
              { step: '03', title: 'Review & Launch', desc: 'Approve changes and go live' }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-4xl font-bold text-purple-500/20 mb-2">{item.step}</div>
                <h3 className="text-xl font-semibold text-purple-100 mb-2">{item.title}</h3>
                <p className="text-purple-200/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}