import React, { createContext, useState, useContext } from "react";

interface Scores {
  medicina: number;
  sociales: number;
  innovacion: number;
}

interface TestContextType {
  scores: Scores;
  setScores: React.Dispatch<React.SetStateAction<Scores>>;
  recommendedInstitute: string;
  setRecommendedInstitute: React.Dispatch<React.SetStateAction<string>>;
}

export const TestContext = createContext<TestContextType | null>(null);

export const TestContextProvider: React.FC<React.PropsWithChildren> =
  function ({ children }) {
    const [scores, setScores] = useState({
      medicina: 0,
      sociales: 0,
      innovacion: 0,
    });

    const [recommendedInstitute, setRecommendedInstitute] = useState("");

    const value = {
      scores,
      setScores,
      recommendedInstitute,
      setRecommendedInstitute,
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
