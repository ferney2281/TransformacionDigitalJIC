// src/components/common/ToolCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ToolCard.css';

export const ToolCard = ({ tool }) => {
  // Determina la URL de destino (prioriza pdfUrl, luego actionRoute o '#')
  const targetUrl = tool.pdfUrl || tool.actionRoute || '#';
  
  // Verifica si es un recurso externo o un archivo (PDF, HTTP)
  const isExternalOrFile = tool.pdfUrl || targetUrl.startsWith('http') || targetUrl.endsWith('.pdf');

  return (
    <article className="tool-card">
      <div className="tool-card-top">
        <span className="tool-badge">{tool.badgeText || 'Herramienta'}</span>
        <button className="tool-bookmark-btn" aria-label="Guardar herramienta">
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
          <span className="material-symbols-outlined tool-clock-icon notranslate" translate="no">
            schedule
          </span>
          <div className="tool-time-info">
            <span className="tool-time-text">Tiempo estimado</span>
            <span className="tool-duration">{tool.duration}</span>
          </div>
        </div>

        {/* Si es un PDF o URL externa abre en nueva pestaña con <a>, de lo contrario usa <Link> */}
        {isExternalOrFile ? (
          <a 
            href={targetUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-tool-action"
          >
            <span>{tool.buttonText || 'Comenzar'}</span>
            <span className="material-symbols-outlined notranslate" translate="no">
              arrow_forward
            </span>
          </a>
        ) : (
          <Link to={targetUrl} className="btn-tool-action">
            <span>{tool.buttonText || 'Comenzar'}</span>
            <span className="material-symbols-outlined notranslate" translate="no">
              arrow_forward
            </span>
          </Link>
        )}
      </div>
    </article>
  );
};