import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Get in Touch</h2>
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800">Let's Connect</h3>
            <p className="text-gray-600">
              Have questions about the book? Want to schedule Willis for a speaking engagement? 
              We'd love to hear from you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-amber-600 mr-4" />
                <span className="text-gray-700">pastorswitz@ourgodwithus.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-amber-600 mr-4" />
                <span className="text-gray-700">Coming Soon</span>
              </div>
              {/* <div className="flex items-center">
                <MapPin className="h-6 w-6 text-amber-600 mr-4" />
                <span className="text-gray-700">123 Faith Avenue, Springfield, ST 12345</span>
              </div> */}
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none"
              />
            </div>
            <div>
              <input 
                type="email" 
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none"
              />
            </div>
            <div>
              <input 
                type="text" 
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none"
              />
            </div>
            <div>
              <textarea 
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none"
              ></textarea>
            </div>
            <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition flex items-center justify-center w-full">
              Send Message <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;