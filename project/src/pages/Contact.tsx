import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const serviceID = "service_h4wyhkz";  // Replace with your EmailJS Service ID
    const templateID = "template_jylj4q9"; // Replace with your EmailJS Template ID
    const publicKey = "JPXRIIaDzubPnKmxs"; // Replace with your EmailJS Public Key

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="pt-24 min-h-screen bg-gradient-to-r from-black via-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
              Get in Touch
            </h1>
            <p className="text-purple-200/70 mb-8">
              Ready to transform your online presence? Contact us to discuss your website customization needs.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-300" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-100">Email</h3>
                  <p className="text-purple-200/70">contact@webcraft.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-purple-300" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-100">Phone</h3>
                  <p className="text-purple-200/70">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-purple-300" />
                <div>
                  <h3 className="text-lg font-semibold text-purple-100">Location</h3>
                  <p className="text-purple-200/70">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-purple-900/10 backdrop-blur-sm p-8 rounded-lg border border-purple-500/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-100 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500/20 text-white focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/40 transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-100 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500/20 text-white focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/40 transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-100 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-black/50 border border-purple-500/20 text-white focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/40 transition-colors duration-200"
                  placeholder="Tell us about your project"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition duration-300 border ${
                  status === 'success'
                    ? 'bg-green-500/20 border-green-500/20 text-green-100'
                    : status === 'sending'
                    ? 'bg-purple-500/10 border-purple-500/10 text-purple-200/50 cursor-not-allowed'
                    : 'bg-purple-500/20 border-purple-500/20 text-white hover:bg-purple-500/30'
                }`}
              >
                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
