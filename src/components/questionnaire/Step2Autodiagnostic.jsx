import React, { useState } from 'react';
import { useQuestionnaire } from '../../context/QuestionnaireContext';
import { step2DimensionsData, getDimensionLevel } from '../../data/questionnaireData';

export const Step2Autodiagnostic = () => {
  const { questionnaireState, updateStep2Answer, updateStep2CustomTarget, setStep } = useQuestionnaire();
  const { step2Answers, step2CustomTargets } = questionnaireState;

  // Estado local para controlar cuál dimensión se está respondiendo actualmente (0 a 8)
  const [currentDimensionIndex, setCurrentDimensionIndex] = useState(0);

  const currentDimension = step2DimensionsData[currentDimensionIndex];
  const totalDimensions = step2DimensionsData.length;

  const ratingOptions = [
    { value: 0, label: "0 · Totalmente en desacuerdo" },
    { value: 0.5, label: "0,5 · En desacuerdo" },
    { value: 1, label: "1 · Ni de acuerdo ni en desacuerdo" },
    { value: 1.5, label: "1,5 · De acuerdo" },
    { value: 2, label: "2 · Totalmente de acuerdo" }
  ];

  // Helper para cambiar de dimensión y hacer scroll automático al inicio de la tarjeta
  const handleDimensionChange = (newIndex) => {
    setCurrentDimensionIndex(newIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Verifica si la dimensión actual ya fue completamente respondida
  const isCurrentDimComplete = currentDimension.questions.every(
    (q) => step2Answers[q.id] !== undefined
  );

  // Cálculo de puntaje de una dimensión específica (Promedio * 2)
  const calculateDimensionScore = (dim) => {
    const answeredQ = dim.questions.filter((q) => step2Answers[q.id] !== undefined);
    if (answeredQ.length < dim.questions.length) return null;

    const sum = dim.questions.reduce((acc, q) => acc + step2Answers[q.id], 0);
    return (sum / dim.questions.length) * 2;
  };

  // Construcción de los datos para la tabla de resumen global
  const dimensionResults = step2DimensionsData.map((dim) => {
    const score = calculateDimensionScore(dim);
    const level = score !== null ? getDimensionLevel(score) : "-";
    const gap = score !== null ? Math.max(0, dim.targetRef - score) : null;

    const customTarget = step2CustomTargets[dim.id] ?? "";
    let gapVsCustom = "";
    if (score !== null && customTarget !== "" && customTarget !== null) {
      const diff = customTarget - score;
      gapVsCustom = diff < 0 ? 0 : diff;
    }

    return { ...dim, score, level, gap, customTarget, gapVsCustom };
  });

  // Cálculo del Puntaje y Nivel General
  const completedScores = dimensionResults.filter((d) => d.score !== null).map((d) => d.score);
  const generalScore = completedScores.length > 0 
    ? completedScores.reduce((a, b) => a + b, 0) / completedScores.length 
    : null;
  const generalLevel = generalScore !== null ? getDimensionLevel(generalScore) : "-";

  const isAllStep2Completed = completedScores.length === totalDimensions;

  return (
    <div className="step2-wrapper">
      
      {/* TARJETA INTERACTIVA DE LA DIMENSIÓN ACTUAL */}
      <div className="q-card dimension-card-step">
        <div className="q-question-meta">
          <span className="q-badge-question">
            Dimensión {currentDimensionIndex + 1} de {totalDimensions}
          </span>
          <span className="dim-target-tag">
            Meta ref. regional: <strong>{currentDimension.targetRef}</strong>
          </span>
        </div>

        <h3 className="q-title">
          Dimensión {currentDimension.id}. {currentDimension.name}
        </h3>

        {/* PREGUNTAS DE LA DIMENSIÓN */}
        <div className="dim-questions-list">
          {currentDimension.questions.map((q) => (
            <div key={q.id} className="q-dim-box">
              <p className="q-text"><strong>{q.id}</strong> {q.text}</p>
              <div className="q-options-grid">
                {ratingOptions.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    className={`q-option-btn ${step2Answers[q.id] === opt.value ? 'active' : ''}`}
                    onClick={() => updateStep2Answer(q.id, opt.value)}
                  >
                    <span className="q-radio-dot" />
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CONTROLES DE NAVEGACIÓN ENTRE DIMENSIONES */}
        <div className="q-nav-actions">
          <button 
            type="button"
            className="btn-prev"
            disabled={currentDimensionIndex === 0}
            onClick={() => handleDimensionChange(currentDimensionIndex - 1)}
          >
            <span className="material-symbols-outlined notranslate" translate="no">arrow_back</span>
            Dimensión Anterior
          </button>

          {currentDimensionIndex < totalDimensions - 1 ? (
            <button 
              type="button"
              className="btn-next"
              disabled={!isCurrentDimComplete}
              onClick={() => handleDimensionChange(currentDimensionIndex + 1)}
            >
              Siguiente Dimensión
              <span className="material-symbols-outlined notranslate" translate="no">arrow_forward</span>
            </button>
          ) : (
            <button 
              type="button"
              className="btn-finish"
              disabled={!isAllStep2Completed}
              onClick={() => {
                setStep(3);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Pasar al Paso 3
              <span className="material-symbols-outlined notranslate" translate="no">arrow_forward</span>
            </button>
          )}
        </div>
      </div>

      {/* TABLA RESUMEN EN TIEMPO REAL */}
      <div className="summary-section">
        <h3 className="section-title">RESUMEN — nivel y brecha por dimensión</h3>
        <div className="table-responsive">
          <table className="results-table">
            <thead>
              <tr>
                <th>Dimensión</th>
                <th>Su puntaje (0-4)</th>
                <th>Su nivel</th>
                <th>Meta ref. (del diagnóstico)</th>
                <th>Brecha</th>
                <th>Su propia meta (opcional)</th>
                <th>Brecha vs su propia meta</th>
              </tr>
            </thead>
            <tbody>
              {dimensionResults.map((row, idx) => (
                <tr 
                  key={row.id} 
                  className={idx === currentDimensionIndex ? "row-highlight" : ""}
                  onClick={() => handleDimensionChange(idx)}
                  style={{ cursor: "pointer" }}
                >
                  <td><strong>{row.id}.</strong> {row.name}</td>
                  <td>{row.score !== null ? row.score.toFixed(2) : "-"}</td>
                  <td>
                    {row.level !== "-" ? (
                      <span className={`level-badge ${row.level.toLowerCase().replace(' ', '-')}`}>
                        {row.level}
                      </span>
                    ) : "-"}
                  </td>
                  <td>{row.targetRef}</td>
                  <td>{row.gap !== null ? row.gap.toFixed(2) : "-"}</td>
                  <td onClick={(e) => e.stopPropagation()}>
                    <input 
                      type="number" 
                      min="0" 
                      max="4" 
                      step="0.1" 
                      className="custom-target-input" 
                      placeholder="Ej: 4.0"
                      value={row.customTarget} 
                      onChange={(e) => updateStep2CustomTarget(row.id, e.target.value)}
                    />
                  </td>
                  <td>{typeof row.gapVsCustom === 'number' ? row.gapVsCustom.toFixed(2) : "-"}</td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="row-general">
                <td>PUNTAJE GENERAL</td>
                <td><strong>{generalScore !== null ? generalScore.toFixed(2) : "-"}</strong></td>
                <td><strong>{generalLevel}</strong></td>
                <td colSpan="4"></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="step2-actions">
          <button className="btn-prev" onClick={() => {
            setStep(1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <span className="material-symbols-outlined notranslate" translate="no">arrow_back</span>
            Volver al Paso 1
          </button>

          {isAllStep2Completed && (
            <button className="btn-finish" onClick={() => {
              setStep(3);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              Continuar al Paso 3
              <span className="material-symbols-outlined notranslate" translate="no">arrow_forward</span>
            </button>
          )}
        </div>
      </div>

    </div>
  );
};