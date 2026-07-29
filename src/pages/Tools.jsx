// src/pages/Tools.jsx
import React from 'react';
import { siteContent } from '../data/contentData';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { ToolCard } from '../components/common/ToolCard';
import './Tools.css';

export const Tools = () => {
  // 1. Extraemos el arreglo de forma segura. 
  // Busca si existe siteContent.toolsPage.tools, si es un arreglo directo, o si no devuelve un []
  const toolsData = 
    siteContent.toolsPage?.tools || 
    (Array.isArray(siteContent.toolsPage) ? siteContent.toolsPage : []);

  return (
    <div className="main-layout">
      <Navbar activePage="herramientas" />

      <div className="content-bg-wrapper">
        {/* ENCABEZADO DE LA PÁGINA */}
        <section className="container tools-hero-section">
          <div className="tools-hero-header">
            <div className="tools-hero-icon-circle">
              <img src="/TransformacionDigitalJIC/tool.svg" alt="Herramientas 5RI" />
            </div>
            <div>
              <h1 className="tools-hero-title">Herramientas Digitales</h1>
              <p className="tools-hero-subtitle">
                Explora los instrumentos para impulsar la transformación en tu organización.
              </p>
            </div>
          </div>
        </section>

        {/* REJILLA DE TARJETAS DE HERRAMIENTAS */}
        <section className="container tools-grid-section">
          <div className="tools-grid">
            {/* 2. Renderizado seguro comprobando si es un Array con elementos */}
            {toolsData.length > 0 ? (
              toolsData.map((tool) => (
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