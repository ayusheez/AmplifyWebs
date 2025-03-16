import React from 'react';
import { Users, Rocket, Globe, Shield } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-r from-black via-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
            About AmplifyWebs
          </h1>
          <p className="text-xl text-purple-200/70 max-w-3xl mx-auto">
            We're passionate about transforming the web, one website at a time. Our mission is to make professional web presence accessible to businesses of all sizes.
          </p>
        </div>

        {/* Leadership Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Owner */}
          <div className="bg-purple-900/10 backdrop-blur-sm rounded-lg border border-purple-500/20 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80" 
              alt="David Mitchell - Founder & CEO" 
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-purple-100 mb-2">Ayushi Gautam</h2>
              <p className="text-purple-300 mb-4">Founder & CEO</p>
              <p className="text-purple-200/70">
                With over 1 year of experience in web development and digital strategy, Ayushi founded AmplifyWebs with a vision to democratize professional web design. Her expertise in user experience and business strategy helps drive our mission forward.
              </p>
            </div>
          </div>

          {/* Co-owner */}
          <div className="bg-purple-900/10 backdrop-blur-sm rounded-lg border border-purple-500/20 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&auto=format&fit=crop&q=80" 
              alt="Arshia Chandarki - Co-founder & CTO" 
              className="w-full h-72 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-purple-100 mb-2">Arshia Chandarki</h2>
              <p className="text-purple-300 mb-4">Co-founder & CTO</p>
              <p className="text-purple-200/70">
                Arshia brings her technical innovation and design expertise to AmplifyWebs. With a background in web development and UI/UX design, she ensures our templates combine beautiful aesthetics with robust functionality.
              </p>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: 'Client First', desc: 'Your success is our priority' },
              { icon: Rocket, title: 'Innovation', desc: 'Pushing boundaries in web design' },
              { icon: Globe, title: 'Accessibility', desc: 'Websites for everyone' },
              { icon: Shield, title: 'Quality', desc: 'Excellence in every pixel' }
            ].map((value, index) => (
              <div key={index} className="bg-purple-900/10 backdrop-blur-sm p-6 rounded-lg border border-purple-500/20">
                <value.icon className="w-10 h-10 text-purple-300 mb-4" />
                <h3 className="text-xl font-semibold text-purple-100 mb-2">{value.title}</h3>
                <p className="text-purple-200/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-purple-900/10 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20 text-center">
          <h2 className="text-2xl font-semibold text-purple-100 mb-4">Our Mission</h2>
          <p className="text-purple-200/70 max-w-3xl mx-auto">
            To empower businesses with professional, customizable websites that establish a strong online presence without the complexity and high costs of traditional web development. We believe every business deserves a beautiful, functional website that helps them succeed in the digital world.
          </p>
        </div>
      </div>
    </div>
  );
}