import React from 'react';
import { useNavigate } from 'react-router-dom';
import { siteContent } from '../data/contentData';

import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Card } from '../components/common/Card';
import './Home.css';

export const Home = () => {
  const { hero, cards, bannerCta } = siteContent;
  const navigate = useNavigate();

  const handleStartQuestionnaire = () => {
    navigate('/questionnaire'); // Cambia '/cuestionario' por la ruta real de tu diagnóstico
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="main-layout">
      <Navbar activePage="inicio" />

      <div className="content-bg-wrapper">
        {/* HERO SECTION */}
        <section className="container hero-section">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-green">{hero.titlePart1}</span>
              <span className="title-gold">{hero.titlePart2}</span>
            </h1>
            <p className="hero-description">{hero.description}</p>
            <button 
              type="button"
              className="btn-primary" 
              onClick={handleStartQuestionnaire}
            >
              {hero.buttonText}
            </button>
          </div>
          <div className="hero-image">
            <img src={hero.imageUrl} alt="Transformación Digital 5RI" />
          </div>
        </section>

        {/* CARDS GRID */}
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

        {/* BANNER CTA */}
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
            <button 
              type="button"
              className="btn-primary" 
              onClick={handleStartQuestionnaire}
            >
              {bannerCta.buttonText}
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};