import React, { useState } from 'react';
import { useQuestionnaire } from '../../context/QuestionnaireContext';
import { questionnaireSteps } from '../../data/questionnaireData';

export const Step1Thermometer = () => {
  const { questionnaireState, updateStep1Answer, setStep } = useQuestionnaire();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const step1Data = questionnaireSteps[0];
  const questions = step1Data.questions;
  const currentQ = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  
  const currentAnswer = questionnaireState.step1Answers[currentQ.id] ?? null;
  const isCompleted = Object.keys(questionnaireState.step1Answers).length === totalQuestions;
  const levelInfo = questionnaireState.step1Result;

  const handleOptionSelect = (value) => {
    updateStep1Answer(currentQ.id, value);
  };

  return (
    <div className="step1-container">
      <div className="q-card">
        {/* ENCABEZADO Y META DE LA PREGUNTA */}
        <div className="q-question-meta">
          <span className="q-badge-question">Pregunta {currentQuestionIndex + 1} de {totalQuestions}</span>
          <span className="q-hint-tag">💡 {currentQ.hint}</span>
        </div>

        <h3 className="q-title">{currentQ.text}</h3>

        {/* CALIFICACIÓN (0, 1, 2) */}
        <div className="q-options-grid">
          {[
            { value: 0, label: "0 = No" },
            { value: 1, label: "1 = A medias" },
            { value: 2, label: "2 = Sí" }
          ].map((option) => (
            <button
              key={option.value}
              type="button"
              className={`q-option-btn ${currentAnswer === option.value ? 'active' : ''}`}
              onClick={() => handleOptionSelect(option.value)}
            >
              <span className="q-radio-dot" />
              <span>{option.label}</span>
            </button>
          ))}
        </div>

        {/* NAVEGACIÓN ENTRE PREGUNTAS */}
        <div className="q-nav-actions">
          <button 
            className="btn-prev"
            disabled={currentQuestionIndex === 0}
            onClick={() => setCurrentQuestionIndex(prev => prev - 1)}
          >
            <span className="material-symbols-outlined notranslate" translate="no">arrow_back</span>
            Anterior
          </button>

          {currentQuestionIndex < totalQuestions - 1 ? (
            <button 
              className="btn-next"
              disabled={currentAnswer === null}
              onClick={() => setCurrentQuestionIndex(prev => prev + 1)}
            >
              Siguiente
              <span className="material-symbols-outlined notranslate" translate="no">arrow_forward</span>
            </button>
          ) : (
            <button 
              className="btn-finish"
              disabled={!isCompleted}
              onClick={() => setStep(2)}
            >
              Pasar al Paso 2
              <span className="material-symbols-outlined notranslate" translate="no">arrow_forward</span>
            </button>
          )}
        </div>
      </div>

      {/* BLOQUE RESUMEN DE RESULTADOS */}
      {isCompleted && levelInfo && (
        <div className="q-summary-card">
          <div className="summary-header">
            <h4>Resultados del Termómetro Digital</h4>
            <span className="score-badge">{questionnaireState.step1TotalScore} / {step1Data.maxScore} pts</span>
          </div>
          <div className={`level-indicator ${levelInfo.colorClass}`}>
            <strong>Nivel: {levelInfo.level}</strong>
          </div>
          <p className="recommendation-text">{levelInfo.recommendation}</p>
        </div>
      )}
    </div>
  );
};