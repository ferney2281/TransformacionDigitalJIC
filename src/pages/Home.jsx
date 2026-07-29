// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../data/contentData';
import { Card } from '../components/common/Card';

export const Home = () => {
  const { header, hero, cards, bannerCta } = siteContent;
  
  // Estado para controlar la apertura del menú en celulares
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="main-layout">
      {/* 1. HEADER / NAVEGACIÓN */}
      <header className="navbar">
        <div className="container navbar-content">
          
          {/* LOGO */}
          <div className="logo-container">
            {header.logoUrl && (
              <img 
                src={header.logoUrl} 
                alt={header.logoText} 
                className="logo-img" 
              />
            )}
          </div>

          {/* BOTÓN HAMBURGUESA (Móvil) */}
          <button 
            className={`hamburger ${isMenuOpen ? 'is-active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </button>

          {/* MENÚ DE NAVEGACIÓN */}
          <nav className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
            <ul className="nav-menu">
              {header.navLinks.map((item) => (
                <li key={item.id} className={`nav-item ${item.active ? 'active' : ''}`}>
                  {/* Usamos <Link> para evitar que la página recargue al cambiar de sección */}
                  <Link 
                    to={item.id === 'herramientas' || item.id === 'tools' ? '/tools' : '/'} 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="btn-primary nav-cta">{header.ctaButton}</button>
          </nav>

        </div>
      </header>

      {/* ENVOLTORIO PARA LA IMAGEN DE FONDO */}
      <div className="content-bg-wrapper">
        
        {/* 2. HERO SECTION */}
        <section className="container hero-section">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-green">{hero.titlePart1}</span>
              <span className="title-gold">{hero.titlePart2}</span>
            </h1>
            <p className="hero-description">{hero.description}</p>
            <button className="btn-primary">{hero.buttonText}</button>
          </div>
          <div className="hero-image">
            <img src={hero.imageUrl} alt="Transformación Digital 5RI" />
          </div>
        </section>

        {/* 3. SECCIÓN DE CARDS */}
        <section className="container cards-grid">
          {cards.map((card) => (
            <Card 
              key={card.id} 
              id={card.id}
              icon={card.icon} 
              title={card.title} 
              description={card.description} 
            />
          ))}
        </section>

        {/* 4. BANNER CTA */}
        <section className="container">
          <div className="banner-cta">
            <div className="banner-left">
              <span className="icon-bulb">💡</span>
              <span className="banner-title">{bannerCta.title}</span>
            </div>
            <div className="banner-divider"></div>
            <div className="banner-subtitle">
              {bannerCta.subtitle}
            </div>
            <button className="btn-primary">{bannerCta.buttonText}</button>
          </div>
        </section>

      </div>

      {/* 5. FOOTER */}
      <footer className="footer"></footer>
    </div>
  );
};