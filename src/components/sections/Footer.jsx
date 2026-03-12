import React from 'react';
import { Book, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Book className="h-8 w-8 text-amber-500" />
              <span className="ml-2 text-xl font-bold">Willis Schwichtenberg</span>
            </div>
            <p className="text-gray-400 text-sm">
              Making the Bible accessible and engaging for everyone through unique quizzes and thoughtful teaching.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-amber-500 transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-amber-500 transition">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-500 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">Study Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition">Speaking Events</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-amber-600 transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Willis Schwichtenberg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;