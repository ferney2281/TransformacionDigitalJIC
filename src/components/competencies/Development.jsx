import React from 'react';
import { developmentData } from '../../data/competenciesData';
import './Development.css';

export const Development = () => {
  const { header, strategies, approach } = developmentData;

  return (
    <div className="development-container">
      <div className="development-card">
        
        {/* HEADER */}
        <div className="development-header-block">
          <div className="development-header-icon">
            <span className="material-symbols-outlined notranslate" translate="no">
              {header.icon}
            </span>
          </div>
          <div>
            <h2 className="development-header-title">{header.title}</h2>
            <p className="development-header-desc">{header.description}</p>
          </div>
        </div>

        {/* ESTRATEGIAS CLAVE */}
        <div className="development-section-block">
          <div className="development-section-title-wrap">
            <span className="material-symbols-outlined section-icon notranslate" translate="no">
              {strategies.icon}
            </span>
            <h3 className="development-section-title">{strategies.title}</h3>
          </div>

          <div className="development-strategies-list">
            {strategies.items.map((item) => (
              <div key={item.id} className="development-strategy-item">
                <div className="strategy-icon-circle">
                  <span className="material-symbols-outlined notranslate" translate="no">
                    {item.icon}
                  </span>
                </div>
                <div className="strategy-info">
                  <h4 className="strategy-title">{item.title}</h4>
                  <p className="strategy-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ENFOQUE */}
        <div className="development-section-block approach-block">
          <div className="development-section-title-wrap">
            <span className="material-symbols-outlined section-icon notranslate" translate="no">
              {approach.icon}
            </span>
            <h3 className="development-section-title">{approach.title}</h3>
          </div>
          <p className="development-approach-desc">{approach.description}</p>
        </div>

      </div>
    </div>
  );
};