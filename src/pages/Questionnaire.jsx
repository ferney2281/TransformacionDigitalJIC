import React, { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { QuestionnaireProvider, useQuestionnaire } from '../context/QuestionnaireContext';
import { ProgressStepper } from '../components/questionnaire/ProgressStepper';
import { Step1Thermometer } from '../components/questionnaire/Step1Thermometer';
import { Step2Autodiagnostic } from '../components/questionnaire/Step2Autodiagnostic';
import { Step3MiMeta } from '../components/questionnaire/Step3MiMeta';
import { Step4IndustryPillars } from '../components/questionnaire/Step4IndustryPillars';
import { questionnaireSteps } from '../data/questionnaireData';
import './Questionnaire.css';

const QuestionnaireContent = () => {
  const { questionnaireState, setStep } = useQuestionnaire();
  const { currentStep } = questionnaireState;
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const activeStepData = questionnaireSteps.find(s => s.id === currentStep) || questionnaireSteps[0];

  const handleStepSelect = (stepId) => {
    setStep(stepId);
    setIsMobileNavOpen(false); // Cierra el menú en móvil al seleccionar
  };

  return (
    <div className="main-layout">
      <Navbar activePage="herramientas" />

      <main className="questionnaire-page-wrapper">
        <div className="questionnaire-layout">
          
          {/* BOTÓN MÓVIL PARA DESPLEGAR NAVEGACIÓN PASO A PASO */}
          <button 
            type="button" 
            className="mobile-step-toggle"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            <span className="material-symbols-outlined notranslate" translate="no">
              {isMobileNavOpen ? 'close' : 'menu_open'}
            </span>
            <span>Pasos: {activeStepData.title}</span>
          </button>

          {/* SIDEBAR IZQUIERDO (RESPONSIVO) */}
          <aside className={`q-sidebar-left ${isMobileNavOpen ? 'open' : ''}`}>
            <div className="q-brand">
              <span className="material-symbols-outlined q-brand-icon notranslate" translate="no">build</span>
              <div>
                <h1 className="q-brand-title">Herramientas Digitales</h1>
                <p className="q-brand-subtitle">Cuestionario de Madurez</p>
              </div>
            </div>

            <div className="q-sidebar-title">CAMINO DEL CUESTIONARIO</div>

            <div className="q-steps-list">
              {questionnaireSteps.map((step) => (
                <div 
                  key={step.id} 
                  className={`q-step-nav-item ${currentStep === step.id ? 'active' : ''}`}
                  onClick={() => handleStepSelect(step.id)}
                >
                  <div className="q-step-number">{step.id}</div>
                  <div className="q-step-labels">
                    <div className="q-step-text-title">{step.title}</div>
                    {step.subtitle && <div className="q-step-text-sub">{step.subtitle}</div>}
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* CONTENIDO CENTRAL */}
          <div className="q-main-content">
            <header className="q-top-header">
              <div className="q-header-info">
                <h2>{activeStepData.code} · {activeStepData.title}</h2>
                <p>{activeStepData.description}</p>
              </div>
            </header>

            <div className="q-body-container">
              <section className="q-question-area">
                {/* BARRA DE PROGRESO CONECTADA */}
                <ProgressStepper />

                {/* VISTAS DE CADA PASO */}
                {currentStep === 1 && <Step1Thermometer />}
                {currentStep === 2 && <Step2Autodiagnostic />}
                {currentStep === 3 && <Step3MiMeta />}
                {currentStep === 4 && <Step4IndustryPillars />}
                
              </section>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export const Questionnaire = () => (
  <QuestionnaireProvider>
    <QuestionnaireContent />
  </QuestionnaireProvider>
);