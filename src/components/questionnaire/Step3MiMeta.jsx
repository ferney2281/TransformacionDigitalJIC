import React from 'react';
import { useQuestionnaire } from '../../context/QuestionnaireContext';

// Mapeo de metas con su título completo y sus herramientas asociadas
const metaData = {
  "Vender mas y clientes": {
    label: "Vender más y relacionarse mejor con clientes",
    tools: "13 y 4"
  },
  "Operar mejor": {
    label: "Operar mejor (eficiencia)",
    tools: "14 y 15"
  },
  "Cuidar y cumplir": {
    label: "Cuidar y cumplir (riesgo y normativa)",
    tools: "7, 8 y 9"
  },
  "Avanzar a la 5RI": {
    label: "Avanzar hacia la 5RI (humana, sostenible, resiliente)",
    tools: "16, 10, 3 y 11"
  }
};

export const Step3MiMeta = () => {
  const { questionnaireState, updateMiMeta, setStep } = useQuestionnaire();
  const { miMeta } = questionnaireState;

  const isComplete = miMeta !== "";
  const selectedMetaInfo = metaData[miMeta];

  return (
    <div className="step3-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      
      {/* TARJETA PRINCIPAL DE SELECCIÓN */}
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
        <div className="q-question-meta" style={{ marginBottom: '1rem' }}>
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
            Paso 3
          </span>
        </div>
        
        <h3 style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '0.5rem' }}>
          Seleccione su Meta Principal
        </h3>
        <p style={{ color: '#64748b', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
          Definir una meta nos permite alinear los resultados del diagnóstico con los objetivos estratégicos de su empresa.
        </p>

        <div style={{ marginBottom: '2rem' }}>
          <label htmlFor="miMetaSelect" style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>
            Mi meta:
          </label>
          <select 
            id="miMetaSelect"
            className="mi-meta-select"
            value={miMeta}
            onChange={(e) => updateMiMeta(e.target.value)}
            style={{
              width: '100%',
              maxWidth: '500px',
              padding: '0.75rem 1rem',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              fontSize: '1rem',
              backgroundColor: '#fff',
              color: '#0f172a',
              outline: 'none'
            }}
          >
            <option value="" disabled>Seleccione una opción...</option>
            {Object.keys(metaData).map((key) => (
              <option key={key} value={key}>
                {metaData[key].label}
              </option>
            ))}
          </select>
        </div>

        {/* ACCIONES DE NAVEGACIÓN */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button 
            type="button"
            className="btn-prev"
            onClick={() => {
              setStep(2);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
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
            Volver al Paso 2
          </button>

          <button 
            type="button"
            className="btn-next"
            disabled={!isComplete}
            onClick={() => {
              setStep(4);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.75rem 1.4rem',
              borderRadius: '8px',
              border: 'none',
              backgroundColor: isComplete ? '#064e3b' : '#cbd5e1',
              color: '#ffffff',
              fontWeight: '600',
              cursor: isComplete ? 'pointer' : 'not-allowed',
              transition: 'background-color 0.2s ease'
            }}
          >
            Continuar al Paso 4
            <span className="material-symbols-outlined notranslate" translate="no">arrow_forward</span>
          </button>
        </div>
      </div>

      {/* TARJETA INFERIOR DE RESULTADO SEGÚN LA META SELECCIONADA */}
      {isComplete && selectedMetaInfo && (
        <div 
          style={{
            padding: '1.5rem 2rem',
            backgroundColor: '#f8fafc',
            borderRadius: '16px',
            border: '1px solid #e2e8f0',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem'
          }}
        >
          <h4 style={{ fontSize: '1.05rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>
            Resultados del Paso 3 — Énfasis según su meta
          </h4>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#d97706', fontWeight: '600' }}>
            Meta seleccionada: <span style={{ color: '#b45309' }}>{selectedMetaInfo.label}</span>
          </p>
          <p style={{ margin: 0, fontSize: '0.9rem', color: '#334155' }}>
            Refuerce las herramientas {selectedMetaInfo.tools}.
          </p>
        </div>
      )}

    </div>
  );
};