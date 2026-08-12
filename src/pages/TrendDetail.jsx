import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { trendsDetailData } from '../data/trendDetailData';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import './TrendDetail.css';

export const TrendDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('general');

  // Carga la tendencia por el slug o toma la primera disponible por defecto
  const trend = trendsDetailData[slug] || trendsDetailData["quinta-revolucion"] || {};

  // Al cambiar de tendencia (slug), resetea el scroll arriba del todo
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTab('general');
  }, [slug]);

  // Actualiza la pestaña activa automáticamente al hacer scroll por la página
  useEffect(() => {
    const sections = document.querySelectorAll('.detail-section');
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [slug]);

  // Función para scroll suave manual al dar clic en las pestañas
  const scrollToSection = (sectionId) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="main-layout">
      <Navbar activePage="trends" />

      <div className="content-bg-wrapper">
        <div className="container trend-detail-container">
          
          {/* BREADCRUMBS */}
          <nav className="breadcrumbs" aria-label="Miga de pan">
            <Link to="/">Home</Link>
            <span className="separator">&gt;</span>
            <Link to="/trends">Tendencias</Link>
            <span className="separator">&gt;</span>
            <span className="current">{trend.title || 'Detalle de Tendencia'}</span>
          </nav>

          {/* HERO TREND DETAIL */}
          <section className="trend-hero-grid">
            <div className="trend-hero-content">
              <div className="trend-badge-group">
                {trend.badgeAxis && <span className="badge-axis">{trend.badgeAxis}</span>}
                {trend.axisName && <span className="axis-name">{trend.axisName}</span>}
              </div>
              <span className="trend-number">{trend.trendNumber}</span>
              <h1 className="trend-title-main">{trend.title}</h1>
              <p className="trend-short-desc">{trend.shortDescription}</p>
            
              {/* <div className="trend-action-bar">
                <button className="btn-primary btn-summary">
                  Resumen ejecutivo
                  <span className="material-symbols-outlined notranslate" translate="no">expand_more</span>
                </button>
                <button className="btn-secondary btn-save">
                  <span className="material-symbols-outlined notranslate" translate="no">bookmark</span>
                  Guardar tendencia
                </button>
              </div> */}
            </div>

            <div className="trend-hero-graphic">
              <img 
                src={trend.heroImage || "/TransformacionDigitalJIC/5ri-graphic.png"} 
                alt={trend.title || "Gráfico de la tendencia"} 
              />
            </div>
          </section>
         <hr id="regla"></hr>
          {/* MENÚ DE PESTAÑAS (TABS) STICKY */}
          <nav className="trend-tabs-nav" aria-label="Secciones de la tendencia">
            <button 
              className={`tab-item ${activeTab === 'general' ? 'active' : ''}`}
              onClick={() => scrollToSection('general')}
            >
              <span className="material-symbols-outlined notranslate" translate="no">description</span>
              Descripción general
            </button>
            <button 
              className={`tab-item ${activeTab === 'drivers' ? 'active' : ''}`}
              onClick={() => scrollToSection('drivers')}
            >
              <span className="material-symbols-outlined notranslate" translate="no">bolt</span>
              Drivers
            </button>
            <button 
              className={`tab-item ${activeTab === 'implicaciones' ? 'active' : ''}`}
              onClick={() => scrollToSection('implicaciones')}
            >
              <span className="material-symbols-outlined notranslate" translate="no">target</span>
              Implicaciones
            </button>
            <button 
              className={`tab-item ${activeTab === 'relacion' ? 'active' : ''}`}
              onClick={() => scrollToSection('relacion')}
            >
              <span className="material-symbols-outlined notranslate" translate="no">hub</span>
              Relación con la 5RI
            </button>
            <button 
              className={`tab-item ${activeTab === 'recursos' ? 'active' : ''}`}
              onClick={() => scrollToSection('recursos')}
            >
              <span className="material-symbols-outlined notranslate" translate="no">find_in_page</span>
              Recursos
            </button>
          </nav>

          {/* SECCIONES DE CONTENIDO */}
          <div className="trend-content-sections">
            
            {/* DEFINICIÓN */}
            <section id="general" className="detail-section definition-box">
              <div className="section-icon-circle">
                <span className="material-symbols-outlined notranslate" translate="no">menu_book</span>
              </div>
              <div>
                <h3 className="section-title">Definición</h3>
                <p className="section-text">{trend.definition?.text}</p>
              </div>
            </section>

            {/* DRIVERS: 4 FUERZAS */}
            <section id="drivers" className="detail-section">
              <h3 className="block-heading">Drivers: cuatro fuerzas que la sostienen</h3>
              <div className="drivers-grid">
                {trend.drivers?.map((driver) => (
                  <div key={driver.id || driver.title} className="driver-card">
                    <div className="driver-icon-circle">
                      <span className="material-symbols-outlined notranslate" translate="no">{driver.icon}</span>
                    </div>
                    <h4 className="driver-title">{driver.title}</h4>
                    <p className="driver-desc">{driver.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* IMPLICACIÓN CLAVE & CITA */}
            <section id="implicaciones" className="detail-section implication-grid">
              <div className="implication-card">
                <div className="section-icon-circle">
                  <span className="material-symbols-outlined notranslate" translate="no">ads_click</span>
                </div>
                <div>
                  <h3 className="section-title">Implicación clave</h3>
                  <p className="section-text">{trend.implication?.text}</p>
                </div>
              </div>

              <div className="quote-card">
                <span className="quote-mark">“</span>
                <p className="quote-text">{trend.implication?.quote}</p>
                <span className="quote-watermark">5RI</span>
              </div>
            </section>

            {/* RELACIÓN CON LA 5RI */}
            <section id="relacion" className="detail-section relation-box">
              <div className="section-icon-circle">
                <span className="material-symbols-outlined notranslate" translate="no">hub</span>
              </div>
              <div>
                <h3 className="section-title">Relación con la 5RI</h3>
                <p className="section-text">
                  {trend.relationText || "Esta tendencia articula de manera transversal los pilares de la Quinta Revolución Industrial, impulsando a las empresas a adoptar un modelo de madurez tecnológica alineado con el impacto social y ambiental."}
                </p>
              </div>
            </section>

            {/* RECURSOS PARA PROFUNDIZAR */}
            <section id="recursos" className="detail-section">
              <h3 className="block-heading">Recursos para profundizar</h3>
              <div className="resources-grid">
                {trend.resources?.map((res) => (
                  <div key={res.id || res.title} className="resource-card">
                    <div className="resource-top">
                      <span className="resource-type">{res.type}</span>
                    </div>
                    <h4 className="resource-title">{res.title}</h4>
                    
                    {res.format === 'PDF' && <span className="format-badge pdf">PDF</span>}
                    
                    {res.format === 'Link' && (
                      <a href={res.link} target="_blank" rel="noopener noreferrer" className="resource-link">
                        Ver documento &rarr;
                      </a>
                    )}
                    
                    {res.format === 'Video' && (
                      <div className="video-time">
                        <span className="material-symbols-outlined notranslate" translate="no">play_circle</span>
                        <span>{res.duration}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* NAVEGACIÓN EN PIE DE PÁGINA */}
          <footer className="trend-navigation-footer">
            {trend.prevTrend ? (
              <button 
                className="nav-trend-btn" 
                onClick={() => navigate(`/trends/${trend.prevTrend.slug}`)}
                aria-label={`Ir a la tendencia anterior: ${trend.prevTrend.title}`}
              >
                <span className="material-symbols-outlined notranslate" translate="no">chevron_left</span>
                <div className="nav-text-container">
                  <span className="nav-sub">Tendencia anterior</span>
                  <span className="nav-title">{trend.prevTrend.title}</span>
                </div>
              </button>
            ) : (
              <div className="nav-placeholder"></div>
            )}

            <button className="nav-trend-btn center-btn" onClick={() => navigate('/trends')}>
              <span className="material-symbols-outlined notranslate" translate="no">grid_view</span>
              <span>Volver a todas las tendencias</span>
            </button>

            {trend.nextTrend ? (
              <button 
                className="nav-trend-btn nav-next" 
                onClick={() => navigate(`/trends/${trend.nextTrend.slug}`)}
                aria-label={`Ir a la siguiente tendencia: ${trend.nextTrend.title}`}
              >
                <div className="nav-text-container">
                  <span className="nav-sub">Siguiente tendencia</span>
                  <span className="nav-title">{trend.nextTrend.title}</span>
                </div>
                <span className="material-symbols-outlined notranslate" translate="no">chevron_right</span>
              </button>
            ) : (
              <div className="nav-placeholder"></div>
            )}
          </footer>

        </div>
      </div>

      <Footer />
    </div>
  );
};