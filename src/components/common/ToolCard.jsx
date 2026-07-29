// src/components/common/ToolCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const ToolCard = ({ tool }) => {
  const { badge, title, subtitle, description, timeText, duration, buttonText, link, iconUrl } = tool;

  return (
    <article className="tool-card">
      {/* Encabezado de la tarjeta: Badge y Bookmark */}
      <div className="tool-card-top">
        <span className="tool-badge">{badge}</span>
        <button className="tool-bookmark-btn" aria-label="Guardar herramienta">
          <span className="material-symbols-outlined notranslate" translate="no">
            bookmark
          </span>
        </button>
      </div>

      {/* Icono Central */}
      <div className="tool-icon-circle">
        {iconUrl ? (
          <img src={iconUrl} alt={title} className="tool-icon-img" />
        ) : (
          <span className="material-symbols-outlined tool-fallback-icon">thermostat</span>
        )}
      </div>

      {/* Textos Principales */}
      <div className="tool-card-body">
        <h3 className="tool-title">{title}</h3>
        <span className="tool-subtitle">{subtitle}</span>
        <p className="tool-description">{description}</p>
      </div>

      {/* Caja de Tiempo/Duración */}
      <div className="tool-time-box">
        <span className="material-symbols-outlined notranslate tool-clock-icon" translate="no">
          schedule
        </span>
        <div className="tool-time-info">
          <strong className="tool-time-text">{timeText}</strong>
          <span className="tool-duration">{duration}</span>
        </div>
      </div>

      {/* Botón de Acción */}
      <Link to={link || '#'} className="btn-tool-action">
        <span>{buttonText}</span>
        <span className="material-symbols-outlined notranslate" translate="no">
          arrow_forward
        </span>
      </Link>
    </article>
  );
};