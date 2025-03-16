import React from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to customize a template?",
      answer: "Most template customizations are completed within 3-5 business days. Complex modifications may take longer, but we'll provide a detailed timeline during consultation."
    },
    {
      question: "Can I request multiple revisions?",
      answer: "Yes, we offer multiple revision rounds to ensure your complete satisfaction. Our standard package includes up to 3 revision rounds, with additional rounds available if needed."
    },
    {
      question: "Do you provide hosting services?",
      answer: "Yes, all our templates come with reliable hosting services. We handle all technical aspects including setup, maintenance, and security updates."
    },
    {
      question: "Can I update the website content myself?",
      answer: "Absolutely! We provide an intuitive content management system that allows you to easily update text, images, and other content without technical knowledge."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers. Payment plans are available for larger projects."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide dedicated support for all our clients. Our standard package includes 30 days of free support, with options to extend support coverage."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-purple-900/20 to-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-purple-900/10 backdrop-blur-sm rounded-lg border border-purple-500/20"
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-purple-100">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-purple-300" />
                ) : (
                  <Plus className="w-5 h-5 text-purple-300" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 text-purple-200/70">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}