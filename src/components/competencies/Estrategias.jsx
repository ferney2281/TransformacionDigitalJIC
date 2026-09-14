import React from 'react';
import { strategiesData } from '../../data/competenciesData';
import './Estrategias.css';

export const Estrategias = () => {
  const { header, items, aiAmplification } = strategiesData;

  return (
    <div className="estrategias-wrapper">
      {/* Encabezado */}
      <div className="estrategias-header">
        <div className="estrategias-header-icon">
          <span className="material-symbols-outlined notranslate" translate="no">
            {header.icon}
          </span>
        </div>
        <div>
          <h2 className="estrategias-title">{header.title}</h2>
          <p className="estrategias-subtitle">{header.description}</p>
        </div>
      </div>

      {/* Grid con las 7 estrategias */}
      <div className="estrategias-grid">
        {items.map((item) => (
          <div key={item.id} className="estrategia-card">
            <div className="estrategia-card-header">
              <span className="material-symbols-outlined estrategia-icon notranslate" translate="no">
                {item.icon}
              </span>
              <h3 className="estrategia-card-title">{item.title}</h3>
            </div>
            <p className="estrategia-card-desc">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Sección especial: La IA como amplificador */}
      {aiAmplification && (
        <div className="estrategias-ai-banner">
          <div className="ai-banner-icon-circle">
            <span className="material-symbols-outlined notranslate" translate="no">
              {aiAmplification.icon}
            </span>
          </div>
          <div className="ai-banner-text">
            <h3 className="ai-banner-title">{aiAmplification.title}</h3>
            <p className="ai-banner-desc">{aiAmplification.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};