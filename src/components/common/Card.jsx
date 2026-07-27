// src/components/common/Card.jsx
import React from 'react';

export const Card = ({ icon, title, description }) => {
  return (
    <article className="card">
      <div className="card-icon-container">
        {/* Verifica si es una ruta de imagen para renderizar <img> */}
        <img src={icon} alt={title} className="card-icon-img" />
      </div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <a href="#" className="card-arrow">
        <span className="material-symbols-outlined">
          arrow_forward_ios
        </span>

      </a>
    </article>
  );
};