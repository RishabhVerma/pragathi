/* eslint-disable */
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Heart, Gift, ArrowLeft } from 'lucide-react';

const ENGLISH_LETTER = `
Hey, it's your birthday today. You know I've never been big on celebrating these things - most years they just pass by like any other day. But with you, it feels different. Special enough that I wanted to do something that matters. Yes, I could have sent this without the physical print as well. But I thought designing this like a little game would be fun for you as well. There’s a lot coming. Read on.

We're in the thick of it right now, aren't we? The distance, the time zones, the screens between us - none of it's easy. Figuring out a "Remote" relationship. But then again, what else were we expecting? It's hard, but we're making it work. One day at a time, one call at a time. That first meeting (which you kept pushing back, you tease) is still so vivid. Walking half-soaked, thinking to myself "this better be worth the wait." Spoiler alert: it absolutely was. Even when we were trying to keep things casual, to be "realistic" about what this was, something felt different. Despite both of us being stubborn about keeping it short-term, every moment just felt... natural. Easy. So damn easy. Looking back, it's mind bending to think how far we've come. 

From the first sweet, yet non committal birthday message I sent (probably too intense for someone I'd only met twice), to now. From wishing you all the good things from afar, to wanting to be right there beside you when they happen.

There's more to this - something sweeter - but you'll have to work for it. Follow the clues, solve the puzzle. I would've put it all here, but some things are just meant to stay between us.
`

const ANOTHER_LETTER = `
Baby, you know what's funny? I never imagined us as an actual possibility until that day at the coffee shop. Sure, we'd shared wonderful moments before, but it just didn't seem real. Then I saw you walk in wearing that red dress, and my heart just stopped. It was like seeing you for the first time all over again. That moment? Pure magic.

Distance is tough, and yeah, we've had our share of rough patches. But you've become my anchor in all this chaos. When work gets crazy or life feels overwhelming, just thinking about our future together brings me peace. It's like finding this incredible upgrade to life I never knew I needed.

Someone once told me that when you're on a long drive at night, you don't need to see the whole road - just the next few meters lit by your headlights. That's how I feel about us. We might not have everything figured out, but I know we're heading somewhere beautiful together. We'll get through anything that comes our way. I love you.

Reasons I love you -

1. YOUR TITS! YOUR TITS! YOUR TITS! YOUR TITS! YOUR TITS! YOUR TITS! YOUR TITS!
2. Sometimes, I throw a lot of shade at you for this but your relentless-ness to do something coz you want to do it is so inspiring. From doing freelancing coz it made sense to you, to deciding on the US (yes you will still continue to receive shade for it). It's inspiring how you do shit which makes sense to you and most often don't give too many fucks about what the world thinks.
3. How you think of our future.
4. The inherent kindness and nurture you approach things. Ofcourse that helps my distance angsty self to be empathises more often that I deserve. But I see that towards your friends. Even when you were sharing your discontent with Namritha on the Sankey Thank walk, there was so much warmth and love in it which is so difficult to witness.
5. You are my sunshine, my online sunshine..
6. You work hard for us
7. Your unwavering trust in us and never thinking of taking an out with respect to us.
8. Your, I'll figure it out attitude with respect to things you want even when you don't have full clarity.
9. You're never afraid to admit the things you don't know
10. You can live with contradictions about yourself and about me.
11. I love that I can look at you and know what you're thinking (most the times)
12. Your choice of Music. I re-discovered (and discovered new stuff) my love for Bollywood music through you again.
13. Your acceptance of who I am (barring out harshness on smoking :P)
14. How you make me feel safe.
15. Your slight uptightness about not washing your pits in front of me. It's cute.
16. You're always ready to work on yourself.
17. You have a handle on us and your feelings even when I am unsure of it. I can't tell you how much that has helped.
18. You let me use you and do things to you and you give me space to be unashamed and say this out loud on how I want to do all those dirty nasty things to you'll be give in when I hold you firmly.
19. Your ability to dream and be (almost) assured that you will be able to accomplish some of them.
20. Your sexy-ness.
21. Your quest to learn and question and accommodate diverse perspectives.
22. The way you love your friends and people around you.
23. It's heartwarming to see the way you look out for your younger brother. Just fills me with joy to see the nurturing side of you. (Don't be too much of a mom, ya? :P)
24. How I've seen you take a self journey. From working on our issues, to being a better journalist (however much you don't believe this) to accepting your and my kinks (however much you run away from it, but i see that journey)
25. Your extremely sexy hair :)
26. Only 25, as a punishment to falsely claiming yourself to be 26 and lying to me.
`

// Add this content configuration object at the top level
const content = {
  englishLetter: ENGLISH_LETTER,
  longerLetter: ANOTHER_LETTER,
  playlistLink: "https://www.youtube.com/watch?v=WWclZpTBRaU&list=PLaNcBEDgh4i7Emk2XxARQSanCIgXfQ_xB",
  playlistTitle: "Mixtape for you :)"
};

const questions = [
  {
    id: 1,
    question: "What was the date of the incident (with a mention of rain) mentioned in what you read?",
    description: "(format MMDDYYYY. If 1st December, 2024: 12012024)",
    answer: "10112023"
  },
  {
    id: 2,
    question: "Which town were you in when you saw that message?",
    answer: "auroville"
  },
  {
    id: 3,
    question: "Which Bangalore neighbourhood did we decide to give us a real shot in?",
    answer: "jayanagar"
  },
  {
    id: 4,
    question: "What was the place we met at when you wore a Saree in front of me for the first time?",
    answer: "bic"
  },
  {
    id: 5,
    question: "Which place do we aspire (rough plans obviously!) to move to when you come back to India?",
    answer: "goa"
  },
  {
    id: 6,
    question: "What's the name of my car model which you hated first but then started recognising it all over?",
    description: "(Just the name without the company name)",
    answer: "nexon"
  },
  {
    id: 7,
    question: "What do you like being called that makes you melt in bed?",
    answer: "baby"
  },
  {
    id: 8,
    question: "What did I cook for you on the first night where we shared the tenderness we feel for each other?",
    answer: "pasta"
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
            Hey love! I've prepared something special for you. Answer these questions correctly to unlock 2 surprises. Each question holds a memory we've shared together.
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
  <div className="container mx-auto px-4 py-8 max-w-4xl">
    <Card className="mb-8 border-2 border-blue-500 animate-fade-in">
      <CardHeader>
        <CardTitle className="text-2xl text-blue-600 text-center">
          Congratulations, my love! 💝
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* First Letter */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-[1.02] transition-transform">
            <h3 className="font-semibold text-xl mb-4 text-blue-600">
              💌 Your English Letter
            </h3>
            <div className="prose overflow-y-auto bg-blue-50 p-6 rounded-lg">
              <p className="text-sm text-gray-500 mb-2 italic">
                (The real English text)
              </p>
              <p className="whitespace-pre-line text-gray-700">
                {content.englishLetter}
              </p>
            </div>
          </div>

          {/* Second Letter */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-[1.02] transition-transform">
            <h3 className="font-semibold text-xl mb-4 text-blue-600">
              💝 A Deeper Letter
            </h3>
            <div className="prose overflow-y-auto bg-blue-50 p-6 rounded-lg">
              <p className="whitespace-pre-line text-gray-700">
                {content.longerLetter}
              </p>
            </div>
          </div>

          {/* Playlist Link */}
          <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-[1.02] transition-transform">
            <h3 className="font-semibold text-xl mb-4 text-blue-600">
              🎵 Playlist
            </h3>
            <div className="text-center">
              <a 
                href={content.playlistLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                {content.playlistTitle}
              </a>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
)}
      </div>
    </div>
  );
}