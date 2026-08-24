import React from 'react';
import { useQuestionnaire } from '../../context/QuestionnaireContext';
import { questionnaireSteps } from '../../data/questionnaireData';

export const ProgressStepper = () => {
  const { questionnaireState, setStep } = useQuestionnaire();
  const { currentStep, step1Answers, step2Answers } = questionnaireState;

  // Verificación de avance para determinar qué pasos están desbloqueados
  const isStep1Complete = Object.keys(step1Answers).length > 0;
  const isStep2Complete = Object.keys(step2Answers).length > 0;

  // Define si un paso se puede clicar según el progreso del usuario
  const isStepUnlocked = (stepId) => {
    if (stepId === 1) return true;
    if (stepId === 2) return isStep1Complete;
    if (stepId === 3) return isStep1Complete && isStep2Complete;
    if (stepId === 4) return isStep1Complete && isStep2Complete; // Desbloqueado al finalizar el flujo
    return false;
  };

  // Porcentaje para la barra conectora verde
  const fillPercentage = ((currentStep - 1) / (questionnaireSteps.length - 1)) * 100;

  return (
    <div className="stepper-connector-wrapper">
      <div className="stepper-progress-track">
        <div 
          className="connector-line-fill" 
          style={{ width: `${fillPercentage}%` }} 
        />
      </div>

      <div className="stepper-steps-container">
        {questionnaireSteps.map((step) => {
          const unlocked = isStepUnlocked(step.id);
          const isActive = currentStep === step.id;
          const isPassed = currentStep > step.id;

          return (
            <div 
              key={step.id} 
              className={`stepper-step ${isActive ? 'active' : ''} ${isPassed ? 'passed' : ''} ${!unlocked ? 'disabled' : ''}`}
              onClick={() => unlocked && setStep(step.id)}
            >
              <button 
                type="button" 
                className="step-circle" 
                disabled={!unlocked}
                aria-label={`Ir al ${step.title}`}
              >
                {isPassed ? (
                  <span className="material-symbols-outlined notranslate" translate="no">check</span>
                ) : (
                  step.id
                )}
              </button>
              <span className="step-label">{step.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};