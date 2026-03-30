import React, { useState } from 'react';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/belnaskevin4@gmail.com', {
        method: 'POST',
        body: formData
      });
      
      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <span className="text-gray-700">pastorswitz@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-amber-600 mr-4" />
                <span className="text-gray-700">Coming Soon</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {showSuccess && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                <span>Message sent successfully! We'll get back to you soon.</span>
              </div>
            )}
            
            <div>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none"
              />
            </div>
            <div>
              <input 
                type="email" 
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none"
              />
            </div>
            <div>
              <input 
                type="text" 
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none"
              />
            </div>
            <div>
              <textarea 
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none"
              ></textarea>
            </div>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_next" value={window.location.href} />
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition flex items-center justify-center w-full disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'} 
              <Send className="ml-2 h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;