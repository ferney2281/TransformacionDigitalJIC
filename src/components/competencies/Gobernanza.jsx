import React from 'react';
import { governanceData } from '../../data/competenciesData';
import './Gobernanza.css';

export const Gobernanza = () => {
  const { header, about, keyElements, action } = governanceData;

  return (
    <div className="gobernanza-container">
      <div className="gobernanza-card">
        
        {/* HEADER DE GOBERNANZA */}
        <div className="gobernanza-header-block">
          <div className="gobernanza-header-icon">
            <span className="material-symbols-outlined notranslate" translate="no">
              {header.icon}
            </span>
          </div>
          <div>
            <h2 className="gobernanza-header-title">{header.title}</h2>
            <p className="gobernanza-header-desc">{header.description}</p>
          </div>
        </div>

        {/* BLOQUE ¿QUÉ ES? */}
        <div className="gobernanza-about-block">
          <div className="gobernanza-about-icon">
            <span className="material-symbols-outlined notranslate" translate="no">
              {about.icon}
            </span>
          </div>
          <div>
            <h3 className="gobernanza-about-title">{about.title}</h3>
            <p className="gobernanza-about-desc">{about.description}</p>
          </div>
        </div>

        {/* BLOQUE ELEMENTOS CLAVE */}
        <div className="gobernanza-elements-block">
          <h3 className="gobernanza-elements-title">{keyElements.title}</h3>
          <ul className="gobernanza-elements-list">
            {keyElements.items.map((item, index) => (
              <li key={index} className="gobernanza-element-item">
                <span className="material-symbols-outlined gobernanza-check-icon notranslate" translate="no">
                  check_circle
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

       

      </div>
    </div>
  );
};