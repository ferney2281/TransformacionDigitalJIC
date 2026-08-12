// src/components/common/TrendCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './TrendCard.css';

export const TrendCard = ({ trend }) => {
  // Priorizamos actionRoute que viene en el JSON, o construimos con slug/id
  const targetRoute = trend.actionRoute 
    ? trend.actionRoute 
    : (trend.slug ? `/tendencias/${trend.slug}` : `/tendencias/${trend.id}`);

  return (
    <article className="trend-card">
      <div className="trend-card-header">
        <div className="trend-badges">
          <span className="badge-eje">{trend.eje || 'EJE A'}</span>
          <span className="badge-tag">{trend.tag || 'Paradigmas'}</span>
        </div>
        <button className="trend-bookmark-btn" aria-label="Guardar tendencia">
          <span className="material-symbols-outlined notranslate" translate="no">
            bookmark
          </span>
        </button>
      </div>

      <div className="trend-icon-circle">
        <img src={trend.iconUrl || '/icons/globe-icon.png'} alt={trend.title} />
      </div>

      <div className="trend-card-body">
        <h3 className="trend-title">{trend.title}</h3>
        <p className="trend-description">{trend.description}</p>
      </div>

      <div className="trend-card-footer">
        <div className="trend-info-box">
          <span className="material-symbols-outlined trend-info-icon notranslate" translate="no">
            language
          </span>
          <div className="trend-info-text">
            <span className="trend-info-label">{trend.typeLabel || 'Tendencia global'}</span>
            <span className="trend-info-subtext">{trend.typeSubtext || 'Impacto actual y creciente'}</span>
          </div>
        </div>

        <Link to={targetRoute} className="btn-trend-action">
          <span>{trend.buttonText || 'Explorar tendencia'}</span>
          <span className="material-symbols-outlined notranslate" translate="no">
            arrow_forward
          </span>
        </Link>
      </div>
    </article>
  );
};