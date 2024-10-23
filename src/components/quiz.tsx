import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Heart, Gift, ArrowLeft } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "What was the date of the incident mentioned in what you read?",
    description: "(format MMDDYYYY. If 1st December, 2024: 12012024)",
    answer: "answer"
  },
  {
    id: 2,
    question: "Which town were you in when you saw that message?",
    answer: "answer"
  },
  {
    id: 3,
    question: "Which Bangalore neighbourhood did we decide to give us a real shot in?",
    answer: "answer"
  },
  {
    id: 4,
    question: "What was the place we met at when you wore a Saree in front of me for the first time?",
    answer: "answer"
  },
  {
    id: 5,
    question: "Which place do we aspire to move to when you come back to India?",
    answer: "answer"
  },
  {
    id: 6,
    question: "What's the name of my car model which you hated first but then started recognising it all over?",
    description: "(Just the name without the company name)",
    answer: "answer"
  },
  {
    id: 7,
    question: "What do you like being called that makes you melt in bed?",
    answer: "answer"
  },
  {
    id: 8,
    question: "What did I cook for you on the first night where we shared the tenderness we feel for each other?",
    answer: "answer"
  }
];

export default function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showRewards, setShowRewards] = useState(false);
  const [currentAttempt, setCurrentAttempt] = useState("");
  const [isWrong, setIsWrong] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");

  const currentQuestion = questions[currentQuestionIndex];

  const handleInputChange = (value) => {
    setCurrentAttempt(value);
    setIsWrong(false);
  };

  const handleSubmit = () => {
    if (currentAttempt.toLowerCase().trim() === currentQuestion.answer.toLowerCase()) {
      setAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: true
      }));
      
      if (currentQuestionIndex < questions.length - 1) {
        setSlideDirection("right");
        setTimeout(() => {
          setCurrentQuestionIndex(prev => prev + 1);
          setCurrentAttempt("");
        }, 300);
      } else {
        setShowRewards(true);
      }
    } else {
      setIsWrong(true);
    }
  };

  const goBack = () => {
    if (currentQuestionIndex > 0) {
      setSlideDirection("left");
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev - 1);
        setCurrentAttempt("");
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Pragathi × Rishabh</h1>
          <p className="text-lg text-gray-700 mb-6">
            Hey love! I've prepared something special for you. Answer these questions correctly to unlock three surprises that I've carefully prepared just for you. Each question holds a memory we've shared together.
          </p>
          <div className="flex justify-center gap-4 mb-8">
            <Heart className="text-blue-500 animate-pulse" size={24} />
            <Gift className="text-blue-500" size={24} />
            <Heart className="text-blue-500 animate-pulse" size={24} />
          </div>
        </div>

        {!showRewards && (
          <div className="relative">
            <Card className={`border-2 border-blue-200 transition-all duration-300 transform 
              ${slideDirection === "right" ? "slide-right" : "slide-left"}`}>
              <CardHeader>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm text-blue-500">Question {currentQuestionIndex + 1} of {questions.length}</span>
                  <div className="flex gap-2">
                    {currentQuestionIndex > 0 && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={goBack}
                        className="text-blue-500 border-blue-200"
                      >
                        <ArrowLeft className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-800">{currentQuestion.question}</CardTitle>
                {currentQuestion.description && (
                  <p className="text-sm text-gray-600 mt-2">{currentQuestion.description}</p>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your answer..."
                    value={currentAttempt}
                    onChange={(e) => handleInputChange(e.target.value)}
                    className={`${isWrong ? 'border-red-500' : 'border-blue-200'} transition-colors`}
                  />
                  {isWrong && (
                    <p className="text-red-500 text-sm animate-bounce">Try again, love!</p>
                  )}
                  <Button 
                    onClick={handleSubmit}
                    className="w-full bg-blue-500 hover:bg-blue-600 transition-colors"
                  >
                    {currentQuestionIndex === questions.length - 1 ? "Unlock Your Surprises" : "Next Question"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {showRewards && (
          <Card className="mt-8 border-2 border-blue-500 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Congratulations, my love! 💝</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                  <h3 className="font-semibold text-lg mb-2">💌 Your English Letter</h3>
                  <p>[Letter Content Here]</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                  <h3 className="font-semibold text-lg mb-2">💝 A Longer Letter</h3>
                  <p>[Longer Letter Content Here]</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                  <h3 className="font-semibold text-lg mb-2">🎵 Our Playlist</h3>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 underline"
                  >
                    Click here to listen to our memories
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}