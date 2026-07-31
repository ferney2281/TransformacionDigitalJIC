// src/pages/Tools.jsx
import React from 'react';
import { toolsData } from '../data/toolsData';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ToolCard } from '../components/common/ToolCard';
import './Tools.css';

export const Tools = () => {
  // Extraemos el arreglo de herramientas directamente desde el archivo modularizado
  const toolsList = toolsData.tools || [];

  return (
    <div className="main-layout">
      {/* Navegación indicando la vista activa */}
      <Navbar activePage="herramientas" />

      <div className="content-bg-wrapper">
        {/* ENCABEZADO DE LA PÁGINA */}
        <section className="container tools-hero-section">
          <div className="tools-hero-header">
            <div className="tools-hero-icon-circle">
              <img src={toolsData.icon} alt="Herramientas 5RI" />
            </div>
            <div>
              <h1 className="tools-hero-title">{toolsData.title || 'Herramientas Digitales'}</h1>
              <p className="tools-hero-subtitle">
                {toolsData.subtitle || 'Explora los instrumentos para impulsar la transformación en tu organización.'}
              </p>
            </div>
          </div>
        </section>

        {/* REJILLA DE TARJETAS DE HERRAMIENTAS */}
        <section className="container tools-grid-section">
          <div className="tools-grid">
            {toolsList.length > 0 ? (
              toolsList.map((tool) => (
                <ToolCard key={tool.id || tool.title} tool={tool} />
              ))
            ) : (
              <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem 0' }}>
                No hay herramientas disponibles en este momento.
              </p>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};