import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8 xl:px-12">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
          
          {/* Left Content - Text */}
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 text-center md:text-left order-2 md:order-1">
            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 leading-tight">
              Discover the Bible in a
              <span className="text-amber-600 block sm:inline mt-1 sm:mt-0"> Whole New Way</span>
            </h1>
            
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0">
              Join Willis Schwichtenberg on an exciting journey through Scripture with 
              <span className="font-semibold text-amber-700"> "Unique Bible Quizzes"</span> - 
              75 thought-provoking Bible stumpers that will challenge your knowledge 
              and deepen your understanding of God's Word.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 pt-2 sm:pt-3 md:pt-4 justify-center md:justify-start">
              <button className="w-full sm:w-auto bg-amber-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-amber-700 transition flex items-center justify-center whitespace-nowrap">
                Get Your Copy 
                <ChevronRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
              <button className="w-full sm:w-auto border-2 border-amber-600 text-amber-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-amber-50 transition whitespace-nowrap">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2">
            <div className="relative max-w-[200px] xs:max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[400px] xl:max-w-[450px]">
              {/* Book Cover Container */}
              <div className="bg-amber-100 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 lg:p-8 shadow-xl sm:shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="/images/book.png" 
                  alt="Unique Bible Quizzes Book Cover" 
                  className="rounded-lg shadow-lg w-full h-auto"
                  loading="lazy"
                />
              </div>
              
              {/* Bestseller Badge */}
              <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 md:-bottom-5 md:-right-5 bg-amber-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-xl">
                <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold whitespace-nowrap">
                  ⭐ Bestseller!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for extra small devices */}
      <style jsx>{`
        @media (min-width: 380px) {
          .xs\\:max-w-[250px] {
            max-width: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;