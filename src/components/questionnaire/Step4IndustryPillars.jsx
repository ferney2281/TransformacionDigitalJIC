import React, { useState } from 'react';
import { useQuestionnaire } from '../../context/QuestionnaireContext';
import { step4PillarsData } from '../../data/questionnaireData';

export const Step4IndustryPillars = () => {
  const { questionnaireState, updateStep4Answer, setStep } = useQuestionnaire();
  const { step4Answers } = questionnaireState;

  // Estado del pilar actual (0 a 3)
  const [currentPillarIndex, setCurrentPillarIndex] = useState(0);

  const activePillar = step4PillarsData[currentPillarIndex];

  // Opciones de puntuación (0, 1, 2)
  const scoreOptions = [
    { value: 0, label: '0 = No' },
    { value: 1, label: '1 = A medias' },
    { value: 2, label: '2 = Sí' }
  ];

  // Cálculo de puntaje del pilar especifico
  const getPillarScore = (pillar) => {
    return pillar.questions.reduce((sum, q) => {
      const val = step4Answers[q.id];
      return sum + (val !== undefined && val !== '' ? Number(val) : 0);
    }, 0);
  };

  // Cálculo del puntaje total obtenido en los 4 pilares
  const getTotalScore = () => {
    return step4PillarsData.reduce((acc, pillar) => acc + getPillarScore(pillar), 0);
  };

  // Puntos máximos posibles acumulados (6 + 6 + 6 + 2 = 20)
  const totalMaxScore = step4PillarsData.reduce((acc, p) => acc + p.maxScore, 0);

  // Validar si el pilar actual está respondido por completo
  const isPillarComplete = (pillar) => {
    return pillar.questions.every(
      (q) => step4Answers[q.id] !== undefined && step4Answers[q.id] !== ''
    );
  };

  // Obtener el pilar más bajo (prioritario) excluyendo integración
  const getLowestPillar = () => {
    const mainPillars = step4PillarsData.filter((p) => p.id !== 4);
    let lowestPillarName = 'N/A';
    let minRatio = Infinity;

    mainPillars.forEach((p) => {
      const score = getPillarScore(p);
      const ratio = score / p.maxScore;
      if (ratio < minRatio) {
        minRatio = ratio;
        // Nombre simplificado del pilar
        lowestPillarName = p.name.replace(/Pilar \d+\.\s*/, '');
      }
    });

    return lowestPillarName;
  };

  const handleNext = () => {
    if (currentPillarIndex < step4PillarsData.length - 1) {
      setCurrentPillarIndex((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setStep(5);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (currentPillarIndex > 0) {
      setCurrentPillarIndex((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setStep(3);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="step4-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* TARJETA PRINCIPAL DEL CUESTIONARIO */}
      <div 
        className="q-card" 
        style={{ 
          padding: '2rem', 
          backgroundColor: '#ffffff', 
          borderRadius: '16px', 
          border: '1px solid #e2e8f0',
          boxShadow: '0 4px 20px rgba(0,0,0,0.03)' 
        }}
      >
        {/* Cabecera superior: Badge de Pilar y Puntaje acumulado del pilar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span 
            style={{ 
              backgroundColor: '#f1f5f9', 
              color: '#64748b', 
              padding: '6px 14px', 
              borderRadius: '20px', 
              fontSize: '0.85rem', 
              fontWeight: '600' 
            }}
          >
            Pilar {currentPillarIndex + 1} de {step4PillarsData.length}
          </span>

          <div 
            style={{ 
              color: '#1e293b', 
              padding: '6px 16px', 
              fontWeight: 'bold', 
              fontSize: '1rem' 
            }}
          >
            {getPillarScore(activePillar)} / {activePillar.maxScore} pts
          </div>
        </div>

        {/* Nombre del Pilar Actual */}
        <h2 style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.75rem' }}>
          {activePillar.name}
        </h2>

        {/* Tarjetas independientes por pregunta */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2rem' }}>
          {activePillar.questions.map((q) => {
            const currentVal = step4Answers[q.id];

            return (
              <div 
                key={q.id} 
                style={{ 
                  backgroundColor: '#f8fafc', 
                  borderRadius: '12px', 
                  padding: '1.25rem', 
                  border: '1px solid #f1f5f9' 
                }}
              >
                <p style={{ fontWeight: '600', color: '#1e293b', marginBottom: '1rem', fontSize: '0.95rem' }}>
                  <span style={{ color: '#475569', marginRight: '6px' }}>{q.id}</span>
                  {q.text}
                </p>

                {/* Radio Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem' }}>
                  {scoreOptions.map((opt) => {
                    const isSelected = String(currentVal) === String(opt.value);

                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => updateStep4Answer(q.id, opt.value)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: isSelected ? '2px solid #047857' : '1px solid #cbd5e1',
                          backgroundColor: isSelected ? '#ecfdf5' : '#ffffff',
                          color: isSelected ? '#065f46' : '#334155',
                          fontWeight: isSelected ? '700' : '500',
                          fontSize: '0.9rem',
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <span 
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            border: isSelected ? '5px solid #047857' : '2px solid #94a3b8',
                            backgroundColor: '#ffffff',
                            boxSizing: 'border-box',
                            flexShrink: 0
                          }}
                        />
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Botones de Navegación */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button 
            type="button"
            className="btn-prev"
            onClick={handlePrev}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.75rem 1.4rem',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: '#f1f5f9',
              color: '#64748b',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            <span className="material-symbols-outlined notranslate" translate="no">arrow_back</span>
            {currentPillarIndex === 0 ? 'Anterior' : 'Pilar Anterior'}
          </button>

          <button 
            type="button"
            className="btn-next"
            disabled={!isPillarComplete(activePillar)}
            onClick={handleNext}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.75rem 1.4rem',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: isPillarComplete(activePillar) ? '#064e3b' : '#cbd5e1',
              color: '#ffffff',
              fontWeight: '600',
              cursor: isPillarComplete(activePillar) ? 'pointer' : 'not-allowed',
              transition: 'background-color 0.2s ease'
            }}
          >
            {currentPillarIndex < step4PillarsData.length - 1 ? 'Siguiente' : 'Continuar al Paso 5'}
            <span className="material-symbols-outlined notranslate" translate="no">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* TARJETA INFERIOR DE RESULTADOS DE LOS PILARES (Estilo exacto al Paso 1) */}
      <div 
        style={{
          padding: '1.75rem 2rem',
          backgroundColor: '#f8fafc',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
            Resultados de los Pilares de la Industria 5.0
          </h3>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#d97706', fontWeight: '600' }}>
            Pilar prioritario: <span style={{ color: '#b45309' }}>{getLowestPillar()}</span>
          </p>
          <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.85rem', color: '#64748b' }}>
            Llévelo como prioridad a la Herramienta 6.
          </p>
        </div>

        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#064e3b' }}>
            {getTotalScore()} / {totalMaxScore} pts
          </span>
        </div>
      </div>

    </div>
  );
};