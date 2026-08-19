import React from 'react';
import { roadmapData } from '../../data/competenciesData';
import './Roadmap.css';

export const Roadmap = () => {
  const { header, stages, recommendation } = roadmapData;

  return (
    <div className="roadmap-container">
      <div className="roadmap-card">
        
        {/* HEADER */}
        <div className="roadmap-header-block">
          <div className="roadmap-header-icon">
            <span className="material-symbols-outlined notranslate" translate="no">
              {header.icon}
            </span>
          </div>
          <div>
            <h2 className="roadmap-header-title">{header.title}</h2>
            <p className="roadmap-header-desc">{header.description}</p>
          </div>
        </div>

        {/* ETAPAS SUGERIDAS */}
        <div className="roadmap-stages-block">
          <h3 className="roadmap-stages-title">{stages.title}</h3>

          <div className="roadmap-timeline">
            {stages.items.map((item, index) => (
              <div key={item.step} className="roadmap-timeline-item">
                
                {/* Indicador numérico y conector vertical */}
                <div className="roadmap-step-connector">
                  <div className="roadmap-step-number">{item.step}</div>
                  {index < stages.items.length - 1 && <div className="roadmap-vertical-line" />}
                </div>

                {/* Contenido de la etapa */}
                <div className="roadmap-stage-card">
                  <div className="roadmap-stage-info">
                    <h4 className="roadmap-stage-title">{item.title}</h4>
                    <p className="roadmap-stage-desc">{item.description}</p>
                  </div>
                  <span className="roadmap-stage-badge">{item.badge}</span>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* RECOMENDACIÓN */}
        <div className="roadmap-recommendation-block">
          <div className="roadmap-recommendation-icon">
            <span className="material-symbols-outlined notranslate" translate="no">
              {recommendation.icon}
            </span>
          </div>
          <div className="roadmap-recommendation-info">
            <h4 className="roadmap-recommendation-title">{recommendation.title}</h4>
            <p className="roadmap-recommendation-desc">{recommendation.description}</p>
          </div>
        </div>

      </div>
    </div>
  );
};