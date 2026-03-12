import React from 'react';
import { GraduationCap, Star, HelpCircle, Users, Brain, Tv, Church, Calendar, Clock, Radio } from 'lucide-react';

const features = [
  {
    icon: <HelpCircle className="h-8 w-8 text-amber-600" />,
    title: "75 Bible Stumpers",
    description: "Thought-provoking questions that will challenge even seasoned Bible scholars and spark meaningful discussions."
  },
  {
    icon: <Church className="h-8 w-8 text-amber-600" />,
    title: "Holy Week Dramas",
    description: "Access to 25+ dramatic presentations centering on the Last Supper, betrayal, crucifixion, and Resurrection."
  },
  {
    icon: <Calendar className="h-8 w-8 text-amber-600" />,
    title: "Reformation Dramas",
    description: "First-person depictions of Martin Luther and other Reformation-themed presentations for church services."
  },
  {
    icon: <Users className="h-8 w-8 text-amber-600" />,
    title: "200+ Published Quizzes",
    description: "Drawing from Pastor Willis's extensive collection of over 200 published Bible quizzes."
  },
  {
    icon: <Brain className="h-8 w-8 text-amber-600" />,
    title: "Deep Biblical Insight",
    description: "Crafted by a pastor with 40+ years of experience teaching and preaching God's Word."
  },
  {
    icon: <Clock className="h-8 w-8 text-amber-600" />,
    title: "Proven Ministry Resource",
    description: "Used in churches across Wisconsin and Illinois, tested in real congregational settings."
  }
];

const BookFeatures = () => {
  return (
    <section id="features" className="py-20 px-4 bg-amber-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">What Makes This Book Unique</h2>
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-4"></div>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Drawing from Pastor Willis Schwichtenberg's 40+ years of ministry and 200+ published quizzes
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition group">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                <div className="group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Information Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">More From Pastor Willis</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-amber-700">Media Ministry</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Radio className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><span className="font-medium">"Introspect"</span> - Weekly radio program broadcasting since 1983</span>
                </li>
                <li className="flex items-start">
                  <Tv className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700"><span className="font-medium">"Our God With Us"</span> - Weekly Cable TV program since 2000</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-amber-700">Teaching Ministry</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <GraduationCap className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Taught for 5 years at Luther Bible College</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Supervised 13 student pastors</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookFeatures;