import React from 'react';
import Navbar from './sections/Nabvar';
import Hero from './sections/Hero';
import AboutAuthor from './sections/AboutAuthor';
import BookFeatures from './sections/BookFeatures';
// import SampleQuiz from './sections/SampleQuiz';
// import Reviews from './sections/Reviews';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const Landing = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-amber-50 to-white">
      <Navbar />
      <Hero />
      <AboutAuthor />
      <BookFeatures />
      {/* <SampleQuiz />
      <Reviews /> */}
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;