import React from 'react';
import { domainLevelsData, domainLevelsInfo } from '../../data/competenciesData';
import './NivelesDominio.css';

export const NivelesDominio = () => {
  return (
    <div className="domain-levels-wrapper">
      
      {/* ENCABEZADO */}
      <div className="domain-header-card">
        <div className="domain-header-icon">
          <span className="material-symbols-outlined notranslate" translate="no">
            bar_chart
          </span>
        </div>
        <div className="domain-header-content">
          <h2 className="domain-title">Niveles de dominio</h2>
          <p className="domain-subtitle">
            Conoce cómo evoluciona el desarrollo de tus competencias y qué caracteriza cada nivel.
          </p>
        </div>
      </div>

      {/* LISTA DE TARJETAS DE NIVELES */}
      <div className="domain-cards-list">
        {domainLevelsData?.map((level) => (
          <div key={level.id} className={`domain-level-card ${level.colorClass}`}>
            
            <div className="level-left-group">
              <div className="level-icon-wrapper">
                <span className="material-symbols-outlined level-icon notranslate" translate="no">
                  {level.icon}
                </span>
              </div>
              <div className="level-badge-title">
                <span className="level-dot" style={{ backgroundColor: level.badgeColor }}></span>
                <span className="level-name">{level.title}</span>
              </div>
            </div>

            <div className="level-description">
              <p>{level.description}</p>
            </div>

          </div>
        ))}
      </div>

      {/* TARJETA INFORMATIVA */}
      {domainLevelsInfo && (
        <div className="domain-info-card">
          <div className="info-icon">
            <span className="material-symbols-outlined notranslate" translate="no">
              info
            </span>
          </div>
          <div className="info-content">
            <h3 className="info-title">{domainLevelsInfo.title}</h3>
            <p className="info-desc">{domainLevelsInfo.description}</p>
          </div>
        </div>
      )}

    </div>
  );
};