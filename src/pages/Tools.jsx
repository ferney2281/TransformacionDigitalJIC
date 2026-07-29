// src/pages/Tools.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/contentData';
import { ToolCard } from '../components/common/ToolCard';

export const Tools = () => {
  const { header, toolsPage } = siteContent;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main-layout">
      {/* HEADER NAVEGACIÓN */}
      <header className="navbar">
        <div className="container navbar-content">
          <div className="logo-container">
            {header.logoUrl && (
              <img src={header.logoUrl} alt={header.logoText} className="logo-img" />
            )}
          </div>

          {/* Menú Hamburguesa en móvil */}
          <button 
            className={`hamburger ${isMenuOpen ? 'is-active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>

          <nav className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-menu">
              {header.navLinks.map((item) => {
                // Evaluamos si el enlace actual es la página activa (Tools)
                const isActive = item.id === 'herramientas' || item.id === 'tools';
                return (
                  <li key={item.id} className={`nav-item ${isActive ? 'active' : ''}`}>
                    <Link 
                      to={isActive ? '/tools' : '/'} 
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <button className="btn-primary nav-cta">{header.ctaButton}</button>
          </nav>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="content-bg-wrapper">
        
        {/* HERO DE HERRAMIENTAS */}
        <section className="container tools-hero-section">
          <div className="tools-hero-header">
            <div className="tools-hero-icon-circle">
              {toolsPage?.iconUrl ? (
                <img src={toolsPage.iconUrl} alt="Herramientas" className="tools-hero-icon" />
              ) : (
                <span className="material-symbols-outlined">build</span>
              )}
            </div>
            <div className="tools-hero-text">
              <h1 className="tools-hero-title">{toolsPage?.title || "Herramientas"}</h1>
              <p className="tools-hero-subtitle">{toolsPage?.subtitle}</p>
            </div>
          </div>
        </section>

        {/* GRILLA DE TARJETAS */}
        <section className="container tools-grid-section">
          <div className="tools-grid">
            {toolsPage?.toolsList?.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer"></footer>
    </div>
  );
};