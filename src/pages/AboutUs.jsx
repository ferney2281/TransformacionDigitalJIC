import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { aboutUsData } from '../data/aboutUsData';
import './AboutUs.css';

export const AboutUs = () => {
  const { header, whoWeAre, project, purpose, principles, contact } = aboutUsData;

  return (
    <div className="main-layout">
      <Navbar activePage="about-us" />

      <main className="about-us-page-wrapper">
        <div className="container about-us-container">
          
          <section className="container about-hero-section">
            <div className="about-hero-header">
                <div className="about-hero-icon-circle">
                <img src="/TransformacionDigitalJIC/sobreNosotros.svg" alt="Sobre nosotros" />
                </div>
                <div>
                <h1 className="about-hero-title">{header.title || 'Sobre nosotros'}</h1>
                <p className="about-hero-subtitle">
                    {header.description || 'Conocimiento, investigación y acción para un futuro digital, sostenible y humano.'}
                </p>
                </div>
            </div>
         </section>
          
          

          {/* QUIÉNES SOMOS */}
          <section className="about-section-card">
            <div className="section-icon-box">
              <span className="material-symbols-outlined notranslate" translate="no">
                {whoWeAre.icon}
              </span>
            </div>
            <div className="section-content">
              <h2 className="section-title">{whoWeAre.title}</h2>
              <p className="section-desc">{whoWeAre.description}</p>
            </div>
          </section>

          {/* PROYECTO QUE HACE POSIBLE */}
          <section className="about-section-card project-card">
            <div className="section-icon-box">
              <span className="material-symbols-outlined notranslate" translate="no">
                {project.icon}
              </span>
            </div>
            <div className="section-content">
              <h2 className="section-title">{project.title}</h2>
              <p className="section-desc">{project.description}</p>
            </div>
            <div className="project-logo-wrapper">
              <div className="institution-badge">
                <span className="material-symbols-outlined notranslate" translate="no">account_balance</span>
                <div className="institution-text">
                  <strong>POLITÉCNICO COLOMBIANO</strong>
                  <span>Jaime Isaza Cadavid</span>
                </div>
              </div>
            </div>
          </section>

          {/* NUESTRO PROPÓSITO */}
          <section className="about-section-card purpose-card">
            <div className="section-icon-box">
              <span className="material-symbols-outlined notranslate" translate="no">
                {purpose.icon}
              </span>
            </div>
            <div className="section-content">
              <h2 className="section-title">{purpose.title}</h2>
              <p className="section-desc">{purpose.description}</p>
            </div>
            <div className="purpose-graphic">
              <span className="material-symbols-outlined purpose-icon notranslate" translate="no">
                groups_3
              </span>
            </div>
          </section>

          {/* NUESTROS PRINCIPIOS */}
          <section className="principles-wrapper">
            <h2 className="principles-main-title">{principles.title}</h2>
            <div className="principles-grid">
              {principles.items.map((item) => (
                <div key={item.id} className="principle-card">
                  <div className="principle-icon-wrap">
                    <span className="material-symbols-outlined notranslate" translate="no">
                      {item.icon}
                    </span>
                  </div>
                  <h3 className="principle-title">{item.title}</h3>
                  <p className="principle-desc">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CONTÁCTENOS */}
          <section className="contact-banner-card">
            <div className="contact-left">
              <div className="contact-icon-box">
                <span className="material-symbols-outlined notranslate" translate="no">
                  {contact.icon}
                </span>
              </div>
              <div className="contact-info">
                <h2 className="contact-title">{contact.title}</h2>
                <p className="contact-desc">
                  {contact.description} <strong>{contact.email}</strong>.
                </p>
              </div>
            </div>

            <a href={`mailto:${contact.email}`} className="contact-btn">
              <span className="material-symbols-outlined notranslate" translate="no">
                mail
              </span>
              <span>{contact.buttonText}</span>
              <span className="material-symbols-outlined notranslate" translate="no">
                chevron_right
              </span>
            </a>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
};