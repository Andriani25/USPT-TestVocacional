import React, { useEffect, useState } from "react";
import { useTestContext } from "@/context";
import { useFetcher, useNavigate } from "react-router";
import { questions } from "@/utils/questions";
import institutes from "@/utils/institutes";

// UI
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Player } from "@lottiefiles/react-lottie-player";
import robotAndMan from "../assets/Man and robot with computers sitting together in workplace.json";
//

const Test: React.FC = function () {
  const navigate = useNavigate();

  // Context
  const contextData = useTestContext();
  const setWinner = contextData.setRecommendedInstitute;
  const scores = contextData.scores;
  const setScores = contextData.setScores;
  const setInstitute = contextData.setInstitute;
  //

  // Estado para controlar la pregunta actual
  const [currentQuestion, setCurrentQuestion] = useState(0);
  //

  const question = questions[currentQuestion];

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const handleAnswer = (optionIndex: number) => {
    const option = question.options[optionIndex];
    setScores((prev) => ({
      medicina: prev.medicina + option.medicina,
      sociales: prev.sociales + option.sociales,
      innovacion: prev.innovacion + option.innovacion,
      deportes: prev.deportes + option.deportes,
    }));
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  useEffect(() => {
    console.log("SCORES", scores);
  }, [scores]);

  useEffect(() => {
    const maxScore = Math.max(
      scores.innovacion,
      scores.medicina,
      scores.sociales,
      scores.deportes
    );

    if (maxScore === scores.medicina) {
      setWinner(institutes.medicina.name);
      setInstitute(institutes.medicina);
    } else if (maxScore === scores.sociales) {
      setWinner(institutes.sociales.name);
      setInstitute(institutes.sociales);
    } else if (maxScore === scores.deportes) {
      setWinner(institutes.deportes.name);
      setInstitute(institutes.deportes);
    } else {
      setWinner(institutes.innovacion.name);
      setInstitute(institutes.innovacion);
    }
  }, [scores]);

  const progress = (currentQuestion / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-2 sm:p-4">
      <div className="w-full flex justify-center items-center mb-2 sm:mb-4">
        <Player
          autoplay
          loop
          src={robotAndMan}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
        />
      </div>
      <Card className="w-full max-w-[98vw] sm:max-w-3xl bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader className="px-2 py-3 sm:px-6 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-2 sm:mb-4 gap-1 sm:gap-0">
            <span className="text-xs sm:text-sm text-gray-300">
              Pregunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-xs sm:text-sm text-gray-300">
              {Math.floor(progress)}% completado
            </span>
          </div>
          <Progress value={progress} className="mb-3 h-2 sm:h-3" />
          <CardTitle className="text-base sm:text-xl lg:text-2xl font-bold text-center leading-tight px-1 sm:px-2">
            {question.question}
          </CardTitle>
        </CardHeader>
        <CardContent className="px-2 pb-3 sm:px-6 sm:pb-6">
          <div className="space-y-2 sm:space-y-3">
            {question.options.map((option, index) => (
              <Button
                key={index}
                variant={selectedOption === index ? "default" : "outline"}
                className={`w-full p-2 sm:p-4 text-left justify-start h-auto whitespace-normal text-xs sm:text-base leading-relaxed ${
                  selectedOption === index
                    ? "bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-yellow-400"
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20 active:bg-white/30"
                }`}
                onClick={() => {
                  currentQuestion === questions.length - 1
                    ? navigate("/result")
                    : setSelectedOption(index);
                  handleAnswer(index);
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
