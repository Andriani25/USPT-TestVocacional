import React from "react";
import zustandStore from "../zustand/index";
import institutes from "../utils/institutes";

// UI
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight } from "lucide-react";
//

const WelcomeView: React.FC = function () {
  const setCurrentView = zustandStore((store) => store.setView);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-3 sm:p-4">
      <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-lg border-white/20 text-white">
        <CardHeader className="text-center space-y-3 px-4 py-6">
          <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
          </div>
          <CardTitle className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent leading-tight">
            Test Vocacional USPT
          </CardTitle>
          <CardDescription className="text-lg sm:text-xl text-gray-200 px-2">
            Descubre tu camino profesional ideal
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6 px-4 pb-6">
          <div className="text-center space-y-4">
            <p className="text-base sm:text-lg text-gray-200 px-2 leading-relaxed">
              ¿No sabes qué carrera estudiar? ¡No te preocupes! Este test te
              ayudará a descubrir cuál de nuestros institutos se adapta mejor a
              tu personalidad y intereses.
            </p>
            <div className="grid grid-cols-1 gap-3 mt-6 sm:mt-8 sm:grid-cols-3 sm:gap-4">
              {Object.entries(institutes).map(([key, institute]) => {
                const IconComponent = institute.icon;
                return (
                  <div
                    key={key}
                    className={`p-3 sm:p-4 rounded-lg bg-gradient-to-r ${institute.color} bg-opacity-20 border border-white/20`}
                  >
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2" />
                    <h3 className="font-semibold text-center text-sm sm:text-base leading-tight">
                      {institute.name}
                    </h3>
                  </div>
                );
              })}
            </div>
            <div className="bg-white/10 rounded-lg p-3 sm:p-4 mt-4 sm:mt-6 mx-2 sm:mx-0">
              <p className="text-xs sm:text-sm text-gray-300">
                📝 <strong>15 preguntas</strong> • ⏱️ <strong>5 minutos</strong>{" "}
                • 🎯 <strong>Resultado personalizado</strong>
              </p>
            </div>
          </div>
          <Button
            onClick={() => setCurrentView("test")}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg mx-2 sm:mx-0"
          >
            Comenzar Test <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomeView;
