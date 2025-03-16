import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Features Every Business Website Needs",
      excerpt: "Discover the key elements that make a business website effective and engaging for visitors.",
      date: "March 15, 2024",
      author: "Sarah Chen",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "The Impact of Website Speed on User Experience",
      excerpt: "Learn how website performance affects user engagement and conversion rates.",
      date: "March 12, 2024",
      author: "Marcus Rodriguez",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Designing for Mobile-First: Best Practices",
      excerpt: "Tips and strategies for creating websites that excel on mobile devices.",
      date: "March 8, 2024",
      author: "Aisha Patel",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-purple-900/20 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-100">
          Latest Blog Posts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-purple-900/10 backdrop-blur-sm rounded-lg overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-purple-100 mb-3">
                  {post.title}
                </h2>
                <p className="text-purple-200/70 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-purple-200/50 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                  <User className="w-4 h-4 ml-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-purple-300 hover:text-purple-100 transition-colors duration-200"
                >
                  Read More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}