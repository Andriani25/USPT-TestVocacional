import React, { createContext, useState, useContext } from "react";
import type { Institute } from "@/utils/institutes";
import institutes from "@/utils/institutes";

interface Scores {
  medicina: number;
  sociales: number;
  innovacion: number;
  deportes: number;
  disenio: number;
}

interface TestContextType {
  scores: Scores;
  setScores: React.Dispatch<React.SetStateAction<Scores>>;
  recommendedInstitute: string;
  setRecommendedInstitute: React.Dispatch<React.SetStateAction<string>>;
  institute: Institute;
  setInstitute: React.Dispatch<React.SetStateAction<Institute>>;
}

export const TestContext = createContext<TestContextType | null>(null);

export const TestContextProvider: React.FC<React.PropsWithChildren> =
  function ({ children }) {
    const [scores, setScores] = useState({
      medicina: 0,
      sociales: 0,
      innovacion: 0,
      deportes: 0,
      disenio: 0,
    });

    const [recommendedInstitute, setRecommendedInstitute] = useState("");

    const [institute, setInstitute] = useState(institutes.innovacion);

    const value = {
      scores,
      setScores,
      recommendedInstitute,
      setRecommendedInstitute,
      institute,
      setInstitute,
    };

    return (
      <TestContext.Provider value={value}>{children}</TestContext.Provider>
    );
  };

export const useTestContext = function () {
  const context = useContext(TestContext);

  if (!context) {
    throw new Error("useContext must be used within a TestContextProvider");
  }

  return context;
};
