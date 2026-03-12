import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const quizQuestions = [
  {
    question: "Which Old Testament figure is described as having 'eyes that were weak' but lived to be 180 years old?",
    options: ["Abraham", "Isaac", "Jacob", "Moses"],
    correct: 1,
    explanation: "Isaac's eyes were weak when he blessed Jacob (Genesis 27:1), and he lived to be 180 years old (Genesis 35:28-29)."
  },
  {
    question: "What was the name of Moses' sister who watched over him in the bulrushes?",
    options: ["Miriam", "Rachel", "Leah", "Deborah"],
    correct: 0,
    explanation: "Miriam, Moses' sister, watched over him when he was placed in the Nile River (Exodus 2:4-8)."
  }
];

const SampleQuiz = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState({});

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: optionIndex
    });
  };

  const checkAnswer = (questionIndex) => {
    setShowResults({
      ...showResults,
      [questionIndex]: true
    });
  };

  return (
    <section id="quiz" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Try a Sample Quiz</h2>
        <div className="w-24 h-1 bg-amber-600 mx-auto mb-12"></div>
        
        <div className="bg-amber-50 rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="space-y-8">
            {quizQuestions.map((q, qIndex) => (
              <div key={qIndex} className="bg-white p-6 rounded-lg shadow">
                <p className="text-lg font-semibold mb-4">{qIndex + 1}. {q.question}</p>
                <div className="space-y-2">
                  {q.options.map((option, oIndex) => (
                    <label 
                      key={oIndex} 
                      className={`flex items-center space-x-3 p-3 rounded cursor-pointer transition ${
                        selectedAnswers[qIndex] === oIndex 
                          ? 'bg-amber-100 border-2 border-amber-600' 
                          : 'hover:bg-amber-50 border-2 border-transparent'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name={`question-${qIndex}`} 
                        value={oIndex}
                        checked={selectedAnswers[qIndex] === oIndex}
                        onChange={() => handleAnswerSelect(qIndex, oIndex)}
                        className="text-amber-600"
                      />
                      <span className="flex-1">{option}</span>
                      {showResults[qIndex] && selectedAnswers[qIndex] === oIndex && (
                        oIndex === q.correct 
                          ? <CheckCircle className="h-5 w-5 text-green-600" />
                          : <XCircle className="h-5 w-5 text-red-600" />
                      )}
                    </label>
                  ))}
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <button
                    onClick={() => checkAnswer(qIndex)}
                    disabled={selectedAnswers[qIndex] === undefined}
                    className={`px-4 py-2 rounded transition ${
                      selectedAnswers[qIndex] !== undefined
                        ? 'bg-amber-600 text-white hover:bg-amber-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Check Answer
                  </button>
                  
                  {showResults[qIndex] && (
                    <div className="text-sm text-gray-600">
                      {selectedAnswers[qIndex] === q.correct ? (
                        <span className="text-green-600">✓ Correct! {q.explanation}</span>
                      ) : (
                        <span className="text-red-600">✗ {q.explanation}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition">
              Get the Full Book for More Quizzes!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleQuiz;