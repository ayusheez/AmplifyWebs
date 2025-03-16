import React from 'react';
import { Search, Palette, Rocket } from 'lucide-react';

export default function HowItWorks() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-r from-black via-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
          How It Works
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Search,
              title: "1. Browse & Choose",
              description: "Explore our collection of professional websites and select the one that best matches your vision."
            },
            {
              icon: Palette,
              title: "2. Customize",
              description: "Tell us your desired changes - from colors and layouts to content and functionality."
            },
            {
              icon: Rocket,
              title: "3. Launch",
              description: "We'll implement your changes and launch your customized website quickly."
            }
          ].map((step, index) => (
            <div key={index} className="bg-purple-900/10 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <step.icon className="w-12 h-12 text-purple-300 mb-4" />
              <h2 className="text-xl font-semibold text-purple-100 mb-4">{step.title}</h2>
              <p className="text-purple-200/70">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-purple-900/10 backdrop-blur-sm rounded-lg border border-purple-500/20 overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-purple-100 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How long does the customization process take?",
                  a: "Most customizations are completed within 3-5 business days, depending on the complexity of changes requested."
                },
                {
                  q: "Can I request multiple revisions?",
                  a: "Yes, we offer multiple revision rounds to ensure you're completely satisfied with your website."
                },
                {
                  q: "Do you provide hosting services?",
                  a: "Yes, all our websites come with reliable hosting and ongoing support."
                },
                {
                  q: "Can I update the website content myself?",
                  a: "Yes, we provide an easy-to-use content management system for regular updates."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-purple-500/20 last:border-0 pb-6 last:pb-0">
                  <h3 className="text-lg font-semibold text-purple-100 mb-2">{faq.q}</h3>
                  <p className="text-purple-200/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}