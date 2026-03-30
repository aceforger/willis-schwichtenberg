import React from 'react';
import { Award, Users, Book, Heart, Radio, Tv, Church, Calendar } from 'lucide-react';

const AboutAuthor = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">About Pastor Willis Schwichtenberg</h2>
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <img 
              src="/images/book5.png" 
              alt="Pastor Willis Schwichtenberg" 
              className="rounded-2xl shadow-xl w-full h-auto"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              Pastor Willis Schwichtenberg is a Lutheran pastor who has served several different 
              churches in Wisconsin and Illinois for more than 40 years. His ministry has touched 
              countless lives through preaching, teaching, and creative writing.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              More than 200 of his Bible quizzes have been published, and he has written more than 
              25 Holy Week dramatic presentations centering on the Last Supper, Christ's betrayal, 
              the crucifixion, and the Resurrection. He has also written Reformation dramas and 
              first-person depictions of Martin Luther.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              In addition to being a parish pastor, he supervised 13 student pastors, taught for 
              5 years at Luther Bible College, and continues to reach audiences through media:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start">
                <Radio className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Weekly radio program "Introspect" - broadcasting since 1983</span>
              </div>
              <div className="flex items-start">
                <Tv className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Weekly Cable TV program "Our God With Us" - since 2000</span>
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Family Life</h3>
              <p className="text-gray-700">
                Pastor Willis has 4 adult children and 5 grandchildren. He is a native of Minnesota and has 
                lived in Freeport, Illinois for nearly 35 years.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg shadow-sm">
                <Church className="h-6 w-6 text-amber-600 mb-2" />
                <span className="text-sm font-medium text-gray-800">40+ Years</span>
                <span className="text-xs text-gray-600">Ministry</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg shadow-sm">
                <Book className="h-6 w-6 text-amber-600 mb-2" />
                <span className="text-sm font-medium text-gray-800">200+</span>
                <span className="text-xs text-gray-600">Published Quizzes</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg shadow-sm">
                <Calendar className="h-6 w-6 text-amber-600 mb-2" />
                <span className="text-sm font-medium text-gray-800">25+</span>
                <span className="text-xs text-gray-600">Dramas Written</span>
              </div>
              <div className="flex flex-col items-center text-center p-3 bg-white rounded-lg shadow-sm">
                <Heart className="h-6 w-6 text-amber-600 mb-2" />
                <span className="text-sm font-medium text-gray-800">9</span>
                <span className="text-xs text-gray-600">Children & Grandchildren</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;