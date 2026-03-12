import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Pastor Michael Thompson",
    role: "Senior Pastor, Grace Community Church",
    content: "This book has revolutionized our small group studies. The questions spark deep conversations and genuine spiritual growth.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Sarah Johnson",
    role: "Bible Study Leader",
    content: "I've been teaching Bible studies for 15 years, and this is by far the most engaging resource I've ever used. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108777-466d5e30962c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Dr. Robert Chen",
    role: "Theology Professor",
    content: "Schwichtenberg has created a masterpiece that combines academic rigor with practical application. A must-have for any serious student.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">What Readers Are Saying</h2>
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-amber-50 p-8 rounded-xl shadow-lg relative">
              <Quote className="absolute top-4 right-4 h-8 w-8 text-amber-300" />
              
              <div className="flex items-center mb-4">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-bold text-gray-800">{review.name}</h3>
                  <p className="text-sm text-gray-600">{review.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-amber-600 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 italic">{review.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;