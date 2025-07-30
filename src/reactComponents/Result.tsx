import type React from "react";
import institutes from "@/utils/institutes";
import { useTestContext } from "@/zustand";

// UI
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Progress } from "@radix-ui/react-progress";
import { Button } from "@/components/ui/button";
import { RotateCcw } from "lucide-react";
import { useNavigate } from "react-router";
import { Player } from "@lottiefiles/react-lottie-player";
import robotCloud from "../assets/Cloud robotics abstract.json";
//

const Result: React.FC = function () {
  const contextData = useTestContext();

  // Zustand
  const recommendedInstitute = contextData.recommendedInstitute;
  const scores = contextData.scores;
  const setScores = contextData.setScores;
  const setRecommendedInstitute = contextData.setRecommendedInstitute;
  //

  const navigate = useNavigate();

  let winner = recommendedInstitute;
  let institute;

  if (winner === "medicina") {
    institute = institutes.medicina;
  }
  if (winner === "sociales") {
    institute = institutes.sociales;
  } else {
    institute = institutes.innovacion;
  }

  const IconComponent = institute.icon;
  const totalScore = scores.medicina + scores.sociales + scores.innovacion;

  const resetTest = () => {
    navigate("/");
    setScores({
      medicina: 0,
      sociales: 0,
      innovacion: 0,
    });
    setRecommendedInstitute("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center p-2 sm:p-4">
      <div className="w-full flex justify-center items-center mb-2 sm:mb-4">
        <Player
          autoplay
          loop
          src={robotCloud}
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56"
        />
      </div>
      <Card className="w-full max-w-[98vw] sm:max-w-4xl bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader className="text-center px-2 py-3 sm:px-6 sm:py-6">
          <div
            className={`mx-auto w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${institute.color} rounded-full flex items-center justify-center mb-2 sm:mb-4`}
          >
            <IconComponent className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <CardTitle className="text-lg sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">
            ¡Tu instituto ideal es!
          </CardTitle>
          <CardTitle
            className={`text-xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${institute.color} bg-clip-text text-transparent leading-tight px-1 sm:px-2`}
          >
            {institute.name}
          </CardTitle>
          <CardDescription className="text-sm sm:text-lg lg:text-xl text-gray-200 mt-2 sm:mt-4 px-1 sm:px-2 leading-relaxed">
            {institute.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 sm:space-y-6 px-2 pb-3 sm:px-6 sm:pb-6">
          <div className="grid grid-cols-1 gap-2 sm:gap-4 md:grid-cols-3">
            {Object.entries(scores).map(([key, score]) => {
              const inst = institutes[key as keyof typeof institutes];
              const InstIcon = inst.icon;
              const percentage =
                totalScore > 0 ? Math.round((score / totalScore) * 100) : 0;

              return (
                <div
                  key={key}
                  className={`p-3 sm:p-4 rounded-lg ${
                    key === recommendedInstitute
                      ? `bg-gradient-to-r ${inst.color} bg-opacity-30`
                      : "bg-white/10"
                  } border border-white/20`}
                >
                  <div className="flex items-center mb-2">
                    <InstIcon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 flex-shrink-0" />
                    <span className="font-semibold text-xs sm:text-sm leading-tight">
                      {inst.name}
                    </span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold">
                    {percentage}%
                  </div>
                  <Progress value={percentage} className="mt-2 h-2" />
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 rounded-lg p-3 sm:p-6">
            <h3 className="text-base sm:text-xl font-bold mb-2 sm:mb-4">
              Carreras que podrías estudiar:
            </h3>
            <div className="grid grid-cols-1 gap-1 sm:gap-3 md:grid-cols-2">
              {institute.careers.map((career, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-2 h-2 rounded-full bg-gradient-to-r ${institute.color} mr-3 flex-shrink-0`}
                  ></div>
                  <span className="text-sm sm:text-base">{career}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:gap-4 md:flex-row">
            <Button
              onClick={resetTest}
              variant="outline"
              className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20 active:bg-white/30 py-2 sm:py-3 text-xs sm:text-base"
            >
              <RotateCcw className="mr-2 w-4 h-4" />
              Repetir Test
            </Button>
            <Button
              className={`flex-1 bg-gradient-to-r ${institute.color} hover:opacity-90 active:opacity-80 text-white font-semibold py-2 sm:py-3 text-xs sm:text-base`}
            >
              Más Información
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Result;
