import React, { useRef, useState } from 'react';
import { useQuestionnaire } from '../../context/QuestionnaireContext';
import { DimensionsRadarChart } from './DimensionsRadarChart';
import { exportReportToPDF } from '../../services/pdf/pdfExportService';
import { 
  step2DimensionsData, 
  step4PillarsData, 
  getDimensionLevel,
  getThermometerLevel,
  areasOptions,
  actionsDatabase,
  metaDataMap
} from '../../data/questionnaireData';

export const Step5Report = () => {
  const { questionnaireState = {}, updateSelectedArea, setStep } = useQuestionnaire();
  const { 
    selectedArea = "", 
    step1Answers = {}, 
    step2Answers = {}, 
    step2CustomTargets = {}, 
    miMeta = "", 
    step4Answers = {} 
  } = questionnaireState;

  const reportRef = useRef(null);
  const [isExporting, setIsExporting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // Normaliza el texto del nivel hacia las claves exactas de actionsDatabase
  const getNormalizedLevelKey = (levelStr) => {
    if (!levelStr) return "Limitado";
    const str = levelStr.toLowerCase();
    if (str.includes("lider") || str.includes("líder")) return "Líder";
    if (str.includes("avanzado")) return "Avanzado";
    if (str.includes("trans")) return "Transición";
    return "Limitado";
  };

  // 1. Paso 1
  const step1Scores = Object.values(step1Answers).map(v => Number(v) || 0);
  const digitalThermometerScore = step1Scores.reduce((acc, curr) => acc + curr, 0);
  const digitalThermometerMax = 24;
  const thermometerInfo = getThermometerLevel(digitalThermometerScore);

  // 2. Paso 2
  const dimensionResults = (step2DimensionsData || []).map((dim) => {
    const questions = dim.questions || [];
    const answeredQ = questions.filter((q) => step2Answers[q.id] !== undefined && step2Answers[q.id] !== '');
    const score = questions.length > 0 && answeredQ.length === questions.length 
      ? (questions.reduce((acc, q) => acc + Number(step2Answers[q.id] || 0), 0) / questions.length) * 2 
      : (dim.defaultScore || 0);

    const level = score !== null && typeof getDimensionLevel === 'function' ? getDimensionLevel(score) : "-";
    const gap = score !== null ? Math.max(0, (dim.targetRef || 0) - score) : 0;
    const customTarget = step2CustomTargets[dim.id] ?? "";
    let gapVsCustom = "-";
    if (score !== null && customTarget !== "" && customTarget !== null) {
      const parsedTarget = parseFloat(customTarget);
      if (!isNaN(parsedTarget)) {
        const diff = parsedTarget - score;
        gapVsCustom = diff < 0 ? 0 : diff;
      }
    }
    return { ...dim, score, level, gap, customTarget, gapVsCustom };
  });

  // CÁLCULO DEL PUNTAJE Y NIVEL GENERAL
  const totalScores = dimensionResults.map(d => d.score);
  const generalScore = totalScores.length > 0 ? totalScores.reduce((a, b) => a + b, 0) / totalScores.length : 0;
  const generalLevel = typeof getDimensionLevel === 'function' ? getDimensionLevel(generalScore) : "Limitado";

  // OBTENCIÓN GLOBAL DE ACCIONES BASADAS EN EL NIVEL GENERAL DE LA EMPRESA
  const generalLevelKey = getNormalizedLevelKey(generalLevel);
  const globalActionsForLevel = actionsDatabase[generalLevelKey] || actionsDatabase["Limitado"];

  // 3. Paso 3
  const metaInfo = metaDataMap[miMeta] || { label: miMeta || "No seleccionada", tools: "14 y 15" };

  // 4. Paso 4
  const pillarsList = step4PillarsData || [];
  const getPillarScore = (pillar) => {
    if (!pillar || !pillar.questions) return 0;
    return pillar.questions.reduce((sum, q) => {
      const val = step4Answers[q.id];
      return sum + (val !== undefined && val !== '' ? Number(val) : 0);
    }, 0);
  };
  const pilarScore = pillarsList.reduce((acc, p) => acc + getPillarScore(p), 0);
  const pilarMax = pillarsList.reduce((acc, p) => acc + (p.maxScore || 0), 0);

  let pilarPrioritario = "Sin definir";
  let minRatio = Infinity;
  pillarsList.forEach((p) => {
    const score = getPillarScore(p);
    const max = p.maxScore || 6;
    const ratio = max > 0 ? score / max : 0;
    if (ratio < minRatio) {
      minRatio = ratio;
      pilarPrioritario = p.name ? p.name.replace(/Pilar \d+\.\s*/, '') : "Sin definir";
    }
  });

  // HANDLER LIMPIO Y DELEGADO AL SERVICIO DE PDF
  const handleExportPDF = async () => {
    if (!selectedArea) {
      alert("Por favor seleccione el área de la empresa antes de exportar.");
      return;
    }

    setIsExporting(true);
    setSuccessMessage('');

    try {
      const fileName = `Reporte_Diagnostico_${selectedArea}_${Date.now()}.pdf`;
      await exportReportToPDF(reportRef.current, fileName);

      setSuccessMessage('¡Informe exportado a PDF correctamente!');
      window.scrollTo({ top: 0, behavior: 'smooth' });

    } catch (error) {
      console.error("Error al exportar el reporte:", error);
      alert("Ocurrió un error al generar el archivo PDF.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="step5-report-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
      
      {/* Reglas CSS inyectadas para forzar el comportamiento anti-corte en PDF */}
      <style>{`
        .pdf-section {
          page-break-inside: avoid !important;
          break-inside: avoid !important;
        }
      `}</style>

      {/* MENSAJE DE ÉXITO */}
      {successMessage && (
        <div style={{ padding: '1rem', backgroundColor: '#dcfce7', border: '1px solid #86efac', borderRadius: '12px', color: '#166534', fontWeight: 'bold', textAlign: 'center' }}>
          {successMessage}
        </div>
      )}

      {/* ÁREA QUE SERÁ IMPRESA EN EL PDF DIVIDIDA EN .pdf-section */}
      <div ref={reportRef} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', backgroundColor: '#ffffff', padding: '1rem' }}>
        
        {/* SELECCIÓN ÁREA */}
        <div className="pdf-section q-card" style={{ padding: '1.5rem 2rem', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <label htmlFor="areaSelect" style={{ display: 'block', fontWeight: 'bold', fontSize: '1.1rem', color: '#0f172a', marginBottom: '0.5rem' }}>
            Área de la Empresa
          </label>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '1rem' }}>
            Seleccione el área perteneciente para segmentar los resultados del informe:
          </p>
          <select
            id="areaSelect"
            value={selectedArea}
            onChange={(e) => updateSelectedArea && updateSelectedArea(e.target.value)}
            style={{ width: '100%', maxWidth: '400px', padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', backgroundColor: '#ffffff', color: '#0f172a' }}
          >
            <option value="">Seleccione un área...</option>
            {(areasOptions || []).map((area) => (
              <option key={area.id} value={area.id}>{area.label}</option>
            ))}
          </select>
        </div>

        {/* TERMÓMETRO */}
        <div className="pdf-section" style={{ padding: '1.5rem 2rem', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', margin: '0 0 0.5rem 0' }}>Resultados del Termómetro Digital</h4>
            <p style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', color: '#dc2626', fontWeight: '600' }}>Nivel: {thermometerInfo.level}</p>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#334155' }}>{thermometerInfo.recommendation}</p>
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#064e3b', whiteSpace: 'nowrap' }}>
            {digitalThermometerScore} / {digitalThermometerMax} pts
          </div>
        </div>

        {/* TABLA RESUMEN */}
        <div className="pdf-section summary-section" style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', marginBottom: '1.25rem', textTransform: 'uppercase' }}>
            RESUMEN — NIVEL Y BRECHA POR DIMENSIÓN
          </h3>
          <div className="table-responsive" style={{ overflowX: 'auto' }}>
            <table className="results-table" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ backgroundColor: '#0f2942', color: '#ffffff' }}>
                  <th style={{ padding: '0.75rem 1rem' }}>Dimensión</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Su puntaje (0-4)</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Su nivel</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Meta ref.</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Brecha</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Propiameta</th>
                  <th style={{ padding: '0.75rem 0.5rem' }}>Brecha vs propia</th>
                </tr>
              </thead>
              <tbody>
                {dimensionResults.map((row) => (
                  <tr key={row.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: '600' }}>{row.id}. {row.name}</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>{(row.score || 0).toFixed(2)}</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>
                      <span style={{ padding: '4px 10px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600', backgroundColor: row.level === 'Líder' ? '#dcfce7' : row.level === 'Avanzado' ? '#dbeafe' : (row.level === 'En transición' || row.level === 'Transición') ? '#fef3c7' : '#fee2e2', color: row.level === 'Líder' ? '#15803d' : row.level === 'Avanzado' ? '#1d4ed8' : (row.level === 'En transición' || row.level === 'Transición') ? '#b45309' : '#b91c1c' }}>
                        {row.level}
                      </span>
                    </td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>{(row.targetRef || 0).toFixed(2)}</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>{(row.gap || 0).toFixed(2)}</td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>
                      <input type="text" readOnly value={row.customTarget} style={{ width: '60px', padding: '2px 6px', borderRadius: '4px', border: '1px solid #cbd5e1', textAlign: 'center' }} />
                    </td>
                    <td style={{ padding: '0.75rem 0.5rem' }}>{typeof row.gapVsCustom === 'number' ? row.gapVsCustom.toFixed(2) : row.gapVsCustom}</td>
                  </tr>
                ))}
                <tr style={{ backgroundColor: '#f8fafc', fontWeight: 'bold' }}>
                  <td style={{ padding: '0.75rem 1rem' }}>PUNTAJE GENERAL</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>{generalScore.toFixed(2)}</td>
                  <td style={{ padding: '0.75rem 0.5rem' }}>{generalLevel}</td>
                  <td colSpan="4"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* PASO 3 RESULTADOS */}
        <div className="pdf-section" style={{ padding: '1.5rem 2rem', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Resultados del Paso 3 — Énfasis según su meta</h4>
          <p style={{ margin: 0, fontSize: '1rem', color: '#d97706', fontWeight: '600' }}>Meta seleccionada: {metaInfo.label}</p>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#334155' }}>Refuerce las herramientas {metaInfo.tools}.</p>
        </div>

        {/* PASO 4 RESULTADOS */}
        <div className="pdf-section" style={{ padding: '1.5rem 2rem', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ flex: 1 }}>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', margin: '0 0 0.5rem 0' }}>Resultados de los Pilares de la Industria 5.0</h4>
            <p style={{ margin: '0 0 0.25rem 0', fontSize: '1rem', color: '#d97706', fontWeight: '600' }}>Pilar prioritario: {pilarPrioritario}</p>
            <p style={{ margin: 0, fontSize: '0.95rem', color: '#334155' }}>Llévelo como prioridad a la Herramienta 6.</p>
          </div>
          <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#064e3b', whiteSpace: 'nowrap' }}>
            {pilarScore} / {pilarMax} pts
          </div>
        </div>

        {/* TRANSVERSALES */}
        <div className="pdf-section" style={{ padding: '1.5rem 2rem', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>Siempre, en paralelo — Transversales</h4>
          <p style={{ margin: 0, fontSize: '0.95rem', color: '#334155' }}>Herramienta 5 (priorizar) · 6 (hoja de ruta) · 12 (medir) · 17 (apoyo y financiación) · 18 (matriz de estrategias de innovación).</p>
        </div>

        {/* MODULACIÓN TAMAÑO */}
        <div className="pdf-section" style={{ padding: '1.5rem 2rem', backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>El tamaño solo modula (no cambia el camino)</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.95rem', color: '#334155' }}>
            <p style={{ margin: 0 }}><strong style={{ color: '#0f172a' }}>Micro y pequeña:</strong> empiece por lo de bajo costo y alto impacto; apóyese en la oferta institucional (Herramienta 17).</p>
            <p style={{ margin: 0 }}><strong style={{ color: '#0f172a' }}>Mediana y grande:</strong> mayor profundidad de pilotos, gobernanza formal y rol tractor sobre su cadena de proveedores.</p>
          </div>
        </div>

        {/* ACCIONES RECOMENDADAS - CADA DIMENSIÓN ES UN BLOQUE PDF-SECTION SEPARADO */}
        <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>
              Acciones recomendadas por Dimensión
            </h3>
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#1e40af', backgroundColor: '#dbeafe', padding: '6px 12px', borderRadius: '8px' }}>
              Nivel General: {generalLevel}
            </span>
          </div>

          {dimensionResults.map((dimRes) => {
            const dimCode = dimRes.code || `D${dimRes.id}`;
            const dimActions = globalActionsForLevel.filter(a => a.dim === dimCode);

            return (
              <div 
                key={dimRes.id}
                className="pdf-section"
                style={{
                  padding: '1.5rem 2rem',
                  backgroundColor: '#f8fafc',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#0f172a', margin: 0 }}>
                    {dimRes.id}. {dimRes.name}
                  </h4>
                  <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#64748b', backgroundColor: '#f1f5f9', padding: '4px 10px', borderRadius: '8px' }}>
                    Puntaje indiv.: {dimRes.score.toFixed(2)} ({dimRes.level})
                  </span>
                </div>

                {dimActions.length > 0 ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {dimActions.map((act) => (
                      <div 
                        key={act.id} 
                        style={{ 
                          padding: '0.75rem 1rem', 
                          backgroundColor: '#ffffff', 
                          borderRadius: '8px', 
                          border: '1px solid #cbd5e1',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.25rem'
                        }}
                      >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={{ fontSize: '0.8rem', fontWeight: 'bold', color: '#2563eb' }}>ID: {act.id}</span>
                          <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#d97706', backgroundColor: '#fef3c7', padding: '2px 8px', borderRadius: '4px' }}>
                            {act.horizon}
                          </span>
                        </div>
                        <p style={{ margin: 0, fontSize: '0.95rem', color: '#334155', lineHeight: '1.4' }}>
                          {act.action}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p style={{ margin: 0, fontSize: '0.9rem', color: '#94a3b8', fontStyle: 'italic' }}>
                    No hay acciones sugeridas para la dimensión {dimCode} en el nivel general {generalLevel}.
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* GRÁFICO DE RADAR - SECCIÓN INDIVIDUAL ATÓMICA */}
        <div className="pdf-section" style={{ padding: '1rem', backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
          <DimensionsRadarChart dimensionResults={dimensionResults} />
        </div>

      </div>

      {/* BARRA DE NAVEGACIÓN Y BOTÓN EXPORTAR */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem' }}>
        <button 
          type="button"
          onClick={() => {
            if (setStep) setStep(4);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{
            padding: '0.75rem 1.4rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: '#f1f5f9',
            color: '#64748b',
            fontWeight: '600',
            cursor: 'pointer'
          }}
        >
          Volver al Paso 4
        </button>

        <button
          type="button"
          onClick={handleExportPDF}
          disabled={isExporting}
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: isExporting ? '#94a3b8' : '#2563eb',
            color: '#ffffff',
            fontWeight: 'bold',
            cursor: isExporting ? 'not-allowed' : 'pointer'
          }}
        >
          {isExporting ? 'Exportando PDF...' : 'Exportar Informe a PDF'}
        </button>
      </div>

    </div>
  );
};