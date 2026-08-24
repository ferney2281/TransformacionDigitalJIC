import React, { createContext, useContext, useState } from 'react';
import { getThermometerLevel, step2DimensionsData } from '../data/questionnaireData';

const QuestionnaireContext = createContext();

export const QuestionnaireProvider = ({ children }) => {
  const [questionnaireState, setQuestionnaireState] = useState({
    currentStep: 1,
    // PASO 1 DATA
    step1Answers: {},
    step1TotalScore: 0,
    step1Result: null,
    // PASO 2 DATA
    step2Answers: {}, // Ej: { "1.1": 2, "1.2": 1, ... }
    step2CustomTargets: {} // Ej: { 1: 4, 2: 3 } (Metas propias por dimensión)
  });

  // Métodos Paso 1
  const updateStep1Answer = (questionId, value) => {
    setQuestionnaireState((prev) => {
      const newAnswers = { ...prev.step1Answers, [questionId]: Number(value) };
      const totalScore = Object.values(newAnswers).reduce((sum, val) => sum + val, 0);
      return {
        ...prev,
        step1Answers: newAnswers,
        step1TotalScore: totalScore,
        step1Result: getThermometerLevel(totalScore)
      };
    });
  };

  // Métodos Paso 2
  const updateStep2Answer = (questionId, value) => {
    setQuestionnaireState((prev) => ({
      ...prev,
      step2Answers: { ...prev.step2Answers, [questionId]: Number(value) }
    }));
  };

  const updateStep2CustomTarget = (dimensionId, targetValue) => {
    setQuestionnaireState((prev) => ({
      ...prev,
      step2CustomTargets: {
        ...prev.step2CustomTargets,
        [dimensionId]: targetValue === "" ? "" : Number(targetValue)
      }
    }));
  };

  const setStep = (stepNumber) => {
    setQuestionnaireState((prev) => ({ ...prev, currentStep: stepNumber }));
  };

  return (
    <QuestionnaireContext.Provider 
      value={{ 
        questionnaireState, 
        updateStep1Answer, 
        updateStep2Answer,
        updateStep2CustomTarget,
        setStep 
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  );
};

export const useQuestionnaire = () => useContext(QuestionnaireContext);