import type React from "react";
import zustandStore from "../zustand/index";
import institutes from "@/utils/institutes";

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
import { useEffect } from "react";
//

const Result: React.FC = function () {
  // Zustand
  const recommendedInstitute = zustandStore((store) => store.winner);
  const setCurrentView = zustandStore((store) => store.setView);
  const scores = zustandStore((store) => store.scores);
  const resetZustandScores = zustandStore((store) => store.resetScores);
  const setWinner = zustandStore((state) => state.setWinner);
  //

  let institute;

  if (recommendedInstitute === "medicina") {
    institute = institutes.medicina;
  }
  if (recommendedInstitute === "sociales") {
    institute = institutes.sociales;
  } else {
    institute = institutes.innovacion;
  }

  const IconComponent = institute.icon;
  const totalScore = scores.medicina + scores.sociales + scores.innovacion;

  const resetTest = () => {
    setCurrentView("welcome");
    resetZustandScores();
    setWinner("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-3 sm:p-4">
      <Card className="w-full max-w-4xl bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader className="text-center px-4 py-4 sm:px-6 sm:py-6">
          <div
            className={`mx-auto w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r ${institute.color} rounded-full flex items-center justify-center mb-3 sm:mb-4`}
          >
            <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
          <CardTitle className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            ¡Tu instituto ideal es!
          </CardTitle>
          <CardTitle
            className={`text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${institute.color} bg-clip-text text-transparent leading-tight px-2`}
          >
            {institute.name}
          </CardTitle>
          <CardDescription className="text-base sm:text-lg lg:text-xl text-gray-200 mt-3 sm:mt-4 px-2 leading-relaxed">
            {institute.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-3">
            {Object.entries(scores).map(([key, score]) => {
              const inst = institutes[key as keyof typeof institutes];
              const InstIcon = inst.icon;
              const percentage =
                totalScore > 0 ? Math.round((score / totalScore) * 100) : 0;

              useEffect(() => console.log("SCORES", scores));

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

          <div className="bg-white/10 rounded-lg p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              Carreras que podrías estudiar:
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:gap-3 lg:grid-cols-2">
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

          <div className="flex flex-col gap-3 sm:gap-4 lg:flex-row">
            <Button
              onClick={resetTest}
              variant="outline"
              className="flex-1 bg-white/10 border-white/20 text-white hover:bg-white/20 active:bg-white/30 py-3 text-sm sm:text-base"
            >
              <RotateCcw className="mr-2 w-4 h-4" />
              Repetir Test
            </Button>
            <Button
              className={`flex-1 bg-gradient-to-r ${institute.color} hover:opacity-90 active:opacity-80 text-white font-semibold py-3 text-sm sm:text-base`}
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
