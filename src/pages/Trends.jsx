// src/pages/Trends.jsx
import React from 'react';
import { trendsData } from '../data/trendsData';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { TrendCard } from '../components/common/TrendCard';
import './Trends.css';

export const Trends = () => {
  // Extraemos el arreglo de tendencias directamente del archivo modularizado
  const trendsList = trendsData.trends || [];

  return (
    <div className="main-layout">
      {/* Navegación indicando la vista activa */}
      <Navbar activePage="tendencias" />

      <div className="content-bg-wrapper">
        {/* ENCABEZADO DE LA PÁGINA */}
        <section className="container trends-hero-section">
          <div className="trends-hero-header">
            <div className="trends-hero-icon-circle">
              <img src="/TransformacionDigitalJIC/tendenciasIcon.svg" alt="Tendencias 5RI" />
            </div>
            <div>
              <h1 className="trends-hero-title">{trendsData.title || 'Tendencias'}</h1>
              <p className="trends-hero-subtitle">
                {trendsData.subtitle || 'Conoce las tendencias que están transformando el mundo.'}
              </p>
            </div>
          </div>
        </section>

        {/* REJILLA DE TARJETAS DE TENDENCIAS */}
        <section className="container trends-grid-section">
          <div className="trends-grid">
            {trendsList.length > 0 ? (
              trendsList.map((trend) => (
                <TrendCard key={trend.id || trend.title} trend={trend} />
              ))
            ) : (
              <p style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '2rem 0' }}>
                No hay tendencias disponibles en este momento.
              </p>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};