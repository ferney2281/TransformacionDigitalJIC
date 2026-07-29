// src/components/common/Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export const Card = ({ id, icon, title, description }) => {
  const route = id === 'herramientas' || id === 'tools' || id === '1' ? '/tools' : '#';

  return (
    <article className="card-item">
      <div className="card-icon-container">
        <img src={icon} alt={title} className="card-icon-img" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>

      <Link to={route} className="card-arrow" aria-label={`Ver más sobre ${title}`}>
        <span className="material-symbols-outlined notranslate" translate="no">
          arrow_forward_ios
        </span>
      </Link>
    </article>
  );
};