// src/components/common/Card.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ id, icon, title, description }) => {
  // Determinamos a dónde dirigir la tarjeta según su ID
  const route = id === 'herramientas' || id === '1' ? '/herramientas' : '#';

  return (
    <article className="card">
      <div className="card-icon-container">
        <img src={icon} alt={title} className="card-icon-img" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      
      {/* Usamos Link en lugar de <a> para navegar sin recargar */}
      <Link to={route} className="card-arrow" aria-label={`Ver más sobre ${title}`}>
        <span className="material-symbols-outlined notranslate" translate="no">
          arrow_forward_ios
        </span>
      </Link>
    </article>
  );
};