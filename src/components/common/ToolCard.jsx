// src/components/common/ToolCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ToolCard.css';

export const ToolCard = ({ tool }) => {
  return (
    <article className="tool-card">
      <div className="tool-card-top">
        <span className="tool-badge">{tool.badgeText || 'Herramienta'}</span>
        <button className="tool-bookmark-btn" aria-label="Guardar herramienta">
          {/* Agregamos translate="no" y notranslate */}
          <span className="material-symbols-outlined notranslate" translate="no">
            bookmark
          </span>
        </button>
      </div>

      <div className="tool-icon-circle">
        <img src={tool.iconUrl} alt={tool.title} />
      </div>

      <div className="tool-card-body">
        <h3 className="tool-title">{tool.title}</h3>
        <span className="tool-subtitle">{tool.subtitle}</span>
        <p className="tool-description">{tool.description}</p>
      </div>

      <div className="tool-card-footer">
        <div className="tool-time-box">
          {/* Agregamos translate="no" y notranslate */}
          <span className="material-symbols-outlined tool-clock-icon notranslate" translate="no">
            schedule
          </span>
          <div className="tool-time-info">
            <span className="tool-time-text">Tiempo estimado</span>
            <span className="tool-duration">{tool.duration}</span>
          </div>
        </div>

        <Link to={tool.actionRoute || '#'} className="btn-tool-action">
          <span>{tool.buttonText || 'Comenzar'}</span>
          {/* Agregamos translate="no" y notranslate */}
          <span className="material-symbols-outlined notranslate" translate="no">
            arrow_forward
          </span>
        </Link>
      </div>
    </article>
  );
};