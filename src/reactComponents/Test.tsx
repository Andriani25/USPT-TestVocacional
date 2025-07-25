import React, { useEffect, useState } from "react";
import zustandStore from "@/zustand";
import { questions } from "@/utils/questions";

// UI
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
//

const Test: React.FC = function () {
  // Zustand
  const setCurrentView = zustandStore((state) => state.setView);
  const winner = zustandStore((state) => state.winner);
  const setWinner = zustandStore((state) => state.setWinner);
  const zustandScore = zustandStore((state) => state.setScores);
  //

  // Estado para controlar la pregunta actual
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //
  // Estado para controlar la cantidad de puntos a favor que lleva cada instituto
  const [scores, setScores] = useState({
    medicina: 0,
    sociales: 0,
    innovacion: 0,
  });
  //

  const question = questions[currentQuestion];

  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const getRecommendedInstitute = () => {
    const maxScore = Math.max(
      scores.medicina,
      scores.sociales,
      scores.innovacion
    );
    if (scores.medicina === maxScore) setWinner("medicina");
    if (scores.sociales === maxScore) setWinner("sociales");
    else setWinner("innovacion");
    zustandScore(scores);
  };

  const handleAnswer = (optionIndex: number) => {
    const option = questions[currentQuestion].options[optionIndex];
    setScores((prev) => ({
      medicina: prev.medicina + option.medicina,
      sociales: prev.sociales + option.sociales,
      innovacion: prev.innovacion + option.innovacion,
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      getRecommendedInstitute();
    }
  };

  useEffect(() => {
    if (winner !== "") {
      setCurrentView("results");
    }
  }, [winner]);

  const progress = (currentQuestion / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-3 sm:p-4">
      <Card className="w-full max-w-3xl bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader className="px-4 py-4 sm:px-6 sm:py-6">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm text-gray-300">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-xs sm:text-sm text-gray-300">
              {Math.floor(progress)}% completado
            </span>
          </div>
          <Progress value={progress} className="mb-4 h-2 sm:h-3" />
          <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-center leading-tight px-2">
            {question.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="space-y-2 sm:space-y-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={selectedOption === index ? "default" : "outline"}
                className={`w-full p-3 sm:p-4 text-left justify-start h-auto whitespace-normal text-sm sm:text-base leading-relaxed ${
                  selectedOption === index
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-yellow-400"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20 active:bg-white/30"
                }`}
                onClick={() => {
                  setSelectedOption(index);
                  setTimeout(() => handleAnswer(index), 500);
                }}
              >
                <span className="text-left">{option.text}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Test;
