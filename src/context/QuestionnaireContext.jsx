import React, { createContext, useContext, useState } from 'react';
import { getThermometerLevel } from '../data/questionnaireData';

const QuestionnaireContext = createContext();

const initialQuestionnaireState = {
  currentStep: 1,
  // PASO 1 DATA (Termómetro Digital)
  step1Answers: {},
  step1TotalScore: 0,
  step1Result: null,
  // PASO 2 DATA (Autodiagnóstico por Dimensiones)
  step2Answers: {}, // Ej: { "1.1": 2, "1.2": 1, ... }
  step2CustomTargets: {}, // Ej: { 1: 4, 2: 3 } (Metas propias por dimensión)
  // PASO 3 DATA (Mi Meta)
  miMeta: "",
  // PASO 4 DATA (Herramienta 3 · Termómetro Industria 5.0)
  step4Answers: {},
  // PASO 5 DATA (Informe de Resultados)
  selectedArea: ""
};

export const QuestionnaireProvider = ({ children }) => {
  const [questionnaireState, setQuestionnaireState] = useState(initialQuestionnaireState);

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

  // Métodos Paso 3 (Mi Meta)
  const updateMiMeta = (metaValue) => {
    setQuestionnaireState((prev) => ({
      ...prev,
      miMeta: metaValue
    }));
  };

  // Métodos Paso 4 (Herramienta 3 · Termómetro Industria 5.0)
  const updateStep4Answer = (questionId, value) => {
    setQuestionnaireState((prev) => ({
      ...prev,
      step4Answers: { ...prev.step4Answers, [questionId]: Number(value) }
    }));
  };

  // Métodos Paso 5 (Informe de Resultados)
  const updateSelectedArea = (areaValue) => {
    setQuestionnaireState((prev) => ({
      ...prev,
      selectedArea: areaValue
    }));
  };

  // Control de pasos
  const setStep = (stepNumber) => {
    setQuestionnaireState((prev) => ({ ...prev, currentStep: stepNumber }));
  };

  // Reiniciar estado
  const resetQuestionnaire = () => {
    setQuestionnaireState(initialQuestionnaireState);
  };

  return (
    <QuestionnaireContext.Provider 
      value={{ 
        questionnaireState, 
        updateStep1Answer, 
        updateStep2Answer,
        updateStep2CustomTarget,
        updateMiMeta,
        updateStep4Answer,
        updateSelectedArea,
        setStep,
        resetQuestionnaire
      }}
    >
      {children}
    </QuestionnaireContext.Provider>
  );
};

export const useQuestionnaire = () => useContext(QuestionnaireContext);